# Usa uma imagem base do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta que o app irá escutar
EXPOSE 3005

# Comando para rodar o app
CMD ["node", "src/server.js"]
