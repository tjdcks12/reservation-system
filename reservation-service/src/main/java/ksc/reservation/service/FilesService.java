package ksc.reservation.service;

import java.util.Collection;

import ksc.reservation.domain.FilesDomain;
import ksc.reservation.domain.Product;
import ksc.reservation.dto.FileByProductDto;
import ksc.reservation.dto.ImageFileDto;

public interface FilesService {
	public Collection<Product> getProductList();

	public Collection<ImageFileDto> getAllProductImageList();

	public Collection<ImageFileDto> getProductImageByProductId(int productId);

	public FilesDomain addFile(FilesDomain fileDomain);
	
	public Collection<FileByProductDto> getFileByProductId(int productId, int fileId);
	
	public Collection<FileByProductDto> getFileByCommentId(int commentId, int fileId);
}
