# Base Image
FROM node:latest

# Create working directory in docker where we can store our code
WORKDIR /usr/src/app

# Copy the packege.json file into our working directory
COPY package*.json ./

# Run command to install packages
RUN npm install

# Expose container on below port
EXPOSE 3000

# Run command to build node app
CMD [ "npm", "start"]