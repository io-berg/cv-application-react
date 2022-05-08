import React, { useState } from "react";

export const PersonalInfoForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [phonenr, setPhonenr] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      className={`flex column ${props.hidden ? "hidden" : ""}`}
      onSubmit={props.saveHandler}
    >
      <input
        type="text"
        required
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        placeholder="First name"
      ></input>
      <input
        type="text"
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        placeholder="Last name"
      ></input>
      <input
        type="text"
        name="adress"
        onChange={(e) => setAdress(e.target.value)}
        value={adress}
        placeholder="Adress"
      ></input>
      <input
        type="text"
        name="phonenr"
        onChange={(e) => setPhonenr(e.target.value)}
        value={phonenr}
        placeholder="Phone number"
      ></input>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      ></input>

      <button>Save</button>
    </form>
  );
};
