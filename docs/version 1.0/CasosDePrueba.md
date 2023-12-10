# ESCUELA POLITÉCNICA NACIONAL
## TECHNOWL S.A.

---
Integrantes: 
- Chalacama Erick
- Román Paul
- Salazar Santiago
- Suntasig Ariel
- Yánez David

Versión: Primera
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
|Deberían mostrarse los resultados de la búsqueda de manera correcta, con la traducción o la información solicitada visible para el usuario.|

|***Prueba 3***||
|-|-|	
|**Identificador**|CP03|
|**Fecha**|6 de Diciembre del 2023|
|**Nombre del caso**|Prueba de compatibilidad de navegadores|
|**Objetivo**|Verificar si el software funciona correctamente en diferentes navegadores|
|**Contexto**|El usuario tiene acceso al traductor Yoghismo en diferentes navegadores web como Google Chrome, Mozilla Firefox, y Microsoft Edge.|
|**Proceso**|1. Acceder al traductor Yoghismo en cada uno de los navegadores mencionados. <br/> 2. Realizar una búsqueda con una entrada válida en cada navegador.|
|**Resultado esperado**|**Resultado Obtenido**|
|El software debe funcionar sin errores significativos en todos los navegadores probados, mostrando resultados precisos independientemente del navegador utilizado.|


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

# Lista de defectos de calidad

|**Nro**|**Tipo**|**Descripción**|**Corregido**|
|-|-|-|-|
|**1**|Funcional - Chequeo|Al querer traducir el morfema "*Adho*" en el resultado en inglés se presenta "*Downward Facing Dog*", siendo que debería presentarse únicamente "*Down*".|**Sí**|