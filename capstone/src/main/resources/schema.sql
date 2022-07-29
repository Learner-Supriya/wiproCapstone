CREATE DATABASE IF NOT EXISTS shopforhomedb;
USE shopforhomedb;

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `admin`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `discount`;
DROP TABLE IF EXISTS `cart`;
DROP TABLE IF EXISTS `wishlist`;
DROP TABLE IF EXISTS `orders`;


create table admin (
       email varchar(255) not null,
        address varchar(255),
        password varchar(255),
        phone varchar(255),
        username varchar(255),
        primary key (email)
    );
 create table cart (
       pid integer not null,
        category varchar(255),
        email varchar(255),
        password varchar(255),
        pname varchar(255),
        price float not null,
        url varchar(255),
        primary key (pid)
    );
create table discount (
       discount_code varchar(255) not null,
        discount_amount float not null,
        discount_name varchar(255),
        email varchar(255),
        primary key (discount_code)
    );
 create table products (
       product_id varchar(255) not null,
        product_category varchar(255),
        product_name varchar(255),
        product_price float not null,
        stocks integer not null,
        url varchar(255),
        primary key (product_id)
    );
create table orders (
       order_id integer not null auto_increment,
        created_date datetime(6),
        item varchar(255),
        price float not null,
        user_mail varchar(255),
        primary key (order_id)
    );
 create table user (
       email varchar(255) not null,
        address varchar(255),
        password varchar(255),
        phone varchar(255),
        username varchar(255),
        primary key (email)
    );
create table wishlist (
       product_id varchar(255) not null,
        email varchar(255),
        product_category varchar(255),
        product_name varchar(255),
        product_price float not null,
        url varchar(255),
        primary key (product_id)
    );

