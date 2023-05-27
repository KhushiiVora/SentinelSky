import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
// import './profile.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Login from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import SignUpPage from "./pages/signupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  //  {
  //   path: "/recipe/:recipe_id",
  //   element: <RecipePage />,
  //  },
  //  {
  //   path: "/community",
  //   element: <CommunityPage />,
  //  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
