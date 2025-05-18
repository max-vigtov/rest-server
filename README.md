# REST Web API

A modern, type-safe REST API built with Node.js, Express, and TypeScript. This project implements a robust backend architecture following clean code principles and best practices.

## 🚀 Features

- **TypeScript Integration**: Full TypeScript support for enhanced type safety and better developer experience
- **Express.js Framework**: Fast and minimalist web framework for Node.js
- **Prisma ORM**: Type-safe database access with Prisma
- **Environment Configuration**: Secure environment variable management
- **Docker Support**: Containerized development and deployment with Docker
- **Clean Architecture**: Well-organized project structure following clean architecture principles
- **Development Tools**: Hot-reload development server with ts-node-dev

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker
- Environment Variables Management

## 🏗️ Project Structure

The project follows a clean architecture pattern with clear separation of concerns:
- `src/`: Source code
  - `config/`: Configuration files
  - `presentation/`: API routes and server setup
  - `domain/`: Business logic and entities
  - `data/`: Data access layer
- `prisma/`: Database schema and migrations
- `public/`: Static files
- `dist/`: Compiled JavaScript files

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run database migrations: `npm run prisma:migrate:prod`
5. Start development server: `npm run dev`

## 📝 License

ISC
