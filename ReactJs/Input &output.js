
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('hi')
  },[])

  // Function to increment the count
  const incrementCount = () => {
    
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
    // setCount(count + 1);

  };

Ouput: when user clicks on Btn once
case 1 :2 
case 2: 1 

This happens because the functional form of setState always works with the latest state value, ensuring sequential updates.


case 2 :
This happens because count + 1 uses the current state value at the time of execution (stale value), not the latest updated state.

# Key Difference Between Functional and Non-Functional Updates
Functional Updates ((prevCount) => prevCount + 1):

-> Each setCount uses the latest state value, so multiple updates are applied sequentially.
Results in count incrementing by 2 when called twice.

  Non-Functional Updates (count + 1):

-> Each setCount uses the stale  value at the time of execution, leading to redundant updates.
Results in count incrementing by 1 when called twice
