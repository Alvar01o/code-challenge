# code-challenge - https://acueducto.notion.site/Fullstack-Javascript-Developer-Senior-Reto-fc413d160eef4d618634dd8805d274fb

### Consideraciones

1. Se necesita una **API** que provea el servicio de búsqueda para listar los productos encontrados desde una base de datos.
2. En caso de que la búsqueda sea un **palíndromo** se deberá retornar los productos encontrados con el descuento (**50%**) ya aplicado en sus precios
3. Cuando se busque un título, se deberá retornar el resultado exacto, es decir, un producto
4. Cuando se busque una marca o la descripción de un producto, basta con que la búsqueda sea de más de 3 caracteres y que éstos estén incluidos en marca o descripción.
5. *Opcionalmente*, se necesita una micro **aplicación web** que consuma la API descrita y que contenga un buscador y una sección de resultados. Si se realiza, usar TailwindCSS.


### Criteria a evaluar

- Front en Nextjs, React, Typescript
- Backend desarrollado con Laravel
- Base de datos en MySQL
- Pruebas unitarias automáticas, se considerará un plus cualquier otro tipo de pruebas.
- Calidad de arquitectura y código (clean code / clean architecture).
- Unificar la solución propuesta en una imagen de Docker por repositorio para poder ser ejecutada en cualquier ambiente.
- Archivo README.md con los pasos detallados de cómo ejecutar la solución en local, cualquier  abstracción  de  la  instalación como despliegue por docker-compose o skaffold serán bienvenidas.

### Cosas para hacer
- Pruebas unitarias automáticas, se considerará un plus cualquier otro tipo de pruebas.


## api endpoints - 
http://127.0.0.1:8000/api/products/
http://127.0.0.1:8000/api/products/abba