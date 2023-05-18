import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Form from '.';
import { Provider } from 'react-redux';
import store from "../../store";

const StoreWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Form Component", () => {
  const fakeFile = new File(
    ['12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS'],
    'sales.text',
    { type: 'text/plain'},
  );

  test("expect the Form to have rendered on screen", () => {
    const { getByTestId } = render(
      <StoreWrapper>
        <Form setShowToast={jest.fn} setToastMessage={jest.fn} />
      </StoreWrapper>
    );
    const formComponent = getByTestId("form");
    expect(formComponent).toBeInTheDocument();
  });

  test("expect the Form's save button to be disabled if there's no attached file for upload", () => {
    const { getByRole, getByTestId } = render(
      <StoreWrapper>
        <Form setShowToast={jest.fn} setToastMessage={jest.fn} />
      </StoreWrapper>
    );

    const inputUploader = getByTestId("inputFile") as HTMLInputElement;
    const button = getByRole("button", { name: "Save" });

    expect(inputUploader.files?.[0]).toEqual(undefined);
    expect(button).toBeDisabled();
  });

  test("expect the Form's save button to be enabled if there's an attached file for upload", async () => {
    const { getByRole, getByTestId } = render(
      <StoreWrapper>
        <Form setShowToast={jest.fn} setToastMessage={jest.fn} />
      </StoreWrapper>
    );
    const inputUploader = getByTestId("inputFile") as HTMLInputElement;
    const button = getByRole("button", { name: "Save" });

    await act(async () => {
      await waitFor(() => {
        fireEvent.change(inputUploader, {
          target: { files: [fakeFile] }
        })
      });
    });

    expect(inputUploader.files?.[0]).toEqual(fakeFile);
    expect(button).not.toBeDisabled();
  });

  test("expect the file's preview to render if there's an attached file for upload", async () => {
    const { getByTestId } = render(
      <StoreWrapper>
        <Form setShowToast={jest.fn} setToastMessage={jest.fn} />
      </StoreWrapper>
    );

    const inputUploader = getByTestId("inputFile") as HTMLInputElement;

    await act(async () => {
      await waitFor(() => {
        fireEvent.change(inputUploader, {
          target: { files: [fakeFile] }
        })
      });
    });

    const attachedFilePreview = getByTestId("attachedFilePreview");
    expect(attachedFilePreview).toBeInTheDocument();
    expect(inputUploader.files?.[0]).toEqual(fakeFile);
    expect(attachedFilePreview.textContent).toEqual(fakeFile.name);
  });
})