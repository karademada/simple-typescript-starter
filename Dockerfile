ARG NODE_ENV=production

# Dockerfile - Development stage
FROM node:18 AS development

# Install pnpm and enable Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create app directory
WORKDIR /app

# Install app dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm install

# Install development dependencies
RUN pnpm add -D nodemon ts-node typescript

# Copy source code
COPY . .

# Development mode with hot reload
CMD ["npx", "nodemon", "--watch", "src", "--ext", "ts,json", "--exec", "ts-node", "src/index.ts"]

# Production stage
FROM node:18 AS production

# Install pnpm and enable Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install production dependencies only
RUN pnpm install --prod


# Expose port
EXPOSE 3000

# Run the application
CMD ["node", "build/index.js"]
