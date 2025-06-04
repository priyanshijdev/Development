Hooks are a powerful new feature introduced in React 16.8 that allows you to use state and other React features without writing a class. 
  They let you “hook into” React state and lifecycle features from function components. 
  This makes it possible to write simpler and more maintainable components.
  
                                                                    Some Common Hooks::

  
  | Hook                | Description                                                            | Use Case                                                     |
| --------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| `useState`            | Adds state to functional components                                    | Manage component-level state (e.g., form inputs, toggles)    |
| `useEffect`           | Performs side effects in function components                           | Fetching data, setting up subscriptions, or updating the DOM |
| `useContext`          | Accesses the value of a React context                                  | Consuming global data like themes or user authentication     |
| `useRef`              | Returns a mutable ref object                                           | Accessing DOM elements, persisting values without re-render  |
| `useMemo`             | Memoizes a computed value                                              | Optimizing performance for expensive calculations            |
| `useCallback`         | Memoizes a callback function                                           | Preventing unnecessary re-renders of child components        |
| `useReducer`          | An alternative to `useState` for complex state logic                   | Managing state with multiple sub-values or transitions       |
| `useLayoutEffect`     | Similar to `useEffect` but fires synchronously after all DOM mutations | Measuring DOM elements before the browser paints             |
| `useImperativeHandle` | Customizes the instance value exposed when using `ref`                 | Exposing specific methods from child components to parents   |
| `useDebugValue`       | Displays a label for custom hooks in React DevTools                    | Debugging custom hooks more easily                           |

  -------------------------------------------------------------------------------------------------------------------------

  
