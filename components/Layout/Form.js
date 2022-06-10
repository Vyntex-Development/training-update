import Button from "../UI/Button";
import classes from "./Form.module.css";
import { useState } from "react";
import { client } from "../../utils/utils";

const Form = ({ formConfig }) => {
  const { input: inputs } = formConfig[0].attributes;
  const [inputValues, updateInputValues] = useState(null);

  const onChangeHandler = (ev, inputName) => {
    let modifiedInputValues = {
      ...inputValues,
      [inputName]: ev.target.value,
    };
    updateInputValues(modifiedInputValues);

    // POSLATI PODATKE NA STRAPI
  };

  const submitHandler = async (ev) => {
    // UVEK IDE KAO PRVO U FUNKCIJU ZA FORM SUBMIT
    ev.preventDefault();
    client.request("http://localhost:1337/api/received-input-datas", "POST", {
      data: { ...inputValues },
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.Form} action="">
      {inputs.map((input) => {
        return (
          <div key={input.id}>
            <label htmlFor={input.inputName}>{input.inputLable}</label>
            <input
              name={input.inputName}
              type={input.inputType}
              placeholder={input.inputPlaceholder}
              id={input.inputName}
              onChange={(ev) =>
                onChangeHandler(ev, input.inputName.split(" ").join("_"))
              }
            />
          </div>
        );
      })}
      <Button bntType="primary">Submit</Button>
    </form>
  );
};

export default Form;
