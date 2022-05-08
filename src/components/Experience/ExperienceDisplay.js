export const ExperienceDisplay = (props) => {
  const items = props.savedExperience;

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} data-key={item.id}>
            <h2>Role: {item.role}</h2>
            <h5>Company: {item.company}</h5>
            <h5>City: {item.city}</h5>
            <h5>Start: {item.dateStart}</h5>
            <h5>End: {item.dateEnd}</h5>
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
