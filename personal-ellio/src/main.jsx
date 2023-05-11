import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Broker from "./pages/Broker";
import Trading from "./pages/Trading";
import Body from "./components/Body";
import Education from "./pages/Education";
import Community from "./pages/Community";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import { AuthProvider } from "./context/authProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "broker", element: <Broker /> },
      { path: "trading", element: <Trading /> },
      { path: "education", element: <Education /> },
      { path: "community", element: <Community /> },
      { path: "home", element: <Body /> },
      { path: "detail/:id", element: <Detail /> },
      { index: true, element: <Body /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
