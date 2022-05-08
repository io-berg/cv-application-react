export const PersonalInfo = (props) => {
  return (
    <div className={`container flex column ${props.hidden ? "" : "hidden"}`}>
      <h5>First name: {props.info.firstName}</h5>
      <h5>Last name: {props.info.lastName}</h5>
      <h5>Adress: {props.info.adress}</h5>
      <h5>Phone number: {props.info.phonenr}</h5>
      <h5>Email: {props.info.email}</h5>

      <button onClick={props.editHandler}>Edit</button>
    </div>
  );
};
