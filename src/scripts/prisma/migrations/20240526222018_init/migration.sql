-- CreateTable
CREATE TABLE "Rol" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cedula" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "rolId" INTEGER NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "gender" TEXT,
    "address" TEXT NOT NULL,
    CONSTRAINT "Usuario_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profesor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,
    "grado" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    CONSTRAINT "Profesor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Representante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "direccion" TEXT NOT NULL,
    "ocupacion" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    CONSTRAINT "Representante_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "representanteId" INTEGER NOT NULL,
    CONSTRAINT "Estudiante_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estudiante_representanteId_fkey" FOREIGN KEY ("representanteId") REFERENCES "Representante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Aula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_user" INTEGER NOT NULL,
    "id_represent" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    CONSTRAINT "Aula_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Profesor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Aula_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Actividad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaInicio" DATETIME NOT NULL,
    "fechaFinal" DATETIME NOT NULL,
    "nota" REAL NOT NULL,
    "comentario" TEXT,
    "entregado" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "_ActividadToAula" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ActividadToAula_A_fkey" FOREIGN KEY ("A") REFERENCES "Actividad" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ActividadToAula_B_fkey" FOREIGN KEY ("B") REFERENCES "Aula" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Rol_nombre_key" ON "Rol"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cedula_key" ON "Usuario"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Profesor_usuarioId_key" ON "Profesor"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Profesor_codigo_key" ON "Profesor"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Representante_usuarioId_key" ON "Representante"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_usuarioId_key" ON "Estudiante"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "_ActividadToAula_AB_unique" ON "_ActividadToAula"("A", "B");

-- CreateIndex
CREATE INDEX "_ActividadToAula_B_index" ON "_ActividadToAula"("B");
