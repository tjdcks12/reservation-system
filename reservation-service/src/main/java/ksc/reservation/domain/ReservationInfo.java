package ksc.reservation.domain;

public class ReservationInfo {
	int id;
	int product_id;
	int user_id;
	int general_ticket_count;
	int youth_ticket_count;
	int child_ticket_count;
	String reservation_name;
	String reservation_tel;
	String reservation_email;
	String reservation_date;
	int reservation_type;
	String create_date;
	String modify_date;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getGeneral_ticket_count() {
		return general_ticket_count;
	}
	public void setGeneral_ticket_count(int general_ticket_count) {
		this.general_ticket_count = general_ticket_count;
	}
	public int getYouth_ticket_count() {
		return youth_ticket_count;
	}
	public void setYouth_ticket_count(int youth_ticket_count) {
		this.youth_ticket_count = youth_ticket_count;
	}
	public int getChild_ticket_count() {
		return child_ticket_count;
	}
	public void setChild_ticket_count(int child_ticket_count) {
		this.child_ticket_count = child_ticket_count;
	}
	public String getReservation_name() {
		return reservation_name;
	}
	public void setReservation_name(String reservation_name) {
		this.reservation_name = reservation_name;
	}
	public String getReservation_tel() {
		return reservation_tel;
	}
	public void setReservation_tel(String reservation_tel) {
		this.reservation_tel = reservation_tel;
	}
	public String getReservation_email() {
		return reservation_email;
	}
	public void setReservation_email(String reservation_email) {
		this.reservation_email = reservation_email;
	}
	public String getReservation_date() {
		return reservation_date;
	}
	public void setReservation_date(String reservation_date) {
		this.reservation_date = reservation_date;
	}
	public int getReservation_type() {
		return reservation_type;
	}
	public void setReservation_type(int reservation_type) {
		this.reservation_type = reservation_type;
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
