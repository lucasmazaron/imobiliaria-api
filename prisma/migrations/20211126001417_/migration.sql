-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "admin" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" TEXT NOT NULL,
    "fullName" VARCHAR(60) NOT NULL,
    "fantasyName" VARCHAR(60),
    "cpf_cnpj" VARCHAR(14) NOT NULL,
    "peopleType" VARCHAR(10),
    "general_records" VARCHAR(12),
    "estate_subscription" VARCHAR(14),
    "address" VARCHAR(60),
    "address_number" VARCHAR(8),
    "address_district" VARCHAR(60),
    "address_city" VARCHAR(60),
    "address_uf" VARCHAR(60),
    "zip_code" VARCHAR(9),
    "address_complement" VARCHAR(60),
    "contact_name" VARCHAR(60),
    "contact_fone" VARCHAR(12),
    "contact_cell" VARCHAR(12),
    "buyer" BOOLEAN NOT NULL DEFAULT false,
    "salesman" BOOLEAN NOT NULL DEFAULT false,
    "contact_email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "birth_date" DATE NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "type" VARCHAR NOT NULL,
    "selling_price" VARCHAR NOT NULL,
    "rent_price" VARCHAR NOT NULL,
    "land_size" VARCHAR(12) NOT NULL,
    "constructed_land_size" VARCHAR(14) NOT NULL,
    "room_units" INTEGER NOT NULL,
    "suite_units" INTEGER NOT NULL,
    "bathroom_units" INTEGER NOT NULL,
    "garage_units" INTEGER NOT NULL,
    "address" VARCHAR(60) NOT NULL,
    "address_number" VARCHAR(8) NOT NULL,
    "address_district" VARCHAR(60) NOT NULL,
    "address_city" VARCHAR(60) NOT NULL,
    "address_uf" VARCHAR(60) NOT NULL,
    "zip_code" VARCHAR(9) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sellable" BOOLEAN NOT NULL DEFAULT true,
    "rentable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "people_cpf_cnpj_key" ON "people"("cpf_cnpj");
