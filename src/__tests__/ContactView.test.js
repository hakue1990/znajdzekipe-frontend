import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ContactView from "../views/ContactView/ContactView";

test("renders the ContractView", () => {
  render(<ContactView />, { wrapper: MemoryRouter });
});
