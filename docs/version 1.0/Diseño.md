# ESCUELA POLITÉCNICA NACIONAL

## TECHNOWL S.A

---
Integrantes:

- Chalacama Erick
- Román Paul
- Salazar Santiago
- Suntasig Ariel
- Yánez David

Versión: Primera
---
# Documentación del diseño del sistema de traducción YOGA YOGHISMO
El diagrama de casos de uso mostrado en la Figura 1 permite identificar a los actores que van a interactuar con el sistema y a su vez las funcionalidades con las que deberá contar el sistema. La traducción a español e inglés al ingresar una palabra en sanscrito y la posterior visualización de los morfemas son las funcionalidades con las que el sistema deberá contar. 
![Diagrama de casos de uso ](assets/UseCaseDiagram.png)
*Figura 1: Diagrama de casos de uso del sistema de traducción*

En la Figura 2 se puede apreciar el diagrama de clases del sistema de traducción. Se puede observar que se tendrán dos clases base llamadas morpheme y yogaPosture. Estas dos serán usadas por la clase YogaPostureService, que posteriormente se usará como el elemento "modelo" dentro de un modelo vista controlador. 

Considerando esto, se puede apreciar que la clase YogaPostureController es el nexo entre la vista(clase que se encarga de mostrar los elementos en pantalla) y el modelo(Clase encargada de gestionar los datos y la lógica del negocio.
![Diagrama de clase ](assets/ClassDiagram.png)
*Figura 2: Diagrama de clases del sistema de traducción*

