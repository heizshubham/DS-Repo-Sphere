# Use Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose React app port
EXPOSE 3000

# Run the React development server
CMD ["npm", "start"]
