[[Chapter 2]]

- Each app has at least one module - the root module. That is the starting point of the application.
- Modules are an effective way to organize components by closely related set of capabilities (e.g. per feature).
- It is a **good practice** to have a folder per module, containing the module's components.
- Modules are **singletons**, therefore a module can be imported by multiple other modules.

# Defining a Module

A module is defined by a class with the ==`@Module`== decorator.

The decorator provides metadata that Nest uses to organize the application structure.

# ==@Module== Decorator Properties

- **providers:** Array of providers to be available within the module via dependency injection.
- **controllers:** Array of controllers to be instantiated within a module.
- **exports:** Array of providers to export to other modules.
- **imports:** List of modules require by this module. Any exported provider by these modules will now be available in our module via dependency injection.