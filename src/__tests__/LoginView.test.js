import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginView from "../views/LoginView/LoginView";

test("renders the LoginView", () => {
  render(<LoginView />, { wrapper: MemoryRouter });
});
