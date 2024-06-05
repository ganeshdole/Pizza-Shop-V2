CREATE DATABASE pizzashop;

USE pizzashop;

-- Role table
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    roleName VARCHAR(30)
);

INSERT INTO role (roleName) VALUES ('Admin');
INSERT INTO role (roleName) VALUES ('User');

-- User table
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    firstName VARCHAR(50) NOT NULL, 
    lastName VARCHAR(50), 
    email VARCHAR(50) NOT NULL UNIQUE, 
    password VARCHAR(100) NOT NULL,
    roleId INT DEFAULT 2,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roleId) REFERENCES role(id)
);

-- Address table
CREATE TABLE address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zipCode VARCHAR(10) NOT NULL,
    country VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES user(id)
);

-- Pizza table
CREATE TABLE pizza (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    price DECIMAL(10, 2) NOT NULL, 
    details VARCHAR(200) NOT NULL,
    image VARCHAR(100) DEFAULT 'default_image.jpg',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Master table
CREATE TABLE orderMaster (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    addressId INT,
    totalAmount DECIMAL(10, 2) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES user(id),
    FOREIGN KEY (addressId) REFERENCES address(id)
);

-- Order Detail table
CREATE TABLE orderDetail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    pizzaId INT,
    quantity INT,
    totalAmount DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES orderMaster(id),
    FOREIGN KEY (pizzaId) REFERENCES pizza(id)
);

-- We are going with role, user, address, pizza, orderMaster, orderDetail, payment 