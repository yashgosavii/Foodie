import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";

describe("RestaurantCard Component", () => {
  const mockData = {
    resData: {
      info: {
        name: "Test Restaurant",
        cuisines: ["Italian", "Chinese"],
        avgRating: "4.5",
        costForTwo: 500,
        cloudinaryImageId: "test-image-id",
        sla: { slaString: "30 mins" },
      },
    },
  };

  test("renders the restaurant name, cuisines, and rating correctly", () => {
    render(<RestaurantCard {...mockData} />);
    const name = screen.getByText("Test Restaurant");
    expect(name).toBeInTheDocument();
    const cuisine = screen.getByText("Italian, Chinese");
    expect(cuisine).toBeInTheDocument();
    const avgRating = screen.getByText("4.5");
    expect(avgRating).toBeInTheDocument();
  });

  test("displays the delivery time and cost for two", () => {
    render(<RestaurantCard {...mockData} />);
    const deliveryTime = screen.getByText("Delivery Time : 30 mins");
    expect(deliveryTime).toBeInTheDocument();
    const costForTwo = screen.getByText("Price : Rs. 500");
    expect(costForTwo).toBeInTheDocument();
  });

});

