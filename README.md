# LinkMeQR (Kotlin Version)

LinkMeQR es una aplicación móvil que permite a los estudiantes registrarse, proporcionando su nombre, ID y ciudad. Los datos se procesan y se visualizan en tiempo real mediante gráficos dinámicos que muestran las estadísticas de las ciudades con la cantidad de estudiantes registrados. La aplicación utiliza **WebSockets** para actualizaciones en tiempo real.

## Características

- **Estadísticas de Ciudades:**
  - Se registran las ciudades en las que los estudiantes están ubicados.
  - Las estadísticas se muestran en un gráfico de barras, donde cada barra representa una ciudad y su respectiva cantidad de estudiantes.

- **Conexión en Tiempo Real:**
  - La aplicación usa **WebSockets** para mantener una conexión constante con el servidor.
  - Los datos de las ciudades se actualizan en tiempo real a medida que los estudiantes se registran.

- **Visualización Interactiva:**
  - Los datos se representan mediante un gráfico de barras donde las ciudades son las categorías y el número de estudiantes es el valor representado en cada barra.

- **Interfaz Moderna:**
  - La aplicación utiliza **Jetpack Compose** para crear interfaces modernas y fluidas.
  - El diseño es intuitivo y fácil de usar, permitiendo a los usuarios registrarse y visualizar estadísticas de manera rápida.

## Navegación Segura

La aplicación **LinkMeQR** implementa prácticas de navegación segura en Android utilizando las bibliotecas **Jetpack Navigation** y **Safe Args**. Estas herramientas proporcionan una forma eficiente y segura de manejar la navegación entre pantallas, asegurando que los datos importantes, como los parámetros de usuario, no se expongan a través de la URL y estén correctamente tipados.

## Requisitos

- **Android Studio** para la compilación y desarrollo de la aplicación.
- **Kotlin** como lenguaje principal de desarrollo.
- **Librerías** utilizadas:
  - `io.socket:socket.io-client` para gestionar la conexión WebSocket.
  - `com.patrykandpatrick.vico.compose` para crear gráficos interactivos en la interfaz.
  - `androidx.compose` para crear interfaces de usuario modernas y reactivas.
