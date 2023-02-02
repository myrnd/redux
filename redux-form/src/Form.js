import React from "react";
import { Field, reduxForm } from "redux-form";

let EmployeeForm = (props) => {
  //   console.log(props);
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name : </label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: "Employee" })(EmployeeForm);
