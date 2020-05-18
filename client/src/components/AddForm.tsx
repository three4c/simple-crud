import React from "react";
import axios from "axios";
import { State } from "../redux/reducers";
import { AddFormActions } from "../redux/AddFormContainer";
import { characterActions } from "../redux/actions";
import store from "../redux/store";

type AddFormProps = State["form"] & AddFormActions;

const AddForm: React.FC<AddFormProps> = (props) => {
  const { name, age } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // axios
    //   .post("/api/characters", {
    //     name,
    //     age,
    //   })
    //   .then((response) => {
    //     props.initializeForm();
    //     const _characterArray = response.data;
    //     store.dispatch(characterActions.receiveDataSuccess(_characterArray));
    //   })
    //   .catch((error) => {
    //     console.log(new Error(error));
    //     store.dispatch(characterActions.receiveDataFailed());
    //   });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
