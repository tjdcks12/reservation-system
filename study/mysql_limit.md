# LIMIT

- SELECT * FROM CATEGORY LIMIT 10;
> CATEGORY 테이블의 레코드를 처음부터 10건 읽어옵니다.  

- SELECT * FROM CATEGORY LIMIT 10 OFFSET 15;
> CATEGORY 테이블의 레코드를 15번째부터 10건 읽어옵니다.  LIMIT는 가져올 row 의 수를 지정하고, OFFSET은 몇 번째 row부터 가져올건지 결정합니다.  

- SELECT * FROM Orders LIMIT 15, 10;   
> 위의 쿼리와 결과가 같습니다.  15가 몇 번째부터 가져올것인지를 결정하고, 10이 몇 건을 가져올 것인지를 결정합니다.  



# 참고

- 오라클 DB는 LIMIT를 제공하지 않습니다.  아래 쿼리처럼 rownum을 이용해서 결과를 얻어와야 합니다.  
select r, * from (

select rownum r, * from (

select * from CATEGORY order by name desc )

where rownum <=25)

where r>=15

> 결과가 15번 row부터  25번 row 까지 읽어옵니다.   
rownum 이 먼저 결정되고 정렬이 됨으로 쿼리문 안에 정렬하는 구문이 있을때는 반드시 보기처럼
수행해야 원하는 결과를 얻어올 수 있습니다.  
