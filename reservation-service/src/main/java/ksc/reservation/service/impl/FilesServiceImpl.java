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
		return fileDao.selectAllProduct();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ImageFileDto> getAllProductImageList(){
		return fileDao.selectAllProductImageList();
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<ImageFileDto> getProductImageByProductId(int productId){
		return fileDao.selectProductImageByProduct(productId);
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
		return fileDao.selectFileByProduct(productId, fileId);
	}
	
	@Override
	@Transactional(readOnly = true)
	public Collection<FileByProductDto> getFileByCommentId(int commentId, int fileId){
		return fileDao.selectFileByComment(commentId, fileId);
	}
}
