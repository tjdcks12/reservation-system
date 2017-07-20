package ksc.reservation.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import ksc.reservation.domain.FilesDomain;
import ksc.reservation.dto.FileByProductDto;
import ksc.reservation.service.FilesService;

@Controller
@RequestMapping("/files")
public class FilesController {
	private String baseDir = "c:" + File.separator + "FileTemp" + File.separator;

	@Autowired
	private FilesService filesService;

	@GetMapping
	public String fileform(HttpServletRequest request) {
		request.setAttribute("productList", filesService.getProductList());
		request.setAttribute("productImageList", filesService.getAllProductImageList());

		return "files";
	}

	@GetMapping("/get")
	public String get(@RequestParam("product_list") int id, HttpServletRequest request) {
		filesService.getProductImageByProductId(id);
		request.setAttribute("productImageList", filesService.getProductImageByProductId(id));
		return "files";
	}

	@PostMapping
	public String create(@RequestParam("type") String type, @RequestParam("file") MultipartFile[] files) {
		if (files != null && files.length > 0) {
			String formattedDate = baseDir
					+ new SimpleDateFormat("yyyy" + File.separator + "MM" + File.separator + "dd").format(new Date());
			File f = new File(formattedDate);
			if (!f.exists()) { // 파일이 존재하지 않는다면
				f.mkdirs(); // 해당 디렉토리를 만든다. 하위폴더까지 한꺼번에 만든다.
			}
			for (MultipartFile file : files) {
				String contentType = file.getContentType();
				String originalFilename = file.getOriginalFilename();
				long size = file.getSize();
				String uuid = UUID.randomUUID().toString();
				String saveFileName = formattedDate + File.separator + uuid;
				try (InputStream in = file.getInputStream();
						FileOutputStream fos = new FileOutputStream(saveFileName)) {
					int readCount = 0;
					byte[] buffer = new byte[512];
					while ((readCount = in.read(buffer)) != -1) {
						fos.write(buffer, 0, readCount);
					}

					System.out.println(type);
					// if() 만약 Product 이미지 파일이라면

					FilesDomain fileDomain = new FilesDomain();
					fileDomain.setFile_name(originalFilename);
					fileDomain.setFile_length(size);
					fileDomain.setContent_type(contentType);
					fileDomain.setSave_file_name(saveFileName);
					if (type.equals("product")) {
						fileDomain.setUser_id(1);
						filesService.addFile(fileDomain);
						//insert product_image --> product_id param 받아와서 insert할때 매개변수로 사용
					}
					
					else if (type.equals("comment")) {
						fileDomain.setUser_id(2);//user_id 값 나중에 로그인한걸로 해야할듯
						filesService.addFile(fileDomain);
						//insert comment_image --> comment_id param 받아와서 insert할때 매개변수로 사용
					}

				} catch (Exception ex) {
					ex.printStackTrace();
				}
			}
		}
		return "redirect:/files";
	}

	@GetMapping(path = "/product/{id}/{fileId}")
	public void downloadProductImage(@PathVariable(name = "id") int id, @PathVariable(name = "fileId") int fileId,
			HttpServletResponse response) {
		Collection<FileByProductDto> fileByProductDto = filesService.getFileByProductId(id, fileId);
		Iterator<FileByProductDto> itr = fileByProductDto.iterator();
		String originalFilename;
		String contentType = "image/jpeg";
		int fileSize;
		String saveFileName;
		while (itr.hasNext()) {
			FileByProductDto s = itr.next();
			originalFilename = s.getFile_name();
			fileSize = s.getFile_length();
			saveFileName = s.getSave_file_name();

			response.setHeader("Content-Disposition", "attachment; filename=\"" + originalFilename + "\";");
			response.setHeader("Content-Transfer-Encoding", "binary");
			response.setHeader("Content-Type", contentType);
			response.setHeader("Content-Length", "" + fileSize);
			response.setHeader("Pragma", "no-cache;");
			response.setHeader("Expires", "-1;");

			java.io.File readFile = new java.io.File(saveFileName);
			if (!readFile.exists()) { // 파일이 존재하지 않다면
				throw new RuntimeException("file not found");
			}

			FileInputStream fis = null;
			try {
				fis = new FileInputStream(readFile);
				FileCopyUtils.copy(fis, response.getOutputStream()); // 파일을 저장할때도 사용할 수 있다.
				response.getOutputStream().flush();
			} catch (Exception ex) {
				throw new RuntimeException(ex);
			} finally {
				try {
					fis.close();
				} catch (Exception ex) {
					// 아무것도 하지 않음 (필요한 로그를 남기는 정도의 작업만 함.)
				}
			}
		}
	}
	@GetMapping(path = "/comment/{id}/{fileId}")
	public void downloadCommentImage(@PathVariable(name = "id") int id, @PathVariable(name = "fileId") int fileId,
			HttpServletResponse response) {
		Collection<FileByProductDto> fileByProductDto = filesService.getFileByCommentId(id, fileId);
		Iterator<FileByProductDto> itr = fileByProductDto.iterator();
		String originalFilename;
		String contentType = "image/jpeg";
		int fileSize;
		String saveFileName;
		while (itr.hasNext()) {
			FileByProductDto s = itr.next();
			originalFilename = s.getFile_name();
			fileSize = s.getFile_length();
			saveFileName = s.getSave_file_name();

			response.setHeader("Content-Disposition", "attachment; filename=\"" + originalFilename + "\";");
			response.setHeader("Content-Transfer-Encoding", "binary");
			response.setHeader("Content-Type", contentType);
			response.setHeader("Content-Length", "" + fileSize);
			response.setHeader("Pragma", "no-cache;");
			response.setHeader("Expires", "-1;");

			java.io.File readFile = new java.io.File(saveFileName);
			if (!readFile.exists()) { // 파일이 존재하지 않다면
				throw new RuntimeException("file not found");
			}

			FileInputStream fis = null;
			try {
				fis = new FileInputStream(readFile);
				FileCopyUtils.copy(fis, response.getOutputStream()); // 파일을 저장할때도 사용할 수 있다.
				response.getOutputStream().flush();
			} catch (Exception ex) {
				throw new RuntimeException(ex);
			} finally {
				try {
					fis.close();
				} catch (Exception ex) {
					// 아무것도 하지 않음 (필요한 로그를 남기는 정도의 작업만 함.)
				}
			}
		}
	}

}
