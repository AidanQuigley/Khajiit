-- AlterTable
CREATE SEQUENCE apps_id_seq;
ALTER TABLE "Apps" ALTER COLUMN "id" SET DEFAULT nextval('apps_id_seq');
ALTER SEQUENCE apps_id_seq OWNED BY "Apps"."id";
