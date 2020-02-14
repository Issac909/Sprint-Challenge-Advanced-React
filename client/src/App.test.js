import React from "react";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from "@testing-library/react";


import App from './App';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';

it("renders without crashing", () => {
  const page = rtl.render(<App />);
  expect(page).toBeVisible;
});

test("Header is displayed", () => {
  const { getByText } = rtl.render(<Header />);
  const displayElement = getByText(/world/i);
  expect(displayElement).toBeInTheDocument();
});

test("Player is found", () => {
  const { getByText } = rtl.render(<App />);
  const displayElement = getByText(/players/i);
  expect(displayElement).toBeInTheDocument();
});
