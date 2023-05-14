import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { getTransactions, sendTransactionsFile } from '../../store/transactions/transactions.action';
import { getBalance } from '../../store/balance/balance.action';
import './Form.css';
import { GenericResponse } from '../../interfaces/genericResponse.interface';

type Props = {
  setShowToast: (T: boolean) => void;
  setToastMessage: (T: GenericResponse) => void;
}

const Form: React.FC<Props> = ({ setShowToast, setToastMessage }) => {
  const [attachedFile, setAttachedFile] = useState<File | undefined>(undefined);
  const dispatch = useAppDispatch();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const renderAttachedFilePreview = () => {
    return <div className="attached-file" data-testid="attachedFilePreview">{attachedFile?.name}</div>;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (attachedFile) {
      await dispatch(sendTransactionsFile(attachedFile))
        .then((response) => {
          dispatch(getBalance());
          dispatch(getTransactions());
          setAttachedFile(undefined);
          setShowToast(true);
          setToastMessage(response.payload as GenericResponse)
      });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} data-testid="form">
      <h2>Upload your file</h2>
      <legend className="form-legend">We are currently only supporting files with a .txt extension.</legend>
      <fieldset className="fieldset">
        <input
          accept="text/plain"
          className="input-file"
          data-testid="inputFile"
          id="transactions"
          name="transactions"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          ref={inputRef}
          type="file"
          />
        <label htmlFor="transactions">Select a file</label>
      </fieldset>

      <button className="button" disabled={!attachedFile} type="submit">Save</button>

      {attachedFile && renderAttachedFilePreview()}
    </form>
  );
};

export default Form;
