// Test for CoverArt Component

// Imports
import { render } from "react-dom";
import { expect, test } from "vitest";
import { CoverArt } from "@/components/CoverArt";

test("CoverArt renders correctly", () => {
    const {container} = render(<CoverArt />);
    expect(container).toMatchSnapshot();
});
