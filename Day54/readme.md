 # JavaScript Object Property Attributes – Key Concepts


## Introduction

JavaScript objects have **properties** with deeply configurable internal **attributes**. Mastery of these lets you:
- Control mutability and visibility of object data
- Secure critical values (e.g., making constants truly constant)
- Write safer and more maintainable code

## Standard vs. Custom Properties

- **Built-in properties** (e.g., `Math.PI`) are often:
  - *Non-writable*
  - *Non-configurable*
  - *Non-enumerable*
- **Custom properties** by default are:
  - *Writable*
  - *Configurable*
  - *Enumerable*

## Property Descriptors

Each object property in JavaScript has a descriptor with three boolean attributes:

| Attribute      | Description                                 | Example                     |
| -------------- | ------------------------------------------- | --------------------------- |
| **writable**   | Can the property value be changed?          | `Math.PI.writable = false`  |
| **enumerable** | Does it show up in loops/`Object.entries`?  | `enumerable: false`         |
| **configurable**| Can it be deleted or descriptors changed?  | `configurable: false`       |

Use `Object.getOwnPropertyDescriptor()` to inspect these on any object.

## Defining and Modifying Property Attributes

- To change property behavior, use:

  ```js
  Object.defineProperty(obj, 'prop', {
    value: someValue,
    writable: false,
    configurable: false,
    enumerable: false
  });
  ```

- This lets you make a custom property:
  - *Read-only* (by setting `writable: false`)
  - *Non-enumerable* (hidden from object loops)
  - *Immutable* (by setting both `writable: false` and `configurable: false`)

## Effects on Iteration & Safety

- Non-enumerable properties do **not** show up in `for...in` loops or `Object.entries()`.
- Backend APIs and library code may hide "private" properties this way.
- Attempting to overwrite or delete non-writable/non-configurable properties has no effect (unless in strict mode, where an error is thrown).

## Practical Usage & Advanced Scenarios

- To create constants or hide implementation details in objects (useful in libraries, hooks, services).
- Especially relevant for:
  - System-level code (frameworks, reusable components)
  - Creating plug-ins or extending built-ins
  - Preventing accidental mutation of crucial values

**Example:**  
Making an immutable config property:

```js
Object.defineProperty(config, 'API_ENDPOINT', {
  value: 'https://api.example.com',
  writable: false,
  configurable: false,
  enumerable: true
});
```
