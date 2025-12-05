[[Chapter 2]]

- Can be injected into constructors if decorated as an ==`@Injectable`==, via **dependency injection**.
- Can be a plain value, a class, sync/async factory etc.
- Providers must be provided to a module for them to be usable.
- Can be exported from a module - and the be available to other modules that import it.

# Providers in Modules

```ts
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { LoggerService } from '../shared/logger.service';

@Module({
	controllers: [
		TaskController
	],
	providers: [
		TasksService,
		LoggerService
	]
})

export class TasksModule {}
```

# What is a Service?

- Defined as providers. **Not all providers are services**.
- Common concept within software development and are not exclusive NestJS, JavaScript or backend development.
- Singletons when wrapped with ==`@Injectable()`== and provided to a module. Than means, the same instance will be shared across the application - acting as a single source of truth.
- The main source of business logic. For example, a service will be called from a controller to validate data, create an item in the database and return a response.

# Service Example

![[exampleOfServices.png]]

# Dependency Injection in NestJS

Any component within the NestJS ecosystem can inject a provider that is decorated with the ==`@Injectable`==.

We define the dependencies in the constructor of the class. NestJS will take care of the injection for us, and it will then be available as a class property.

```ts
import { TaskService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}
	
	@Get()
	async getAllTasks() {
		return await this.tasksService.getAllTasks();
	}
}
```