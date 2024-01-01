# Use an official Node.js runtime as a base image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3001

# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:3001/ || exit 1

# Start the application
CMD ["node", "server.mjs"]
