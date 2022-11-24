import React, {Suspense} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexLayout from "./components/Layout";
import "./assets/globalStyles/App.scss";

const IndexPage = React.lazy(() => import('./pages/IndexPage'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<p>loading </p>}><IndexPage /></Suspense>
      },
      {
        path: '*',
        element: ''
      }
    ]
  }
]);


const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
