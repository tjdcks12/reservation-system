# 파일 업로드와 파일 다운로드

1. pom.xml 파일에 파일 업로드와 관련된 라이브러리를 추가한다.

```
        <!-- file upload -->
        <dependency>
            <groupId>commons-fileupload</groupId>
            <artifactId>commons-fileupload</artifactId>
            <version>1.2.1</version>
        </dependency>
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>1.4</version>
        </dependency>
```

2. ServletContextConfig 에 MultipartResolver  Bean을 설정한다.

원래 HTTP 프로토콜은 파일 업로드를 지원하지 않았다. 추후에 파일업로드를 위해서 Body내용에 Multipart라는 기능을 이용하여 파일을 업로드 할 수 있도록 하였다.
text파일을 여러개의 part로 나눠서 각 파트별로 파일내용을 인코딩하여 포함시키는 방식인데, 이 방식은 email에서 먼저 사용된 방식이었다.

참고 자료 : http://lng1982.tistory.com/209

스프링은 Multipart 지원 기능을 제공하고 있기 때문에, 이 기능을 이용하면 추가적인 처리없이 Multipart 형식으로 전송된 파라미터와 파일 정보를 쉽게 구할 수 있다.

```
    @Bean
    public MultipartResolver multipartResolver() {
        org.springframework.web.multipart.commons.CommonsMultipartResolver multipartResolver = new org.springframework.web.multipart.commons.CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(10485760); // 1024 * 1024 * 10
        return multipartResolver;
    }
```

3. WebInitializer 에 CharacterEncodingFilter를 설정하여 post로 값을 넘겨도 한글이 깨지지 않도록 하기

form의 method를 post방식으로 해야만 파일을 업로드 할 수 있다. request의 body에 파일정보가 전달됙 때문이다. 파일 정보와 함께 여러가지 파라미터를 함께 전달할 수 있는데, 이때 한글이 깨지는 경우가 있다.
한글이 깨지지 않도록 하기 위해서 보통 tomcat의 connector 설정에 encoding설정을 하고, 필터를 이용한다.

```
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {

        // Encoding Filter 설정, post로 값을 넘길때 깨지지 않도록
        EnumSet<DispatcherType> dispatcherTypes = EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD);

        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
        characterEncodingFilter.setEncoding("UTF-8");
        characterEncodingFilter.setForceEncoding(true);

        FilterRegistration.Dynamic characterEncoding = servletContext.addFilter("characterEncoding", characterEncodingFilter);
        characterEncoding.addMappingForUrlPatterns(dispatcherTypes, true, "/*");

        // dispatcherServlet 설정
        WebApplicationContext context = getContext();
        servletContext.addListener(new ContextLoaderListener(context));
        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("DispatcherServlet", new DispatcherServlet(context));
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping(MAPPING_URL);
    }
```

4. 파일 업로드 form 작성하기. /WEB-INF/views/files.jsp


form을 보면 enctype부분이 multipart/form-data 로 정의된 것을 알 수 있다.
반드시 파일을 업로드할 때는 해당 속성이 지정되어 있어야 한다.
method는 반드시 post여야 한다.

input type="file"인 경우 name이 모두 file인 것을 알 수 있다. 이 경우 Controller에게 name이라는 이름으로 파라미터가 배열로 전달된다.

```
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>file등록 폼</title>
</head>
<body>
<form method="post" action="/files" enctype="multipart/form-data">
    title : <input type="text" name="title"><br>
    <input type="file" name="file"><br>
    <input type="file" name="file"><br>
    <input type="submit" value="등록">
</form>
</body>
</html>
```

5. upload & 다운로드

- 파일정보를 원래는 db에 저장해야하는데, 이부분은 생략했다. db에 어떤 정보가 저장되어야 할지 고민해보자.
- 윈도우는 파일 경로에 '\' 가 사용되고, 맥, 리눅스 등 유닉스계열 운영체제에서는 '/'가 사용된다. File.separator는 운영체제에 따라서 자동으로 해당 문자를 사용할 수 있도록 해준다.
- 하나의 디렉토리에는 저장될 수 있는 파일의 수가 제한되어 있다.
- 하나의 디렉토리에 너무 많은 파일이 저장되어 있으면 관리가 어렵다. 파일을 '년/월/일' 폴더를 만들고 그 안에 저장하도록 한다.
- 사용자는 같은 이름의 파일을 업로드 할 수 있다. 원본 파일명은 db에 저장되도록 하고, 실제 파일명은 uuid를 이용하여 저장하도록 한다. uuid만으로도 중복될 것 같다면 uuid + 날짜long값 을 합한 값을 이용할 수도 있다.
- 외부 client가 접근할 수 없는 경로에 파일이 업로드 되기 때문에,이를 다운로드할 수 있는 방법이 필요하다.
- 파일은 'c:\temp' 디렉토리에 저장된다고 가정한다. 해당 부분은 본인에 맞도록 수정하도록 하자.


위에 대한 설명은 코드로 대신한다.


```
package carami.todo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;


@Controller
@RequestMapping("/files")
public class FilesController {
    private String baseDir = "c:" + File.separator + "temp" + File.separator; // c:\temp 디렉토리를 미리 만들어둔다.

    @GetMapping
    public String fileform(){
        return "files";
    }

    @PostMapping
    public String create(
            @RequestParam("title") String title,
            @RequestParam("file") MultipartFile[] files){

        if(files != null && files.length > 0){

            // windows 사용자라면 "c:\temp\년도\월\일" 형태의 문자열을 구한다.
            String formattedDate = baseDir + new SimpleDateFormat("yyyy" + File.separator + "MM" + File.separator + "dd").format(new Date());
            File f = new File(formattedDate);
            if(!f.exists()){ // 파일이 존재하지 않는다면
                f.mkdirs(); // 해당 디렉토리를 만든다. 하위폴더까지 한꺼번에 만든다.
            }

            for(MultipartFile file : files) {
                String contentType = file.getContentType();
                String name = file.getName();
                String originalFilename = file.getOriginalFilename();
                long size = file.getSize();

                String uuid = UUID.randomUUID().toString(); // 중복될 일이 거의 없다.
                String saveFileName = formattedDate + File.separator + uuid; // 실제 저장되는 파일의 절대 경로

                // 아래에서 출력되는 결과는 모두 database에 저장되야 한다.
                // pk 값은 자동으로 생성되도록 한다.
                System.out.println("title :" + title);
                System.out.println("contentType :" + contentType);
                System.out.println("name :" + name);
                System.out.println("originalFilename : " + originalFilename);
                System.out.println("size : " + size);
                System.out.println("saveFileName : " + saveFileName);

                // 실제 파일을 저장함.
                // try-with-resource 구문. close()를 할 필요가 없다. java 7 이상에서 가능
                try(
                        InputStream in = file.getInputStream();
                        FileOutputStream fos = new FileOutputStream(saveFileName)){
                    int readCount = 0;
                    byte[] buffer = new byte[512];
                    while((readCount = in.read(buffer)) != -1){
                        fos.write(buffer,0,readCount);
                    }
                }catch(Exception ex){
                    ex.printStackTrace();
                }
            } // for
        } // if

        return "redirect:/files";
    }

    // files/dbPk값 을 받아들여서 다운로드 하도록 한다.
    // 여기에서는 db에서 읽어들였다는 것을 가정하고 프로그래밍한다.
    @GetMapping(path="/{id}")
    public void downloadReservationUserCommentImage(
            @PathVariable(name="id") long id,
            HttpServletResponse response
    ){
        // id를 이용하여 파일의 정보를 읽어온다.
        // 이 부분은 원래 db에서 읽어오는 것인데 db부분은 생략했다.

        String originalFilename = "원본파일명";
        String contentType = "image/jpeg";
        int fileSize = 271621;
        // 해당 파일이 이미 존재해야한다.
        String saveFileName = "c:/temp/2017/07/12/61405ccf-5147-493a-9b9a-ef0375e40dfd";

        response.setHeader("Content-Disposition", "attachment; filename=\"" + originalFilename + "\";");
        response.setHeader("Content-Transfer-Encoding", "binary");
        response.setHeader("Content-Type", contentType);
        response.setHeader("Content-Length", ""+ fileSize);
        response.setHeader("Pragma", "no-cache;");
        response.setHeader("Expires", "-1;");

        java.io.File readFile = new java.io.File(saveFileName);
        if(!readFile.exists()){ // 파일이 존재하지 않다면
            throw new RuntimeException("file not found");
        }

        FileInputStream fis = null;
        try{
            fis = new FileInputStream(readFile);
            FileCopyUtils.copy(fis, response.getOutputStream()); // 파일을 저장할때도 사용할 수 있다.
            response.getOutputStream().flush();
        }catch(Exception ex){
            throw new RuntimeException(ex);
        }finally {
            try {
                fis.close();
            }catch(Exception ex){
                // 아무것도 하지 않음 (필요한 로그를 남기는 정도의 작업만 함.)
            }
        }

    }

}
```
