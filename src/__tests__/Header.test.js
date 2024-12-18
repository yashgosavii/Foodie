import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  test("renders the header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("LOGIN");

    // we can also use the name attribute of the button to get the button, in case of multiple buttons
    const loginButton = screen.getByRole("button", { name: "LOGIN" });
    expect(loginButton).toBeInTheDocument();
  });

  test("renders the header component with cart items - 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("CART (0 Items)");
    expect(cartItems).toBeInTheDocument();
  });

  test("renders the header component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/CART/);
    expect(cartItems).toBeInTheDocument();
  });

  test("renders the header component with login to logout on click event ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "LOGIN" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "LOGOUT" });

    expect(logoutButton).toBeInTheDocument();
  });
});
