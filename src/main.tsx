import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.tsx";
import Track from "./Pages/Track.tsx";
import Compare from "./Pages/Compare.tsx";
import Wishlist from "./Pages/Wishlist.tsx";
import ShopingCard from "./Pages/ShopingCard.tsx";
import CheckOut from "./Pages/CheckOut.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/track_order",
    element: <Track />,
  },
  {
    path: "/compare",
    element: <Compare />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/shoping-card",
    element: <ShopingCard />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
