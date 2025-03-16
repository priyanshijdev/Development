                                                        What is re-render in React?

initial render — happens when a component first appears on the screen
re-render — second and any consecutive render of a component that is already on the screen

                                                        When React components re-render itself?
ANS:
  There are four reasons why a component would re-render itself:
1.state changes
2.parent (or children) re-renders
3.context changes,
4. hooks changes

                                                                            useMemo():
Optimises expensive calculation:
useMemo memoizes the result of a computation, so it only recalculates when its dependencies change. This is useful when dealing with expensive calculations.

import { useMemo } from "react";

const ExpensiveComponent = ({ num }: { num: number }) => {
  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return num * num; // Simulating an expensive computation
  }, [num]);

  return <div>Squared Number: {squaredNumber}</div>;
};


Why is it helps?

1.Without useMemo, the computation runs on every render.
2.With useMemo, it only recomputes if num changes.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

 		                                                                useCallback():

 useCallback: Optimizing Function References
useCallback memoizes a function, so it doesn't get recreated on every render unless its dependencies change. 
  This is especially useful when passing callbacks to child components.

  
 import { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent"; // A separate component

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // No dependencies, so it stays the same across renders

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

=> Without useCallback, handleClick is recreated on every render.
=> With useCallback, handleClick remains the same across renders unless dependencies change.

  
 useMemo → For expensive calculations (filtering, sorting, complex logic).
useCallback → For optimizing function references (useful when passing callbacks to child components).
