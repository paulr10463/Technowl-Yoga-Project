# ESCUELA POLITÉCNICA NACIONAL
## TECHNOWL S.A.

---
Integrantes: 
- Chalacama Erick
- Román Paul
- Salazar Santiago
- Suntasig Ariel
- Yánez David

Versión: 2.0
---
# Testing del sistema de traducción YOGHISMO

### Pruebas de comportamiento

|***Prueba 1***||
|-|-|
|**Identificador**|CP01|
|**Fecha**|6 de Diciembre del 2023|
|**Nombre del caso**|Prueba sin entrada|
|**Objetivo**|Identificar el comportamiento del software cuando el campo de búsqueda es una cadena vacía|
|**Contexto**|El usuario debe mantener activa la página correspondiente al traductor ***Yoghismo***|
|**Proceso**|1. El usuario no ingresa una cadena en el campo de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Muestre un mensaje de error y no se realice ninguna búsqueda|Se presenta una ventana flotante que indica "*No se encontró la postura buscada. Revisa el nombre.*"|


|***Prueba 2***||
|-|-|
|**Identificador**|CP02|
|**Fecha**|6 de Diciembre del 2023|
|**Nombre del caso**|Prueba de búsqueda exitosa|
|**Objetivo**|Verificar si el software muestra resultados válidos para una entrada de búsqueda válida|
|**Contexto**|El usuario está en la página de inicio del traductor Yoghismo|
|**Proceso**|1. El usuario ingresa una cadena de texto válida en el campo de búsqueda. <br/> 2. El usuario presiona el botón de búsqueda o la tecla enter.|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberían mostrarse los resultados de la búsqueda de manera correcta, con la traducción o la información solicitada visible para el usuario.|Se evidencian las traducciones y las palabras clave o morfemas de forma clara y ordenada.|

|***Prueba 3***||
|-|-|	
|**Identificador**|CP03|
|**Fecha**|6 de Diciembre del 2023|
|**Nombre del caso**|Prueba de compatibilidad de navegadores|
|**Objetivo**|Verificar si el software funciona correctamente en diferentes navegadores|
|**Contexto**|El usuario tiene acceso al traductor Yoghismo en diferentes navegadores web como Google Chrome, Mozilla Firefox, y Microsoft Edge.|
|**Proceso**|1. Acceder al traductor Yoghismo en cada uno de los navegadores mencionados. <br/> 2. Realizar una búsqueda con una entrada válida en cada navegador.|
|**Resultado esperado**|**Resultado Obtenido**|
|El software debe funcionar sin errores significativos en todos los navegadores probados, mostrando resultados precisos independientemente del navegador utilizado.|Los resultados son independientes del navegado, se conserva la apariencia y la funcionalidad pero si existe variación en los tiempos de carga.|


|***Prueba 4***||
|-|-|
|**Identificador**|CP04|
|**Fecha**|9 de Diciembre del 2023|
|**Nombre del caso**|Prueba de búsqueda con caracteres especiales|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente términos en sánscrito que contienen caracteres especiales o acentuados.|
|**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Urdhva Mukhá Svanasana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|La página muestra mensaje de error que especifique que no se encontró la asana.|Se presenta una ventana flotante que indica "*No se encontró la postura buscada. Revisa el nombre.*"|

|***Prueba 5***||
|-|-|
|**Identificador**|CP05|
|**Fecha**|9 de Diciembre del 2023|
|**Nombre del caso**|Prueba búsqueda por morfemas|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente la búsqueda por morfemas.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Adho*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|La página muestra la traducción únicamente de la asana en español y en inglés|La página muestra bien la traducción en español ("*abajo*"), pero en inglés muestra "*Downward Facing Dog*".|

|***Prueba 6***||
|-|-|
|**Identificador**|CP06|
|**Fecha**|9 de Diciembre del 2023|
|**Nombre del caso**|Prueba búsqueda con varios espacios|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente la búsqueda cuando existen varios espacios en blanco.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*&emsp;&emsp; vrikshasana &emsp;&emsp;*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberían mostrarse los resultados de la búsqueda de manera correcta, con la traducción o la información solicitada visible para el usuario.|La página muestra bien la traducción en español ("*Postura del árbol*"), y en inglés muestra "*Tree Pose*" .|

|***Prueba 7***||
|-|-|
|**Identificador**|CP07|
|**Fecha**|9 de Diciembre del 2023|
|**Nombre del caso**|Prueba búsqueda con espacios en medio de los morfemas|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente la búsqueda cuando existen varios espacios en medio de los morfemas.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Ardha &emsp;&emsp; Bhujangasana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberían mostrarse los resultados de la búsqueda de manera correcta, con la traducción o la información solicitada visible para el usuario.|La página muestra bien la traducción en español ("*Postura de la cobra a la mitad*"), y en inglés muestra "*Half Cobra Pose*" .|

|***Prueba 8***||
|-|-|
|**Identificador**|CP08|
|**Fecha**|9 de Diciembre del 2023|
|**Nombre del caso**|Prueba búsqueda por morfemas escritos en mayúsculas|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente la búsqueda por morfemas cuando están escritos en mayúsculas.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*ARDHA BHUJANGASANA*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberían mostrarse los resultados de la búsqueda de manera correcta, con la traducción o la información solicitada visible para el usuario.|La página muestra bien la traducción en español ("*Postura de la cobra a la mitad*"), y en inglés muestra "*Half Cobra Pose*" .|

|***Prueba 9***||
|-|-|
|**Identificador**|CP09|
|**Fecha**|9 de Diciembre del 2023|
|**Nombre del caso**|Prueba búsqueda por morfemas escritos en mayúsculas y minúsculas|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente la búsqueda por morfemas cuando están escritos en mayúsculas y minúsculas.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*ARdHa BhUJAngAsaNA*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberían mostrarse los resultados de la búsqueda de manera correcta, con la traducción o la información solicitada visible para el usuario.|La página muestra bien la traducción en español ("*Postura de la cobra a la mitad*"), y en inglés muestra "*Half Cobra Pose*" .|

|***Prueba 10***||
|-|-|
|**Identificador**|CP10|
|**Fecha**|1 de Enero del 2024|
|**Nombre del caso**|Prueba búsqueda de postura exitosa con carga de imagen y video|
|**Objetivo**|Verificar si el software muestra en conjunto con los resultados la imagen y video correspondiente a la postura.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Urdhva Mukha Svanasana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberían mostrarse los resultados de la búsqueda con la traducción o la información solicitada visible para el usuario, donde además se debe mostrar la imagen de la postura y un video explicativo.|La página muestra bien la traducción en español y en inglés,  se observa la imagen y el video explicativo correspondiente de la postura buscada.|

|***Prueba 11***||
|-|-|
|**Identificador**|CP11'|
|**Fecha**|1 de Enero del 2024|
|**Nombre del caso**|Prueba de recomendación por búsqueda con caracteres faltantes en los morfemas.|
|**Objetivo**|Verificar que, dado el caso de que una búsqueda no ser encuentre por error de escritura, en este caso caracteres faltantes, se recomiende una posible búsqueda.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Adho Mukha Svanaana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter.|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberá mostrarse una notificación tipo Popup el cual indique que no se encuentra la postura; sin embargo, se muestran recomendaciones basadas en el input del usuario.|La página muestra un mensaje Popup de error el cual dice "Tal vez quisiste escribir: Urdhva Mukha Svanasana".|

|***Prueba 12***||
|-|-|
|**Identificador**|CP12'|
|**Fecha**|1 de Enero del 2024|
|**Nombre del caso**|Prueba de recomendación por búsqueda con espacios en blanco entre los morfemas.|
|**Objetivo**|Verificar que, dado el caso de que una búsqueda no ser encuentre por error de escritura, en este caso espacios en blanco, se recomiende una posible búsqueda.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Adho Muk ha Svanasana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter.|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberá mostrarse una notificación tipo Popup el cual indique que no se encuentra la postura; sin embargo, se muestran recomendaciones basadas en el input del usuario.|La página muestra un mensaje Popup de error el cual dice "Tal vez quisiste escribir: Adho Mukha Svanasana".|

|***Prueba 13***||
|-|-|
|**Identificador**|CP13'|
|**Fecha**|1 de Enero del 2024|
|**Nombre del caso**|Prueba de recomendación por búsqueda con caracteres especiales en los morfemas.|
|**Objetivo**|Verificar que, dado el caso de que una búsqueda no ser encuentre por error de escritura, en este caso caracteres especiales, se recomiende una posible búsqueda.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Adho Mukh@ Svanasana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter.|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberá mostrarse una notificación tipo Popup el cual indique que no se encuentra la postura; sin embargo, se muestran recomendaciones basadas en el input del usuario.|La página muestra un mensaje Popup de error el cual dice "Tal vez quisiste escribir: Adho Mukha Svanasana".|

|***Prueba 14***||
|-|-|
|**Identificador**|CP14'|
|**Fecha**|01 de Enero del 2024|
|**Nombre del caso**|Prueba de recomendación por búsqueda de con caracteres en desorden en los morfemas.|
|**Objetivo**|Verificar que, dado el caso de que una búsqueda no ser encuentre por error de escritura, en este caso un desorden en los caracteres, se recomiende una posible búsqueda.|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Urdhva Mukha aSvanasan*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|Deberá mostrarse una notificación tipo Popup el cual indique que no se encuentra la búsqueda pero recomiende un posible morfema basado en el input del usuario|La página muestra un mensaje Popup de error el cual dice "Tal vez quisiste escribir: Urdhva Mukha Svanasana".|

|***Prueba 15***||
|-|-|
|**Identificador**|CP15'|
|**Fecha**|01 de Enero del 2024|
|**Nombre del caso**|Prueba de rendimiento de la recomendación en caso de búsqueda incorrecta|
|**Objetivo**|Identificar el tiempo que tarda en realizarse una recomendación en casod e búsqueda incorrecta|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Urdhva Mukha aSvanasan*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|El tiempo estándar para una función no debe superar los 100ms|La función tiene un tiempo de respuesta de 14ms.|

|***Prueba 16***||
|-|-|
|**Identificador**|CP16'|
|**Fecha**|01 de Enero del 2024|
|**Nombre del caso**|Prueba de rendimiento de la recomendación en caso de búsqueda correcta|
|**Objetivo**|Verificar que la función de búsqueda maneje correctamente la búsqueda por morfemas|
**Contexto**|El usuario debe encontrarse en la página principal del traductor ***Yoghismo*** y colocar el cursor en el campo de búsqueda|
|**Proceso**|1. El usuario ingresa el término "*Ardha Bhujangasana*" en la barra de búsqueda. <br/> 2. El usuario presiona el botón buscar o la tecla enter|
|**Resultado esperado**|**Resultado Obtenido**|
|El tiempo estándar para una función no debe superar los 100ms|La función tiene un tiempo de respuesta de 14ms.|

# Resultados de las pruebas unitarias
![Alt text](assets/TestsPassed.png)

# Lista de defectos de calidad

|**Nro**|**Tipo**|**Descripción**|**Corregido**|
|-|-|-|-|
|**1**|Funcional - Chequeo|Al querer traducir el morfema "*Adho*" en el resultado en inglés se presenta "*Downward Facing Dog*", siendo que debería presentarse únicamente "*Down*".|**Sí**|
|**2**|No Funcional - Mantenibilidad|Se tiene una mala convención respecto al nombre de "*yogaPosturesView.js*", ya que se manejan nombres en singular por lo que debería ser solo "*yogaPostureView.js*" .|**Sí**|
|**3**|Funcional - Mantenibilidad|Se tiene un mal encapsulamiento dentro de "*yogaPostureService.js*" respecto a "yogaPostures" y "yogaMorphemes" que deberían ser privadas.|**Sí**|
|**4**|Funcional - Chequeo|Al buscar "*Urdhva Mukha Svanasana*" hace falta la imagen de la postura en el despliegue.|**Sí**|