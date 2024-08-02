# Use latest Node runtime
FROM node:latest AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY todo-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY todo-app/ .

# Build for production
RUN npm run build

# use an official nginx image as the base
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]