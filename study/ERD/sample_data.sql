insert into CATEGORY(id, name) value (1,'전시');
insert into CATEGORY(id, name) value (2,'뮤지컬');
insert into CATEGORY(id, name) value (3,'콘서트');
insert into CATEGORY(id, name) value (4,'클래식');
insert into CATEGORY(id, name) value (5,'연극');

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(1, 1, '전시 1', '전시 1 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(2, 1, '전시 2', '전시 2 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(3, 2, '뮤지컬 1', '뮤지컬 1 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(4, 2, '뮤지컬 2', '뮤지컬 2 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(5, 3, '콘서트 1', '콘서트 1 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(6, 3, '콘서트 2', '콘서트 2 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(7, 3, '콘서트 3', '콘서트 3 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(8, 3, '콘서트 4', '콘서트 4 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(9, 3, '콘서트 5', '콘서트 5 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(10, 3, '콘서트 6', '콘서트 6 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(11, 4, '클래식 1', '클래식 1 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );

insert into PRODUCT(id, category_id, name, description, sales_start, sales_end, sales_flag, event, create_date, modify_date)
values(12, 5, '연극 1', '연극 1 - description', '2017-01-01 23:50:40', '2017-01-10 23:50:40',0, 'event 정보', now(), now() );


insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(1, 1, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 1', '장소지번 1', '장소도로주소 1', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(2, 2, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 2', '장소지번 2', '장소도로주소 2', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(3, 3, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 3', '장소지번 3', '장소도로주소 3', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(4, 4, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 4', '장소지번 4', '장소도로주소 4', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(5, 5, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 5', '장소지번 5', '장소도로주소 5', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(6, 6, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 6', '장소지번 6', '장소도로주소 6', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(7, 7, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 7', '장소지번 7', '장소도로주소 7', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(8, 8, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 8', '장소지번 8', '장소도로주소 8', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(9, 9, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 9', '장소지번 9', '장소도로주소 9', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(10, 10, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 10', '장소지번 10', '장소도로주소 10', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(11, 11, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 11', '장소지번 11', '장소도로주소 11', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());

insert into DISPLAY_INFO(id, product_id, observation_time, display_start, display_end, place_name, place_lot, place_street, tel, homepage, email, create_date, modify_date)
values(12, 12, '09:00-18:00', '2017-01-01 23:50:40', '2017-01-10 23:50:40', '장소명 12', '장소지번 12', '장소도로주소 12', '010-1111-1111', 'http://www.naver.com', 'carami@nate.com', now(), now());




insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (1, 1, '상세정보 1', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (2, 2, '상세정보 2', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (3, 3, '상세정보 3', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (4, 4, '상세정보 4', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (5, 5, '상세정보 5', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (6, 6, '상세정보 6', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (7, 7, '상세정보 7', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (8, 8, '상세정보 8', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (9, 9, '상세정보 9', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (10, 10, '상세정보 10', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (11, 11, '상세정보 11', now(), now());
insert into PRODUCT_DETAIL(id, product_id, content, create_date, modify_date) values (12, 12, '상세정보 12', now(), now());


insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 1, 1, 1, 5000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 2, 1, 2, 3000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 3, 1, 3, 1000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 4, 2, 1, 5000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 5, 2, 2, 3000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 6, 3, 1, 1000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 7, 4, 1, 3000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 8, 5, 1, 4000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 9, 6, 1, 9000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 10, 7, 1, 11000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 11, 8, 1, 12000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 12, 9, 1, 13000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 13, 10, 1, 14000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 14, 11, 1, 15000, 0.1, now(), now());
insert into PRODUCT_PRICE(id, product_id, price_type, price, discount_rate, create_date, modify_date) values( 15, 12, 1, 16000, 0.1, now(), now());
