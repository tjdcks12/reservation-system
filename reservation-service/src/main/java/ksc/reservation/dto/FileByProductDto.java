package ksc.reservation.dto;

public class FileByProductDto {
	Integer id;
	Integer productId;
	Integer fileId;
	Integer userId;
	String file_name;
	String save_file_name;
	Integer file_length;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public Integer getFileId() {
		return fileId;
	}
	public void setFileId(Integer fileId) {
		this.fileId = fileId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getFile_name() {
		return file_name;
	}
	public void setFile_name(String file_name) {
		this.file_name = file_name;
	}
	public String getSave_file_name() {
		return save_file_name;
	}
	public void setSave_file_name(String save_file_name) {
		this.save_file_name = save_file_name;
	}
	public Integer getFile_length() {
		return file_length;
	}
	public void setFile_length(Integer file_length) {
		this.file_length = file_length;
	}
	
	
	
	
}
