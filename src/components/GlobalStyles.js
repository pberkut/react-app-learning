import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`

/* Preset styles*/

body {
  font-family: sans-serif;
  line-height: 1.5;
  background-color: red;
  }
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
