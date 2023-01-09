CREATE DATABASE users_atm;

USE users_atm;

CREATE TABLE users_list(
  id VARCHAR(60),
  firstname VARCHAR(60),
  lastname VARCHAR(60),
  email VARCHAR(60),
  password VARCHAR(60),
  refresh_token VARCHAR(255),
  birthday datetime,
  PRIMARY KEY(id)
);