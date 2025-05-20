# Parcial_DistribuidosDocker

Integrantes:
-Andres Felipe Puentes Montaña
-Juan Sebastian Beltran 

Este proyecto es una aplicación web Node.js que permite consultar datos de la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/), utilizando Docker para el despliegue.

Tutorial de descarga de imagen en DockerHub

IMPORTANTE :se debe tener ya instalado docker desktop para poder realizar los siguientes pasos:


1.Para descargar la imagen abre una terminal (CMD, PowerShell o terminal de Linux/macOS) y ejecuta(esto puede demorar ,dependiendo diversos factores como el internet) :

 docker pull juan9beltran/parcial-distribuidos

2.Para ejecutar la imagen se utiliza el siguiente comando ,donde se especifica el puerto local y el puerto de docker:

 docker run -p 3000:3000  juan9beltran/parcial-distribuidos

3.Si se ejecuta correctamente mostrara un mensaje de :

Servidor escuchando en http://localhost:3000

4.Si muestra este mensaje corractamente solo queda abrir el link en el navegador y probar la funcionalidad al filtrar por id 
