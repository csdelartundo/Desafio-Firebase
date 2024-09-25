# CRUD de Usuarios con Vue.js, Vuex y Firestore

Este proyecto es una aplicación CRUD (Create, Read, Update, Delete) desarrollada en Vue.js, donde para en este proyecto permite crear, eliminar y listar usuarios. Se utilizan dos componentes: uno para el formulario de envío de datos y otro para listar los usuarios y proporcionar la opción de eliminar cada usuario. La persistencia de datos se maneja utilizando Firestore y el estado de la aplicación se gestiona con Vuex.

## Características

- Crear Usuarios: A través de un formulario, los usuarios pueden enviar su nombre, correo electrónico y número de teléfono.
- Listar Usuarios: Los usuarios registrados se muestran en una lista.
- Eliminar Usuarios: Cada usuario listado tiene un botón para eliminarlo de la base de datos.
- Firestore: Los datos se guardan de forma remota en Firestore, lo que garantiza persistencia.
- Vuex: Se utiliza para gestionar el estado global de los usuarios en la aplicación.
## Dependencias del Proyecto
- Vue.js: Framework de JavaScript utilizado para construir la interfaz de usuario.
- Vuex: Biblioteca de gestión de estado utilizada para centralizar la información de los usuarios.
- Firebase (Firestore): Base de datos NoSQL que proporciona persistencia remota para los usuarios.

## Estructura del Proyecto

El proyecto está dividido en los siguientes componentes principales:

1. BaseDatos.vue
Este componente contiene un formulario para ingresar los datos del usuario (nombre, email, teléfono) y enviarlos para ser almacenados en Firestore.

2. UsuariosRegistrados.vue
Este componente lista los usuarios registrados y permite eliminarlos de la base de datos. La lista se obtiene del estado global gestionado por Vuex.

3. store.js (Vuex)
Vuex se encarga de la gestión del estado global de la aplicación, almacenando los usuarios y realizando acciones como crear o eliminar usuarios, y actualizar el estado cuando se reciben datos de Firestore.

## Project Setup

```sh
npm install
```

### Inicia un servidor de desarrollo para la aplicación

```sh
npm run dev
```

### Compila la aplicación para producción

```sh
npm run build
```
