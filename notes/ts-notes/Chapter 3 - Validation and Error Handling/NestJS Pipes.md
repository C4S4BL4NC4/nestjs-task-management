[[Chapter 3]]

- Pipes operate on the **arguments** to be processed by the route handler, just before the handler is called.
- Pipes can perform **data transformation** or **data validation**.
- Pipes can return data - either original or modified - which will be passed on to the route handler.
- Pipes can throw exceptions. Exception thrown will be handled by NestJS and parsed into an error response.


# Default Pipes in NestJS

NestJS ships with useful pipes within the *@nestjs/common* module.

### ValidationPipe:
Validates the compatibility of an entire object against a class (goes well with DTOs). If any property cannot be mapped properly (ex. mismatching type) validation will fail.

A very common use case, therefore having a built-in validation pipe is extremely useful.

### ParseIntPipe:
By default, arguments are type **String**. This pipe validates that an argument is a number. If successful, the argument is transformed into a **Number** and passed to the handler.


# Custom Pipe Implementation

- Pipes are classes annotated with the `@Injectable()` decorator.
- Pipes must implement the `PipeTransform` generic interface. Therefore, every pipe must have a `transform()` method. This method will be called by NestJS to process the arguments.
- The `transform()` method accepts two parameters:
	`value`:  The value of the processed argument.
	`metadata` (optional): an object containing metadata about the argument.
- Whatever is returned from the `transform()` method will be passed on to the route handler. Exceptions will be sent back to the client.
- Pipes can be consumed in different ways.


# Types of Pipes

- **Handler-level pipes** are defined at the handler level, via the `@UsePipes()` decorator. Such pipe will process all parameters for the incoming requests.

```ts
@Post()
@UsePipes(SomePipe)
createTask(
	@Body('description') description
) {
	//...
}
```


- **Global pipes** are defined at the application level and will be applied to any incoming request.

```ts
async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.useGlobalPipes(SomePipe);
	await app.listen(3000);
}
bootstrap();
```

# Parameter-level VS Handler-level pipes. Which one?

It depends.

==**Parameter-level pipes**== tend to be slimmer and cleaner. However, they often result in extra code added to handlers - this can get messy and hard to maintain.

==**Handler-level pipes**== require some more code, but provide some great benefits:

- Such pipes do not require extra code at the parameter level.
- Easier to maintain and expand. If the shape of the data changes, it is easy to make the necessary changes within the pipe only.
- Responsibility of identifying the arguments to process is shifted to one central file - the pipe file.
- Promote usage of DTOs which is a very good practice.

# Example of a Pipe
![[pipeExample.png]]