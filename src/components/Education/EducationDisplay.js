export const EducationDisplay = (props) => {
  const items = props.savedEducations;

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>School/University: {item.school}</h2>
            <h5>City: {item.city}</h5>
            <h5>From: {item.fromDate}</h5>
            <h5>To: {item.toDate}</h5>
            <h5>degree: {item.degree}</h5>
            <p>Details: {item.details}</p>
            <button value={item.id} onClick={props.deleteHandler}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
