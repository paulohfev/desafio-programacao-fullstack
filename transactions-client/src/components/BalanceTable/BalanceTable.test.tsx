import React from "react";
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";
import store from "../../store";
import BalanceTable from ".";


const WrappedComponent: React.FC = () => {
  return <Provider store={store}><BalanceTable /></Provider>;
};

describe("BalanceTable Component", () => {
  test("expect the Balance Table to have rendered on screen", () => {
    const { getByTestId } = render(<WrappedComponent />);

    const component = getByTestId("balanceTable");
    expect(component).toBeInTheDocument();
  });
});
