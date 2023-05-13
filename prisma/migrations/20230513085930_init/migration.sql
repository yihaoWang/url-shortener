-- CreateTable
CREATE TABLE "urlshortener" (
    "id" SERIAL NOT NULL,
    "original_url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(6),

    CONSTRAINT "urlshortener_pkey" PRIMARY KEY ("id")
);
