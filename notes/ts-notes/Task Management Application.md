#typescript #nestjs #postgres #mongo #graphql #typeorm 

# Application Structure 

**AppModule (root)**
	**TasksModule**
		**TasksController**
		**TaskEntity**
		**TaskService**
		**TaskRepository**
		**Status ValidationPipe**
	**AuthModule
		AuthController
		UserRepository
		AuthService
		JwtStrategy
		UserEntity
		ETC...**

# API Endpoints - Tasks

| Endpoint            | Method     | Description                       |
| ------------------- | ---------- | --------------------------------- |
| *tasks/*            | **GET**    | **Get tasks (including filters)** |
| *tasks/:id/*        | **GET**    | **Get a task**                    |
| *tasks/*            | **POST**   | **Create a task**                 |
| *tasks/:id*         | **DELETE** | **Delete a task**                 |
| *tasks/:id/status/* | **PATCH**  | **Update a task**                 |

# API Endpoints - Auth

| Endpoint       | Method   | Description |
| -------------- | -------- | ----------- |
| *auth/signup/* | **POST** | **Sign up** |
| *auth/signin/* | **POST** | **Sign in** |

# Objectives: NestJS

- NestJS Modules
- NestJS Controllers
- NestJS Services and Providers
- Controller-to-Service Communication
- Validation using NestJS Pipes

# Objectives: Backend and Architecture

- Develop production-ready REST APIs
- CRUD ops
- Error handling
- Data Transfer Objects (DTO)
- System modularity
- Backend development best practices
- Configuration management
- Logging
- Security best practices

# Objectives: Persistence

- Connecting the application to a database
- Working with relation databases
- Using TypeORM
- Writing simple and complex queries using QueryBuilder
- Performance when working with a database

# Objectives: Authorization/Authentication

- Signing up, signing in
- Authentication and Authorization
- Protected resources
- Ownership of tasks by users
- Using JWT tokens
- Password hashing, salts and properly storing passwords

# Objectives: Development

- Polishing the application for Production use
- Deploying NestJS app to AWS
- Deploying frontend applications to Amazon S3
- Writing up the frontend and backend

#### Bonus: Frontend Application

Fully featured frontend application that consumes the API we're developing.