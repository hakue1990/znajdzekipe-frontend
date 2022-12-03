import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeView from "../views/HomeView/HomeView";

test("renders the HomeView", () => {
  render(<HomeView />, { wrapper: MemoryRouter });
});
