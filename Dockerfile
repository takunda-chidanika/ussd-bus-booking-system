# Step 1: Use a Node.js base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy only the dependency files to install packages first (uses caching)
COPY package*.json tsconfig.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build the TypeScript code into JavaScript
RUN npm run build

# Step 7: Expose the port (change if your app uses a different one)
EXPOSE 3000

# Step 8: Run the compiled app (assumes it’s in `dist/index.js`)
CMD ["node", "dist/index.js"]
