// Tests the MusicPlayer Component

// Imports
import { render } from "@testing-library/react";
import MusicPlayer from "@/MusicPlayer";
import { expect, test } from "vitest";

test("MusicPlayer renders children correctly", () => {
    // Generate mock children
    const { getByText } = render(
        <MusicPlayer>
            <div>
                Mock Child
            </div>
        </MusicPlayer>
    );

    // Child should be rendered inside Music Player
    expect(getByText("Mock Child")).toBeDefined();
});

test("MusicPlayer renders correctly and matches snapshot", () => {
    const { asFragment } = render(
        <MusicPlayer>
            <div>
                Mock Child
            </div>
        </MusicPlayer>
    );

    // Take Snapshot
    expect(asFragment()).toMatchSnapshot();
})