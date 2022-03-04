
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"email_address" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"auth_level" integer NOT NULL DEFAULT 0,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "value" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "value_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "preference" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"value_id" integer NOT NULL,
	"priority" integer NOT NULL DEFAULT 5,
	CONSTRAINT "preference_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "score_rule" (
	"id" serial NOT NULL,
	"metric" varchar(255) NOT NULL,
	"result" varchar(255) NOT NULL,
	"points" integer NOT NULL,
	"industry" varchar(255) NOT NULL,
	"value_id" integer NOT NULL,
	CONSTRAINT "score_rule_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "membership_rule" (
	"id" serial NOT NULL,
	"organization" varchar(255) NOT NULL,
	"points" integer NOT NULL,
	"industry" varchar(255) NOT NULL,
	"value_id" integer NOT NULL,
	CONSTRAINT "membership_rule_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"comment" varchar(1000) NOT NULL,
	"name" varchar(255) NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "preference" ADD CONSTRAINT "preference_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "preference" ADD CONSTRAINT "preference_fk1" FOREIGN KEY ("value_id") REFERENCES "value"("id");

ALTER TABLE "score_rule" ADD CONSTRAINT "score_rule_fk0" FOREIGN KEY ("value_id") REFERENCES "value"("id");

ALTER TABLE "membership_rule" ADD CONSTRAINT "membership_rule_fk0" FOREIGN KEY ("value_id") REFERENCES "value"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

INSERT INTO "value" ("name")
	VALUES	('Transparency'),
			('Environmental'),
			('Human Rights');