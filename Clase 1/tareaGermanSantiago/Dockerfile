FROM node:18

#creamos un directorio para codigo js
RUN mkdir -p /home/app

#copiamos codigo a directorio
COPY . /home/app

#exponemos puesto
EXPOSE 3000

# ejecutamos comando para levantar servicio node
CMD ["node", "/home/app/index.js"]
