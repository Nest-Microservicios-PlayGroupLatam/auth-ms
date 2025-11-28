FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./



RUN npm install

# 2. Ahora sí copiamos TODO el proyecto (incluye prisma/)
COPY . .

# 3. Generar Prisma Client correctamente
RUN npx prisma generate

# 4. Compilar NestJS
RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "start:dev"]