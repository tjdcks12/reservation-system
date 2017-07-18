 package ksc.reservation.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ksc.reservation.dto.ProductDto;
import ksc.reservation.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	//product 받아오기
	
	@GetMapping("/limit/{limitNum}")
	public Collection<ProductDto> getProduct(@PathVariable int limitNum){
		return productService.get(limitNum*10);
	}
	@GetMapping("/{categoryId}/limit/{limitNumCate}")
	public Collection<ProductDto> getProductByCate(@PathVariable int limitNumCate, @PathVariable int categoryId){
		return productService.getByCategory(limitNumCate*10, categoryId);
	}
	
	@GetMapping("/count")
	public Integer getCount() {
		return productService.getCount();
	}
	 
	@GetMapping("/count/{categoryId}")
	public Integer getCount(@PathVariable int categoryId) {
		return productService.getCountByCategory(categoryId);
	}
	
}
