// Test for PlayListItem Component

// Imports
import { render } from "@testing-library/react";
import { PlayListItem } from "@/components/PlayListItem";
import { AppContext } from "@/components/ContextProvider";
import { expect, it, vi } from "vitest";

// Creates Mock Context Provider
// MOCKS ALL DATA RETURNED BY CONTEXT PROVIDER!
const mockContextValue = {
  songs: [
    { title: "Test Song 1", artist: "Test Artist 1", duration: "3:00", cover: "cover 1" },
    { title: "Test Song 2", artist: "Test Artist 2", duration: "4:00", cover: "cover 2" }
  ],
  // First song is selected in the test
  currentSong: 0,
  // Mock setCurrentSong useState function
  setCurrentSong: vi.fn(),
};

it("should render the PlayListItem component and match the snapshot", () => {
  const { asFragment } = render(
    <AppContext.Provider value={mockContextValue}>
      <PlayListItem songTitle="Test Song 1" artist="Test Artist 1" playTime="3:00" />
    </AppContext.Provider>
  );

  // Take Snapshot
  expect(asFragment()).toMatchSnapshot();
});
