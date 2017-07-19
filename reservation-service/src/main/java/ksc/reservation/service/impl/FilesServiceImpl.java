package ksc.reservation.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ksc.reservation.dao.FileDao;
import ksc.reservation.domain.FilesDomain;
import ksc.reservation.domain.Product;
import ksc.reservation.dto.FileByProductDto;
import ksc.reservation.dto.ImageFileDto;
import ksc.reservation.service.FilesService;

@Service
public class FilesServiceImpl implements FilesService{
	@Autowired
	FileDao fileDao;
	
	@Override
	@Transactional(readOnly = true)
	public Collection<Product> getProductList(){
		return fileDao.select_all_product();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ImageFileDto> getAllProductImageList(){
		return fileDao.select_all_product_image_list();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ImageFileDto> getProductImageByProductId(int productId){
		return fileDao.select_product_image_by_product(productId);
	}
	
	@Override
	@Transactional(readOnly = false)
	public FilesDomain addFile(FilesDomain fileDomain) {
		int insert = fileDao.insert(fileDomain);
		fileDomain.setId(insert);
		return fileDomain;
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<FileByProductDto> getFileByProductId(int productId, int fileId) {
		return fileDao.select_file_by_product(productId, fileId);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<FileByProductDto> getFileByCommentId(int commentId, int fileId){
		return fileDao.select_file_by_comment(commentId, fileId);
	}
}
