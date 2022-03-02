
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"email_address" VARCHAR (255) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"transparency" NUMERIC (2,2) DEFAULT 0.5,
	"environmental" NUMERIC (2,2) DEFAULT 0.5,
	"human_rights" NUMERIC (2,2) DEFAULT 0.5
);