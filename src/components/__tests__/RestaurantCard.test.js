import { render, screen } from "@testing-library/react";
import RestaurantCard, { RestaurantCardPromoted } from "../RestaurantCard";
import mocks from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard resData={mocks} />);

  const resName = screen.getByText("Kasturi Restaurant");

  expect(resName).toBeInTheDocument();
});

it("Should render Restaurant Card component with Ad. Label", () => {
  const RestaurantCardWithLabel = RestaurantCardPromoted(RestaurantCard);
  render(<RestaurantCardWithLabel resData={mocks} />);

  const adLabel = screen.getByText("Ad.");

  expect(adLabel).toBeInTheDocument();
});
