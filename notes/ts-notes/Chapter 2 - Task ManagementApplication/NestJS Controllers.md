[[Chapter 2]]

- Responsible for handling incoming **requests** and returning **responses** to the client.
- Bound to specific **path** (for example, "*/tasks*" for the task resource).
- Contain **handlers**, which handle **endpoints** and **request methods** (GET, POST, DELETE, etc...)
- Can take advantage of **dependency injection** to consume providers within the same module.


# Defining a Controller 

Controllers are defined by decorating a class with the ==`@Controller`== decorator.

The decorator accepts a string, which is the **path** to be handled by the controller.

```ts
@Contoller('/tasks')
export class TasksController {
	//...
}
```


# Defining a Handler

Handlers are simply methods within the controller class, decorated with decorators such as ==`@Get`==, ==`@Post`==, ==`@Delete`== etcetera.

```ts
@Controller('/tasks')
export class TasksController {
@Get()
getAllTasks() {
	// Do stuff
	return ...;
}

@Post()
createTask() {
	// Do stuff
	return ...;
	}
}
```


# Example of an incoming HTTP request

![[incomingHTTPReq.png]]

# Examples of Controllers

![[controllersExamples.png]]