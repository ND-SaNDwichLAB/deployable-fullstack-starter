# Build stage
FROM node:20 AS builder
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build Vite
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets to nginx's default html dir
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
