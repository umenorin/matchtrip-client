import './index.scss'

import { StrictMode } from 'react'

import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router';

import router from "./Router.tsx";

const root = document.getElementById("root");

if (root){
  ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
}
