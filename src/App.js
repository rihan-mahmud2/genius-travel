import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
