import Book from "../Others/Book";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Login/Login");
const { default: Register } = require("../Pages/Register/Register");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://genius-travel-server.vercel.app/place"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/hotels/:id",
        element: (
          <PrivateRoute>
            <Book></Book>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://genius-travel-server.vercel.app/hotels/${params.id}`),
      },
    ],
  },
]);
