const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  //   const loginBtn = screen.getByText("Login");
  expect(loginBtn).toBeInTheDocument();
});

it("Should render header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartLogo = screen.getByAltText("shopping-cart");
  const cartItems = screen.getByText("0");
  expect(cartLogo).toBeInTheDocument();
  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with login button changed to logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn); // fire a event on an element
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
