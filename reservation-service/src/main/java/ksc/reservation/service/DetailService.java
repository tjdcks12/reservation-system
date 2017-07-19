package ksc.reservation.service;

import java.util.Collection;

import ksc.reservation.domain.DisplayInfo;
import ksc.reservation.domain.ProductImage;
import ksc.reservation.dto.CommentByProductDto;
import ksc.reservation.dto.CommentImageIdDto;
import ksc.reservation.dto.DetailDto;

public interface DetailService {
	public Collection<DetailDto> get(int id);
	public Collection<CommentByProductDto> getComment(int id, int start);
	public Integer getCount(int id);
	public float getScore(int id);
	public Collection<ProductImage> getProductImageId(int id);
	public Collection<CommentImageIdDto> getCommentImageId(int productId, int commentId);
	public Integer getProductImageCount(int id);
	public Integer getCommentImageCount(int productId, int commentId);
	public Collection<DisplayInfo> getDisplayInfo(int productId);
}
