How to identify memory leaks in react?


1. Warning Signs in React

React Dev Warnings



   Common Causes of Memory Leaks in React

Uncleared timers

useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(timer); // ✅ cleanup
}, []);


Unsubscribed event listeners

useEffect(() => {
  const handler = () => console.log("scrolling");
  window.addEventListener("scroll", handler);

  return () => window.removeEventListener("scroll", handler); // ✅ cleanup
}, []);


Pending API calls

useEffect(() => {
  let isMounted = true;

  fetch("/api/data")
    .then(res => res.json())
    .then(data => {
      if (isMounted) setData(data);
    });

  return () => { isMounted = false }; // ✅ cancel effect
}, []);


Not canceling subscriptions (WebSocket, Redux observable, etc.)

🔧 4. Tools to Catch Leaks

React Developer Tools → Check “Profiler” tab for components not unmounting.

why-did-you-render (library) → Detects unnecessary renders.

Memory tab in DevTools → Repeated heap snapshots show if objects keep growing.

✅ Best Practices to Prevent Memory Leaks

Always cleanup in useEffect return.

Cancel API requests if component unmounts (using AbortController).

Use keys properly when rendering lists (wrong keys may retain old components in memory).

Watch for global event listeners → always remove the
