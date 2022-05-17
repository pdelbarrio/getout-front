import { render, screen } from "@testing-library/react";
import Image from "../components/Image";

describe("Image", () => {
  it("renders the component", () => {
    render(<Image src="src-test" alt="alt-test" />);

    const imageElement = screen.queryByAltText("alt-test");
    expect(imageElement).toBeVisible();
  });
});
