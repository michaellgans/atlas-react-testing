// Test for VolumeControl Component

// Imports
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { VolumeControl } from "@/components/VolumeControl";
import { ContextProvider } from "@/components/ContextProvider";

test("VolumeControl renders correctly", () => {
    const {asFragment} = render(
        <ContextProvider>
            <VolumeControl />
        </ContextProvider>
    );
    expect(asFragment).toMatchSnapshot();
});
