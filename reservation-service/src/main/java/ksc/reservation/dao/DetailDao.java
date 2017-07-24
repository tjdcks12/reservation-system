package ksc.reservation.dao;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import ksc.reservation.domain.DisplayInfo;
import ksc.reservation.domain.ProductImage;
import ksc.reservation.dto.CommentByProductDto;
import ksc.reservation.dto.CommentImageIdDto;
import ksc.reservation.dto.DetailDto;

@Repository
public class DetailDao {
	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<DetailDto> detailRowMapper = BeanPropertyRowMapper.newInstance(DetailDto.class);
	private RowMapper<CommentByProductDto> commentRowMapper = BeanPropertyRowMapper.newInstance(CommentByProductDto.class);
	private RowMapper<ProductImage> productImageRowMapper = BeanPropertyRowMapper.newInstance(ProductImage.class);
	private RowMapper<CommentImageIdDto> commentImageRowMapper = BeanPropertyRowMapper.newInstance(CommentImageIdDto.class);
	private RowMapper<DisplayInfo> displayRowMapper = BeanPropertyRowMapper.newInstance(DisplayInfo.class);
	public DetailDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
	}
	
	public Collection<DetailDto> selectDetail(int product_id){
		Map<String, Object> params = new HashMap<>();
		params.put("productId", product_id);
		return jdbc.query(DetailSqls.SELECT_DETAIL, params, detailRowMapper);
	}
	
	public Collection<CommentByProductDto> selectUserCommentByProductId(int product_id, int start, int term){
		Map<String, Object> params = new HashMap<>();
		params.put("productId", product_id);
		params.put("start", start);
		params.put("term", term);
		return jdbc.query(DetailSqls.SELECT_COMMENT, params, commentRowMapper);
	}
	
	//코멘트 건수 및 스코어	
	public Integer selectCommentCount(int product_id) {
		Map<String, Object> params = new HashMap<>();
		params.put("product_id", product_id);
		return jdbc.queryForObject(DetailSqls.SELECT_COMMENT_COUNT, params, Integer.class);
	}
	
	public float selectCommentScore(int product_id) {
		Map<String, Object> params = new HashMap<>();
		params.put("product_id", product_id);
		return jdbc.queryForObject(DetailSqls.SELECT_COMMENT_SCORE, params, float.class);
	}
	
	
	//이미지 다운로딩
	public Collection<ProductImage> selectProductImageId(int id){
		Map<String, Object> params = new HashMap<>();
		params.put("id", id);
		return jdbc.query(DetailSqls.SELECT_PRODUCT_IMAGE_ID, params, productImageRowMapper);
	}
	
	public Collection<CommentImageIdDto> selectCommentImageCount(int productId, int commentId) {
		Map<String, Object> params = new HashMap<>();
		params.put("productId", productId);
		params.put("commentId", commentId);
		return jdbc.query(DetailSqls.SELECT_COMMENT_IMAGE_ID, params, commentImageRowMapper);
	}
	
	
	//이미지 카운트
	public Integer selectProductImageCount(int id) {
		Map<String, Object> params = new HashMap<>();
		params.put("id", id);
		return jdbc.queryForObject(DetailSqls.SELECT_PRODUCT_IMAGE_COUNT, params, Integer.class);
	}
	
	public Integer selectCommentImageCounts(int productId, int commentId) {
		Map<String, Object> params = new HashMap<>();
		params.put("productId", productId);
		params.put("commentId", commentId);
		return jdbc.queryForObject(DetailSqls.SELECT_COMMENT_IMAGE_COUNT, params, Integer.class);
	}
	
	
	//display info
	public Collection<DisplayInfo> selectDisplayInfo(int productId){
		Map<String, Object> params = new HashMap<>();
		params.put("productId", productId);
		return jdbc.query(DetailSqls.SELECT_DISPLAY_INFO, params, displayRowMapper);
	}
	
	
}
