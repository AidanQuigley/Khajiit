-- CreateTable
CREATE TABLE "Apps" (
    "id" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Rating" DOUBLE PRECISION NOT NULL,
    "Type" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Platform" TEXT NOT NULL,
    "Download" DOUBLE PRECISION NOT NULL,
    "RequiredSystem" TEXT NOT NULL,

    CONSTRAINT "Apps_pkey" PRIMARY KEY ("id")
);
