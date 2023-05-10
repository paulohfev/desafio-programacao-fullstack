import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { getTransactions, sendTransactionsFile } from '../../reducers/transactions/transactions.action';
import { getBalance } from '../../reducers/balance/balance.action';
import './Form.css';
import { useSelector } from 'react-redux';
import { selectUploadResponse } from '../../reducers/transactions/transactions.selectors';

const Form: React.FC = () => {
  const [attachedFile, setAttachedFile] = useState<File | undefined>(undefined);
  const dispatch = useAppDispatch();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const uploadResonse = useSelector(selectUploadResponse);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const renderAttachedFilePreview = () => {
    return <div className="attached-file">{attachedFile?.name}</div>;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (attachedFile) {
      dispatch(sendTransactionsFile(attachedFile))
        .then((res) => {
          console.log(uploadResonse)
          dispatch(getBalance());
          dispatch(getTransactions());
          setAttachedFile(undefined);
      });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <legend className="form-legend">Upload your file</legend>
      <fieldset className="fieldset">
        <input
          className="input-file"
          id="transactions"
          name="transactions"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          ref={inputRef}
          type="file"
          />
        <label htmlFor="transactions">Select a file</label>
      </fieldset>

      <button className="button" type="submit">Save</button>

      {attachedFile && renderAttachedFilePreview()}
    </form>
  );
};

export default Form;
