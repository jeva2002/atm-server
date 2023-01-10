CREATE DATABASE users_atm;

USE users_atm;

CREATE TABLE users_list(
  id VARCHAR(60),
  firstname VARCHAR(60),
  lastname VARCHAR(60),
  email VARCHAR(60),
  cardNumber VARCHAR(60),
  securityCode VARCHAR(3),
  birthday datetime,
  role VARCHAR(15),
  refresh_token VARCHAR(255),
  PRIMARY KEY(id)
);

INSERT INTO users_list (id, firstname, lastname, email, cardNumber, securityCode, birthday,  role) 
values ('1233456', 'Fred', 'Smith', 'fred@gmail.com', '1234123412341234', '123', now(), 'user'),
 ('1351135153', 'Sara', 'Watson', 'sara@gmail.com', '3214321432143214', '321', now(), 'user'),
 ('546146', 'Will', 'Jackson', 'will@yahoo.com', '6541654165416541', '456', now(), 'admin'),
 ('4881655', 'Paula', 'Johnson', 'paula@yahoo.com', '9874789498747894', '452', now(), 'user'),
('54613', 'Tom', 'Spears', 'tom@yahoo.com', '9632963296329632', '789', now(), 'user');