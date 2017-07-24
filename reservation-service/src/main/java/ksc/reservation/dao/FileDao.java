package ksc.reservation.dao;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import ksc.reservation.domain.FilesDomain;
import ksc.reservation.domain.Product;
import ksc.reservation.dto.FileByProductDto;
import ksc.reservation.dto.ImageFileDto;

@Repository
public class FileDao {
	private NamedParameterJdbcTemplate jdbc;
	private SimpleJdbcInsert insertAction;
	private RowMapper<Product> productRowMapper = BeanPropertyRowMapper.newInstance(Product.class);
	private RowMapper<ImageFileDto> productImageRowMapper = BeanPropertyRowMapper.newInstance(ImageFileDto.class);
	private RowMapper<FileByProductDto> fileRowMapper = BeanPropertyRowMapper.newInstance(FileByProductDto.class);
	
	public FileDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
		this.insertAction = new SimpleJdbcInsert(dataSource)
				.withTableName("file")
				.usingGeneratedKeyColumns("id");
	}
	
	public int insert(FilesDomain fileDomain) {
		SqlParameterSource params = new BeanPropertySqlParameterSource(fileDomain);
		return insertAction.executeAndReturnKey(params).intValue();
	}
	
	public Collection<Product> selectAllProduct(){
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.query(FileSqls.SELECT_ALL_PRODUCT, params, productRowMapper);
	}
	
	public Collection<ImageFileDto> selectAllProductImageList(){
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.query(FileSqls.SELECT_ALL_IMAGE_LIST, params, productImageRowMapper);
	}
	
	public Collection<ImageFileDto> selectProductImageByProduct(int product_id){
		Map<String, Object> params = new HashMap<>();
		params.put("id", product_id);
		return jdbc.query(FileSqls.SELECT_IMAGE_LIST_BY_PRODUCT, params, productImageRowMapper);
	}
	
	public Collection<FileByProductDto> selectFileByProduct(int product_id, int file_id){
		Map<String, Object> params = new HashMap<>();
		params.put("id", product_id);
		params.put("fileId", file_id);
		return jdbc.query(FileSqls.SELECT_SAVE_FILE_NAME_BY_PRODUCT, params, fileRowMapper);
	}
	
	public Collection<FileByProductDto> selectFileByComment(int comment_id, int file_id){
		Map<String, Object> params = new HashMap<>();
		params.put("id", comment_id);
		params.put("fileId", file_id);
		return jdbc.query(FileSqls.SELECT_SAVE_FILE_NAME_BY_COMMENT, params, fileRowMapper);
	}
}
