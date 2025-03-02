React Router has introduced several new features in recent versions, especially in **React Router v6+**. Here are some key enhancements:  

---

### **1. Data Fetching with Loaders & Actions (React Router v6.4+)**
- Enables **server-side fetching** before rendering a component.
- Works well with **Suspense** and **deferred data loading**.

✅ **Example using a loader in `createBrowserRouter`**
```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/user/:id",
    element: <UserProfile />,
    loader: async ({ params }) => {
      const response = await fetch(`/api/users/${params.id}`);
      return response.json();
    },
  },
]);

function UserProfile() {
  const user = useLoaderData();
  return <div>{user.name}</div>;
}

export default function App() {
  return <RouterProvider router={router} />;
}
```
🔹 `useLoaderData()` fetches the preloaded data inside the component.  

---

### **2. `createBrowserRouter` & `createRoutesFromElements`**
- A new way to define routes using objects (instead of JSX inside `Routes`).
- Better for **performance & data fetching**.

✅ **Example**
```tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} />,
    <Route path="/about" element={<About />} />
  )
);
```
🔹 More structured and efficient than `<Routes>` and `<Route>`.

---

### **3. Form Actions for Mutations**
- `action` functions handle **form submissions**, updating data without extra state management.

✅ **Example**
```tsx
import { Form, useActionData } from "react-router-dom";

export function ContactForm() {
  const result = useActionData(); // Get the response from action
  return (
    <Form method="post">
      <input type="text" name="name" />
      <button type="submit">Submit</button>
      {result && <p>{result.message}</p>}
    </Form>
  );
}

export const contactAction = async ({ request }) => {
  const formData = await request.formData();
  return { message: `Hello, ${formData.get("name")}!` };
};
```
🔹 **No need for local state** or `useState` in simple forms.

---

### **4. `useNavigate` Enhancements**
- Now supports **replacing history**, **relative navigation**, and **form submissions**.

✅ **Example**
```tsx
const navigate = useNavigate();
navigate("/dashboard", { replace: true }); // Replace history entry
```
🔹 `replace: true` prevents users from navigating back.

---

### **5. Suspense and Lazy Loading**
- React Router now **natively supports Suspense for code splitting**.

✅ **Example**
```tsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```
🔹 Loads components **only when needed**, improving performance.

---

### **6. Search Params (`useSearchParams`)**
- Built-in hooks for handling query parameters.

✅ **Example**
```tsx
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <h1>Category: {category}</h1>
      <button onClick={() => setSearchParams({ category: "books" })}>
        Books
      </button>
    </div>
  );
}
```
🔹 No need for `window.location.search` or `URLSearchParams`.

---

### **7. Error Handling with `errorElement`**
- Built-in error handling for routes.

✅ **Example**
```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
```
🔹 Catches errors like **404, network issues, or loader failures**.

---

## **Conclusion**
React Router has evolved to handle:
✅ **Better data fetching** (`loader`, `useLoaderData`)  
✅ **Easier form handling** (`Form`, `useActionData`)  
✅ **Improved performance** (`Suspense`, `lazy`)  
✅ **More powerful navigation & query handling**  
 🚀
