// Tests the MusicPlayer Component

// Imports
import { render } from "@testing-library/react";
import MusicPlayer from "@/MusicPlayer";
import { expect, test } from "vitest";

test("MusicPlayer renders a child correctly", () => {
    // Generate mock child
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

test("MusicPlayer renders multiple children correctly", () => {
    // Generate multiple children
    const {getAllByText} = render(
        <MusicPlayer>
            <div>Mock Child 1</div>
            <div>Mock Child 2</div>
            <div>Mock Child 3</div>
        </MusicPlayer>
    );

    // If all three children are able to render
    // regex will find 3 matches
    const children = getAllByText(/Mock Child \d/);
    expect(children).toHaveLength(3);
});
