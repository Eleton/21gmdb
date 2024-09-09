import { expect, test } from "vitest";
import Marker from "@/components/Marker";
import { render, screen, within } from "@testing-library/react";

test("Marks nothing", () => {
  render(
    <Marker searchString="">
      The quick brown fox jumps over the lazy dog
    </Marker>,
  );
  expect(screen.queryByTestId("mark")).toBeNull();
});

test("Marks the fox", () => {
  render(
    <Marker searchString="fox">
      The quick brown fox jumps over the lazy dog
    </Marker>,
  );
  expect(screen.queryByTestId("mark")).toBeDefined();
  const { getByText } = within(screen.getByTestId("mark"));
  expect(getByText("fox")).toBeTruthy();
});
