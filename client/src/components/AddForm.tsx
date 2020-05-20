import React from "react";
import { FormState } from "../redux/reducers/formReducer";
import { AddFormActions } from "../redux/container/AddFormContainer";

import "./AddForm.scss";

type AddFormProps = FormState & AddFormActions;

const AddForm: React.FC<AddFormProps> = (props) => {
  const { name, age } = props;

  return (
    <div className="AddForm">
      <h2 className="AddForm__title">フォーム</h2>
      <form onSubmit={(e) => props.postForm(e, name, age)}>
        <input
          className="AddForm__input"
          placeholder="名前"
          value={name}
          onChange={(e) => props.changeName(e.target.value)}
        />
        <input
          className="AddForm__input"
          placeholder="年齢"
          value={age}
          onChange={(e) => props.changeAge(e.target.value)}
        />
        <button className="AddForm__submit" type="submit">
          送信
        </button>
      </form>
    </div>
  );
};

export default AddForm;
