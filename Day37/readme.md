 # JavaScript Execution Context - Notes

## How Does a JavaScript File Run?

When JavaScript code is executed, it follows two main phases:

- **Memory Creation Phase** (also called the Creation Phase)
- **Execution Phase**

These phases ensure all variables, functions, and objects are initialized and the code runs correctly.

## Example Code

```javascript
var a = 10;
function multiply(b) {
    var c = 5;
    return b * c;
}
var result = multiply(a);
```

## Execution Process in JavaScript

### 1. Global Execution Context (GEC)

- When code starts, JavaScript creates a **Global Execution Context (GEC)**.
- The GEC consists of:
  - Memory Creation Phase (Creation Phase)
  - Execution Phase

### 2. Memory Creation Phase (Hoisting)

During this phase, the JavaScript engine **allocates memory** for variables and functions:

- All variables are initialized with `undefined`.
- Functions are stored entirely in memory (with their code).
- The `this` keyword is bound to the global object (e.g., `window` in browsers).

#### Example (Memory Creation for GEC):

- `var a = undefined`
- `var result = undefined`
- `function multiply(b)` is stored in memory (entire function code).

## Notes

- After the Memory Creation Phase, the Execution Phase runs, where code is executed line by line and variables are assigned actual values.
- This process is crucial for understanding **hoisting** and how JavaScript handles variable/function declarations before execution.

