import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchView from "../views/SearchView/SearchView";

test("renders the SearchView", () => {
  render(<SearchView />, { wrapper: MemoryRouter });
});
