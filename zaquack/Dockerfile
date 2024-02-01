# Usa la imagen de Node como base
FROM node:20

# Establece el directorio de trabajo en la carpeta de la aplicación
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json a la carpeta de trabajo
COPY ./package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY ./ ./

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD [ "npm", "start" ]