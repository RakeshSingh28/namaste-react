import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { lazy, Suspense, useState } from "react";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppContainer = () => {
  const [userName, setName] = useState("Rakesh Singh");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setName }}>
        <div>
          <UserContext.Provider value={{ loggedInUser: userName }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppContainer />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
