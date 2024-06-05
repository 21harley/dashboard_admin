## Comandos para la migración y la creación de datos

Ejecutar los siguientes comandos desde la ruta `/src/scripts/prisma`:

```sh
# Migración de Prisma
npx prisma migrate dev --name init --schema ./src/scripts/prisma/schema.prisma

# Ejecución del script para crear datos
npx ts-node src/scripts/prisma/create_data.ts
```

| API            | Método | Ruta                                               | Descripción                                           | Campos Requeridos                                                              |
|----------------|--------|----------------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------------------------|
| **Usuarios**   | GET    | `/api/usuarios`                                    | Obtiene todos los usuarios del sistema.               | -                                                                              |
|                | GET    | `/api/usuarios/[role]`                             | Obtiene usuarios según su rol.                        | -                                                                              |
|                | POST   | `/api/usuarios`                                    | Crea un nuevo usuario en el sistema.                  | `cedula`, `firstName`, `lastName`, `telefono`, `correo`, `rolId`, `birthdate`, `gender`, `address`, `password` |
|                | PUT    | `/api/usuarios/:id`                                | Actualiza un usuario existente en el sistema.         | `cedula`, `firstName`, `lastName`, `telefono`, `correo`, `rolId`, `birthdate`, `gender`, `address`, `password` |
|                | DELETE | `/api/usuarios/:id`                                | Elimina un usuario existente del sistema.             | -                                                                              |
| **Roles**      | GET    | `/api/roles`                                       | Obtiene todos los roles del sistema.                  | -                                                                              |
|                | POST   | `/api/roles`                                       | Crea un nuevo rol en el sistema.                      | `nombre`, `descripcion`                                                        |
|                | PUT    | `/api/roles/:id`                                   | Actualiza un rol existente en el sistema.             | `nombre`, `descripcion`                                                        |
|                | DELETE | `/api/roles/:id`                                   | Elimina un rol existente del sistema.                 | -                                                                              |
| **Representantes** | GET    | `/api/representantes`                          | Obtiene todos los representantes del sistema.         | -                                                                              |
|                | GET    | `/api/representantes?id_representante=[id_representante]` | Obtiene todos los estudiantes en relación con el representante. | `id_representante`                                                             |
|                | GET    | `/api/representantes?id_representanteall=[id_representanteall]` | Obtiene información detallada de un representante incluyendo sus estudiantes. | `id_representanteall`                                                             |
|                | POST   | `/api/representantes`                              | Crea un nuevo representante en el sistema.            | `usuarioId`, `direccion`, `ocupacion`, `estadoCivil`, `edad`                   |
|                | PUT    | `/api/representantes/:id`                          | Actualiza un representante existente en el sistema.   | `usuarioId`, `direccion`, `ocupacion`, `estadoCivil`, `edad`                   |
|                | DELETE | `/api/representantes/:id`                          | Elimina un representante existente del sistema.       | -                                                                              |
| **Profesores** | GET    | `/api/profesores`                                  | Obtiene todos los profesores del sistema.             | -                                                                              |
|                | GET    | `/api/profesores?id_profesor=[id_usuario]`         | Obtiene todos los datos relacionados con el profesor del sistema. | `id_profesor`                                                                 |
|                | POST   | `/api/profesores`                                  | Crea un nuevo profesor en el sistema.                 | `usuarioId`, `codigo`, `grado`, `area`                                         |
|                | PUT    | `/api/profesores/:id`                              | Actualiza un profesor existente en el sistema.        | `usuarioId`, `codigo`, `grado`, `area`                                         |
|                | DELETE | `/api/profesores/:id`                              | Elimina un profesor existente del sistema.            | -                                                                              |
| **Estudiantes**| GET    | `/api/estudiantes`                                 | Obtiene todos los estudiantes del sistema.            | -                                                                              |
|                | POST   | `/api/estudiantes`                                 | Crea un nuevo estudiante en el sistema.               | `usuarioId`, `representanteId`                                                 |
|                | PUT    | `/api/estudiantes/:id`                             | Actualiza un estudiante existente en el sistema.      | `usuarioId`, `representanteId`                                                 |
|                | DELETE | `/api/estudiantes/:id`                             | Elimina un estudiante existente del sistema.          | -                                                                              |
| **Aulas**      | GET    | `/api/aulas`                                       | Obtiene todas las aulas del sistema.                  | -                                                                              |
|                | POST   | `/api/aulas`        