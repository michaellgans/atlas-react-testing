// Test for CoverArt Component
// Editting a test as a test for Github

// Imports
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { CoverArt } from "@/components/CoverArt";
import { ContextProvider } from "@/components/ContextProvider";

test("CoverArt renders correctly", () => {
    const {container} = render(
        <ContextProvider>
            <CoverArt />
        </ContextProvider>
    );
    expect(container).toMatchSnapshot();
});
