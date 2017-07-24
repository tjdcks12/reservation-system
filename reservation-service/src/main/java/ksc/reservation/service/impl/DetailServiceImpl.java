package ksc.reservation.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.DetailDao;
import ksc.reservation.domain.DisplayInfo;
import ksc.reservation.domain.ProductImage;
import ksc.reservation.dto.CommentByProductDto;
import ksc.reservation.dto.CommentImageIdDto;
import ksc.reservation.dto.DetailDto;
import ksc.reservation.service.DetailService;

@Service
public class DetailServiceImpl implements DetailService{
	
	@Autowired
	DetailDao detailDao;
	
	@Override
	@Transactional(readOnly = true)
	public Collection<DetailDto> get(int id) {
		return detailDao.selectDetail(id);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<CommentByProductDto> getComment(int id, int start){
		int term = 3;
		return detailDao.selectUserCommentByProductId(id, start, term);
	}
	@Override
	@Transactional(readOnly = true)
	public Integer getCount(int id) {
		return detailDao.selectCommentCount(id);
	}
	
	@Override
	@Transactional(readOnly = true)
	public float getScore(int id) {
		return detailDao.selectCommentScore(id);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ProductImage> getProductImageId(int id){
		return detailDao.selectProductImageId(id);
	}
	@Override
	@Transactional(readOnly = true)
	public Integer getProductImageCount(int id) {
		return detailDao.selectProductImageCount(id);
	}
	@Override
	@Transactional(readOnly = true)
	public Collection<CommentImageIdDto> getCommentImageId(int productId, int commentId) {
		return detailDao.selectCommentImageCount(productId, commentId);
	}
	@Override
	@Transactional (readOnly = true)
	public Integer getCommentImageCount(int productId, int commentId) {
		return detailDao.selectCommentImageCounts(productId, commentId);
	}
	@Override
	@Transactional (readOnly = true)	
	public Collection<DisplayInfo> getDisplayInfo(int productId){
		return detailDao.selectDisplayInfo(productId);
	}
	
}
