
| Feature              | `async`                             | `defer`                                         |
| -------------------- | ----------------------------------- | ----------------------------------------------- |
| **HTML Parsing**     | Does not block                      | Does not block                                  |
| **Execution Timing** | As soon as the script is downloaded | After HTML is parsed, before `DOMContentLoaded` |
| **Execution Order**  | Not guaranteed                      | Guaranteed (executes in document order)         |
| **DOM Dependency**   | Generally not dependent             | Generally dependent                             |
