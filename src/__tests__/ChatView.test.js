import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ChatView from "../views/ChatView/ChatView";

test("renders the ChatView", () => {
  render(<ChatView />, { wrapper: MemoryRouter });
});
