# Madaloc360 Backend

The backend service for Madaloc360 platform, handling reservations and messaging via WebSockets.

## Features

- Domain-Driven Design architecture
- TypeScript with strict type checking
- WebSocket messaging system
- Reservation management
- Docker containerization
- Jest testing
- ESLint + Prettier code formatting

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm run dev
```

This will:

- Start the server with hot reload
- Watch for file changes
- Run tests on changes

### Production

Build the production bundle:

```bash
pnpm run build
```

Start the production server:

```bash
pnpm start
```

### Testing

Run tests once:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:dev
```

## Docker

Build the Docker image:

```bash
docker-compose build
```

Start the services:

```bash
docker-compose up
```

## script bash avec docker-compose

```bash
chmod +x dev.sh

# Pour lancer en développement (par défaut)
./dev.sh

# Pour lancer en production
./dev.sh production
```

## Project Structure

```
src/
├── application/          # Application layer
│   └── use-cases/        # Business use cases
├── domain/               # Domain layer
│   ├── message/          # Message domain
│   └── reservation/      # Reservation domain
├── interfaces/           # Interface adapters
│   └── websockets/       # WebSocket gateway
└── index.ts              # Entry point
```

## Available Scripts

- `dev`: Start development server
- `build`: Build production bundle
- `start`: Start production server
- `test`: Run tests
- `test:dev`: Run tests in watch mode
- `lint`: Run linter
- `format`: Format code
