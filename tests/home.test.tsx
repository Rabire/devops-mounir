import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders a link", () => {
    render(<Home />);

    const heading = screen.getByRole("link", {
      name: /En savoir plus !/,
    });
    expect(heading).toMatchSnapshot();
  });
});
