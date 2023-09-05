import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Stub title",
    type: "Stub type",
    bedrooms: 3,
    bathrooms: 2,
    price: 500000,
    city: "Stub city",
    email: "Stub email",
  };
  it("renders the correct value for props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />,
    );

    expect(getByText("Stub title")).toBeInTheDocument();
    expect(getByText("Stub type")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("500000")).toBeInTheDocument();
    expect(getByText("Stub city")).toBeInTheDocument();
  });
});
