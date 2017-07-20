package ksc.reservation.domain;

public class Users {
	int id;
	String username;
	String email;
	String tel;
	String nickname;
	String sns_id;
	String sns_type;
	String sns_profile;
	int admin_flag;
	String create_date;
	String modify_date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getSns_id() {
		return sns_id;
	}
	public void setSns_id(String sns_id) {
		this.sns_id = sns_id;
	}
	public String getSns_type() {
		return sns_type;
	}
	public void setSns_type(String sns_type) {
		this.sns_type = sns_type;
	}
	public String getSns_profile() {
		return sns_profile;
	}
	public void setSns_profile(String sns_profile) {
		this.sns_profile = sns_profile;
	}
	public int getAdmin_flag() {
		return admin_flag;
	}
	public void setAdmin_flag(int admin_flag) {
		this.admin_flag = admin_flag;
	}
	public String getCreate_date() {
		return create_date;
	}
	public void setCreate_date(String create_date) {
		this.create_date = create_date;
	}
	public String getModify_date() {
		return modify_date;
	}
	public void setModify_date(String modify_date) {
		this.modify_date = modify_date;
	}
	
	

}
