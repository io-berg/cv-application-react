import { useState } from "react";

export const ExperienceForm = (props) => {
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [role, setRole] = useState("");
  const [details, setDetails] = useState("");

  return (
    <form
      onSubmit={props.saveHandler}
      className={`${props.hidden ? "hidden" : ""}`}
    >
      <input
        type="text"
        name="company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        placeholder="Company name"
      />
      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        placeholder="City"
      />
      <input
        type="text"
        name="dateStart"
        onChange={(e) => setDateStart(e.target.value)}
        value={dateStart}
        placeholder="Start Date"
      />
      <input
        type="text"
        name="dateEnd"
        onChange={(e) => setDateEnd(e.target.value)}
        value={dateEnd}
        placeholder="End Date"
      />
      <input
        type="text"
        name="role"
        onChange={(e) => setRole(e.target.value)}
        value={role}
        placeholder="Role"
      />
      <textarea
        name="details"
        onChange={(e) => setDetails(e.target.value)}
        value={details}
        placeholder="Details"
      />
      <button onClick={props.hideForm}>Save</button>
    </form>
  );
};
