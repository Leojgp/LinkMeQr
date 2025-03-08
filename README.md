# LinqMeQr 

**LinqMeQr** es una aplicación móvil moderna desarrollada con **React Native** que permite a los estudiantes registrarse, generar códigos QR con su información, y permitir que otros usuarios los escaneen para ver sus datos. La aplicación está conectada a un servidor **Express** y utiliza **MongoDB** para almacenar la información de los usuarios.

Esta herramienta no solo facilita el registro y la consulta de información, sino que también permite que los estudiantes compartan su perfil de manera sencilla mediante la generación y escaneo de códigos QR. Con la funcionalidad de **deep linking**, los usuarios pueden acceder directamente a los detalles de un estudiante escaneando su código QR.

## 🛠️ Características Principales

- **Registro de Usuarios**: Los estudiantes pueden registrarse proporcionando su nombre, curso, ciudad, número de ordenador asignado y si utilizan el transporte público (bus).
- **Generación de QR**: Los estudiantes pueden generar un código QR único que contiene su información personal para facilitar la consulta por otros usuarios.
- **Escaneo de QR**: Los usuarios pueden escanear códigos QR y acceder directamente al perfil de un estudiante.
- **Deep Linking**: Los códigos QR están configurados para ser accesibles a través de **deep linking**, lo que permite a los usuarios ver directamente los detalles del estudiante.
- **Gestión de Estado con Redux Toolkit**: La aplicación utiliza **Redux Toolkit** para la gestión del estado global y manejar la información de los usuarios y los códigos QR escaneados.
- **Hooks de React**: Aprovechamos los hooks de React, como `useState`, `useEffect` y `useDispatch`, para gestionar los estados y efectos de manera eficiente.

## 🖥️ Tecnologías Usadas

- **Frontend**: React Native, Redux Toolkit, React Navigation, React Native QR Scanner, React Native Deep Linking, Hooks de React.
- **Backend**: Express.js
- **Base de datos**: MongoDB
- **Generación de QR**: `react-native-qrcode-svg`
- **Autenticación**: (Aún no implementado) Se recomienda utilizar **sesiones** o **cookies** para una mayor seguridad.

## ⚙️ Requisitos

Asegúrate de tener instalados los siguientes programas antes de ejecutar el proyecto:

- Node.js (v14 o superior)
- MongoDB en tu máquina local o usa un servicio como **MongoDB Atlas** en la nube.
- React Native CLI o Expo CLI (dependiendo de la configuración del proyecto).
