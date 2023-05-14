import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import store from "../../store";
import { routesConfig } from "../../router";
import TransactionsTable from ".";

describe("TransactionsTable Component", () => {
  test("expect the Transactions Table to have rendered on screen", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TransactionsTable />
      </Provider>
    );

    const component = getByTestId("transactionsTable");
    expect(component).toBeInTheDocument();
  });

  test("expect to navigate to an affiliate's balance page when clicking on their name", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/']
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await waitFor(() => {
      const link = screen.getAllByRole('link')[0];
      fireEvent.click(link);
      const affiliateBalancePage = getByTestId('affiliateBalancePage')
      expect(affiliateBalancePage).toBeInTheDocument();
    })
  })
});