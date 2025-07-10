How do you reduce the initial load time of a React app?

 1. Code Splitting
Break your code into smaller chunks and load them on demand using React.lazy or dynamic import

// Instead of importing all at once
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

<Route
  path="/dashboard"
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  }
/>


2. tree shaking 

Ensure unused code is removed from your production build.

Use ES Modules (import/export)

Keep dependencies lean

Webpack (via CRA or Vite) usually does this automatically for production builds.


3. Bundle Optimization
Use tools like Webpack Bundle Analyzer to inspect bundle size.

Remove large, unnecessary libraries.

Use lightweight alternatives (date-fns instead of moment.js, axios instead of fetch with polyfills).
