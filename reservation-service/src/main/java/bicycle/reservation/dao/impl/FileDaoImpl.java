package bicycle.reservation.dao.impl;

import bicycle.common.exception.CustomException;
import bicycle.reservation.dao.FileDao;
import bicycle.reservation.dao.sql.FileSqls;
import bicycle.reservation.model.domain.File;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class FileDaoImpl implements FileDao {
    private NamedParameterJdbcTemplate jdbc;
    private SimpleJdbcInsert insertAction;
    private RowMapper<File> fileRowMapper = BeanPropertyRowMapper.newInstance(File.class);

    public FileDaoImpl(DataSource dataSource) {
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
        this.insertAction = new SimpleJdbcInsert(dataSource).withTableName("file").usingGeneratedKeyColumns("id");
    }


    @Override
    public File selectFileByFileId(Integer fileId) {
        Map<String, Object> params = new HashMap<>();
        params.put("fileId", fileId);
        File file = null;
        try{
            file = jdbc.queryForObject(FileSqls.SELECT_FILE_BY_FILE_ID, params, fileRowMapper);
        } catch (DataAccessException e ){
            throw new CustomException();
        }

        return file;
    }

    public List<Integer> selectFilesByProductId(Integer productId) {
        Map<String, Object> params = new HashMap<>();
        params.put("productId", productId);
        List<Integer> files = null;
        try {
            files = jdbc.queryForList(FileSqls.SELECT_FILES_BY_PRODUCT_ID, params, Integer.class);
        }catch (DataAccessException e){
            throw new CustomException();
        }
        return files;
    }
}
