
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (20) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"first_name" VARCHAR (255) NOT NULL,
	"last_name" VARCHAR (255) NOT NULL,
	"transparency" NUMERIC (2,2),
	"environmental" NUMERIC (2,2),
	"human_rights" NUMERIC (2,2)
);