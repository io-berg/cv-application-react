import { useState } from "react";
import { EducationDisplay } from "./EducationDisplay";
import { EducationForm } from "./EducationForm";

export const Education = (props) => {
  const [formHidden, setHidden] = useState("true");

  const hideForm = () => {
    setHidden(true);
  };

  return (
    <div>
      <h4>Education</h4>
      <EducationDisplay
        deleteHandler={props.deleteHandler}
        savedEducations={props.savedEducations}
      />
      <EducationForm
        hidden={formHidden}
        saveHandler={props.saveHandler}
        hideForm={hideForm}
      />
      <button
        className={`${formHidden ? "" : "hidden"}`}
        onClick={() => setHidden(false)}
      >
        Add Education
      </button>
    </div>
  );
};
