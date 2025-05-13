# 🎮 Gestor de Videojuegos con MongoDB y TypeScript

Este proyecto es una pequeña base de datos en Node.js, MongoDB y TypeScript que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre una colección de videojuegos.

## 🧱 Tecnologías utilizadas

- Node.js
- TypeScript
- MongoDB (Mongoose)
- Dotenv para variables de entorno

## 📂 Estructura del proyecto

- `videoJuegoSchema`: define la estructura de cada documento de videojuego.
- `modelo VideoJuego`: modelo de Mongoose para interactuar con la base de datos.
- Funciones:
  - `nuevoJuego()`: Crea y guarda un nuevo videojuego.
  - `obtenerJuego()`: Devuelve todos los juegos almacenados.
  - `obtenerJuegoId(id)`: Busca un juego por su ID.
  - `actualizarJuego(id, datos)`: Actualiza un juego existente con nuevos datos.
  - `borrarJuego(id)`: Elimina un juego por su ID.
- `main()`: función principal que conecta a la base de datos y permite probar las funciones anteriores.

## 📋 Campos del modelo de VideoJuego

```ts
{
  titulo: string;       // Título del juego (único y requerido)
  genero: string;       // Género del juego (requerido)
  consola: string;      // Consola donde se juega (requerido)
  lanzamiento: number;  // Año de lanzamiento (requerido)
  completado?: boolean;  // Si el juego fue completado (opcional, por defecto false)
}
