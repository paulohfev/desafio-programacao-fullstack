import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { sendTransactionsFile } from '../../reducers/transactions/transactions.action';
import './Form.css';

const Form: React.FC = () => {
  const [attachedFile, setAttachedFile] = useState<File | undefined>(undefined);
  const dispatch = useAppDispatch();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachedFile(e.target.files?.[0]);
  };

  const renderAttachedFilePreview = () => {
    return <div className="attached-file">{attachedFile?.name}</div>;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (attachedFile) {
      dispatch(sendTransactionsFile(attachedFile));
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
