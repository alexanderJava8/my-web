# Usa una imagen base de Nginx para servir archivos estáticos
FROM nginx:alpine

# Copia los archivos de tu proyecto al contenedor
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
