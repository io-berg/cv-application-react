import { useState } from "react";

export const EducationForm = (props) => {
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [degree, setDegree] = useState("");
  const [details, setDetails] = useState("");

  return (
    <form
      onSubmit={props.saveHandler}
      className={`${props.hidden ? "hidden" : ""}`}
    >
      <input
        type="text"
        name="school"
        onChange={(e) => setSchool(e.target.value)}
        value={school}
        placeholder="University / School"
      />
      <input
        type="text"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        placeholder="City"
      />
      From:
      <input
        type="date"
        name="fromDate"
        onChange={(e) => setFromDate(e.target.value)}
        value={fromDate}
      />
      To:
      <input
        type="date"
        name="toDate"
        onChange={(e) => setToDate(e.target.value)}
        value={toDate}
      />
      <input
        type="text"
        name="degree"
        onChange={(e) => setDegree(e.target.value)}
        value={degree}
        placeholder="Degree"
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
