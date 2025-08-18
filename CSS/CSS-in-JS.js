CSS-in-JS:::

1. Inline styles (basic way)

You can pass a style object directly to a React element:

function App() {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "8px" }}>
      Hello CSS-in-JS
    </div>
  );
}

-----------------------------------------------------------------------------------------------------------------------
  
2. Using styled-components (popular library)

styled-components lets you write actual CSS inside JS:

npm install styled-components

import styled from "styled-components";

const Button = styled.button`
  background: teal;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: darkcyan;
  }
`;

function App() {
  return <Button>Click Me</Button>;
}

------------------------------------------------------------------------------------------------------------------------------
4. JSS (CSS as JS object)

Some libraries like Material-UI use JSS, where styles are written as JS objects:

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  },
});

but try not to use CSS-in-js , will increase your bundle size also DOM maniplualtions would cost heavy.
