import { useState } from "react";
import { ExperienceForm } from "./ExperienceForm";
import { ExperienceDisplay } from "./ExperienceDisplay";

export const Experience = (props) => {
  const [formHidden, setHidden] = useState("true");

  const hideForm = () => {
    setHidden(true);
  };

  return (
    <div>
      <h4>Experience</h4>
      <ExperienceDisplay
        deleteHandler={props.deleteHandler}
        savedExperience={props.savedExperiences}
      />
      <ExperienceForm
        hidden={formHidden}
        saveHandler={props.saveHandler}
        hideForm={hideForm}
      />
      <button
        className={`${formHidden ? "" : "hidden"}`}
        onClick={() => setHidden(false)}
      >
        Add Experience
      </button>
    </div>
  );
};
