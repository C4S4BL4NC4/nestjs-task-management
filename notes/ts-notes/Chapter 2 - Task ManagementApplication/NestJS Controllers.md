[[Chapter 2]]

- Responsible for handling incoming **requests** and returning **responses** to the client.
- Bound to specific **path** (for example, "*/tasks*" for the task resource).
- Contain **handlers**, which handle **endpoints** and **request methods** (GET, POST, DELETE, etc...)
- Can take advantage of **dependency injection** to consume providers within the same module.
