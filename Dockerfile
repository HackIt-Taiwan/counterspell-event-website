FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 使用 serve 來提供靜態文件
RUN npm install -g serve

EXPOSE 3000

# 使用 serve 來提供構建後的文件
CMD ["serve", "-s", "dist", "-l", "3000"]
