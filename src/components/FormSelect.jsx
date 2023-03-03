import { useContext } from "react";
import { FormContext } from "./Form";

function FormSelect(props) {
  const { label, name } = props;
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  const options = [
    { value: "", text: "--Choose a category--" },
    { value: "sports", text: "Sports" },
    { value: "finance", text: "Finances" },
    { value: "movies", text: "Movies" },
  ];

  return (
    <div className="FormInput">
      <label>{label}</label>
      <select name={name} value={form[name]} onChange={handleFormChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
