// Test for SongTitle Component

// Imports
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { SongTitle } from "@/components/SongTitle";
import { ContextProvider } from "@/components/ContextProvider";

test("SongTitle renders correctly", () => {
    const {asFragment} = render(
        <ContextProvider>
            <SongTitle />
        </ContextProvider>
    );
    expect(asFragment).toMatchSnapshot();
});
