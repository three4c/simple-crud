import React from "react";
import { State } from "../redux/reducers";
import { AddFormActions } from "../redux/AddFormContainer";

type AddFormProps = State["form"] & AddFormActions;

const AddForm: React.FC<AddFormProps> = (props) => {
  const { name, age } = props;

  return (
    <div>
      <form onSubmit={(e) => props.postForm(e, name, age)}>
        <label>
          名前:
          <input
            value={name}
            onChange={(e) => props.changeName(e.target.value)}
          />
        </label>
        <label>
          年齢:
          <input
            value={age}
            onChange={(e) => props.changeAge(e.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddForm;
