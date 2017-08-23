package bicycle.common.utils;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class UsersUtil {

    public static Map<String, String> JSONStringToMap(String str) {
        Map<String, String> map = new HashMap<String, String>();
        ObjectMapper mapper = new ObjectMapper();

        try {
            map = mapper.readValue(str, new TypeReference<HashMap<String, String>>() {
            });
        } catch (JsonParseException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return map;
    }

    public static String getHtml(String url, String authorization) {
        HttpURLConnection httpRequest = null;
        String resultValue = null;
        try {
            URL u = new URL(url);
            httpRequest = (HttpURLConnection) u.openConnection();
            httpRequest.setRequestProperty("Content-type", "text/xml; charset=UTF-8");

            if (authorization != null) {
                httpRequest.setRequestProperty("Authorization", authorization);
            }
            httpRequest.connect();
            BufferedReader in = new BufferedReader(new InputStreamReader(httpRequest.getInputStream(), "UTF-8"));

            StringBuffer sb = new StringBuffer();
            String line = null;
            while ((line = in.readLine()) != null) {
                sb.append(line);
                sb.append("\n");
            }
            resultValue = sb.toString();
        } catch (IOException e) {

        } finally {
            if (httpRequest != null) {
                httpRequest.disconnect();
            }
        }
        return resultValue;
    }
}
