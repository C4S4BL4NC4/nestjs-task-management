[[Chapter 2]]

"A DTO is an object that carries data between processes."
*-Wikipedia*

"A DTO is an object that is used to encapsulate data, and send it from one subsystem of an app to another."
*-Stack Overflow*

"A DTO is an object that defines how the data will be send over the network."
*-NestJS Docs*


# More about DTOs

- Common concept in software development that is not specific to NestJS.
- Results in more bulletproof code, as it can be used as a TypeScript type.
- Do not have any behaviour except for storage, retrieval, serialization and deserialization of its own data.
- Result in increased performance (although negligible in small applications).
- Can be useful for data validation.
- A DTO is **NOT** a model definition. It defines the shape of data for a specific case, for example - creating a task.
- Can be defined using an ==`interface`== or a ==`class`==.


# Classes VS Interfaces for DTOs

DTOs can be defined as a class or an interface.

The recommended approach is the use **classes**, also clearly documented in the NestJS docs.

The reason is that interfaces are a part of TypeScript and therefore are not preserved post-compilation.

Classes allow us to do more, and since they are a part of JavaScript, they will be preserved post-compilation.

TLDR: Classes are the way to go in DTOs.


# Example DTOs

![[DTOExamples.png]]

