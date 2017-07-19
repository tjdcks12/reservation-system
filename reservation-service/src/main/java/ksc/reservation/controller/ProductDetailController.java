package ksc.reservation.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ksc.reservation.domain.DisplayInfo;
import ksc.reservation.domain.ProductImage;
import ksc.reservation.dto.CommentByProductDto;
import ksc.reservation.dto.CommentImageIdDto;
import ksc.reservation.dto.DetailDto;
import ksc.reservation.service.DetailService;

@RestController
@RequestMapping("/api/detail")
public class ProductDetailController {

	@Autowired
	private DetailService detailService;

	@GetMapping("/{id}")
	public Collection<DetailDto> getDetail(@PathVariable int id) {
		return detailService.get(id);
	}

	@GetMapping("/{id}/comment/limit/{start}")
	public Collection<CommentByProductDto> getComment(@PathVariable int id, @PathVariable int start) {
		return detailService.getComment(id, 3*start);
	}

	// 코멘트 갯수카운트
	@GetMapping("/{id}/count")
	public Integer getCount(@PathVariable int id) {
		return detailService.getCount(id);
	}

	@GetMapping("/{id}/score")
	public float getScore(@PathVariable int id) {
		return detailService.getScore(id);
	}

	@GetMapping("/{id}/productImage")
	public Collection<ProductImage> getProductImage(@PathVariable int id) {
		return detailService.getProductImageId(id);
	}
	
	@GetMapping("/{productId}/{commentId}/commentImage")
	public Collection<CommentImageIdDto> getCommentImageId(@PathVariable int productId, @PathVariable int commentId) {
		return detailService.getCommentImageId(productId, commentId);
	}

	@GetMapping("/{id}/productImage/count")
	public Integer getProductImageCount(@PathVariable int id) {
		return detailService.getProductImageCount(id);
	}

	@GetMapping("/{productId}/{commentId}/commentImage/count")
	public Integer getCommentImageCount(@PathVariable int productId, @PathVariable int commentId) {
		return detailService.getCommentImageCount(productId, commentId);
	}
	
	@GetMapping("/{productId}/displayInfo")
	public Collection<DisplayInfo> getDisplayInfo(@PathVariable int productId){
		return detailService.getDisplayInfo(productId);
	}
}
