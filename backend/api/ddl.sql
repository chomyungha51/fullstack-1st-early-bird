DROP TABLE IF EXISTS ticket;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS account;

CREATE TABLE `users` (
	`id`	BIGINT AUTO_INCREMENT PRIMARY KEY,
	`name`	VARCHAR(10)	NULL,
	`created_at`	DATETIME(6)	NULL
);

CREATE TABLE `account` (
	`username`	VARCHAR(20) PRIMARY KEY,
	`password`	VARCHAR(100) NOT NULL,
	`role`	VARCHAR(15)	NOT NULL,
  constraint UC_account_username unique (`username`)
);

CREATE TABLE `ticket` (
	`id`	BIGINT AUTO_INCREMENT PRIMARY KEY,
	`user_id`	BIGINT NULL,
	`description`	VARCHAR(255) NULL,
	`created_at`	DATETIME(6) NULL,
	`expired_at`	DATETIME(6) NULL,
	`used_at`	DATETIME(6) NULL,
  constraint FK_user_to_ticket foreign key (`user_id`) references users (`id`)
);