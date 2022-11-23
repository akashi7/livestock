import "./index.css";

export default function AnimalCard({ props }) {
  return (
    <div className="animal-header">
      {props.name && (
        <div className="round"> {props.name && props.name.slice(0, 1)} </div>
      )}
      <h3 className="animal-t">{props.name}</h3>
      <h3 className="animalId"> {props.earring_num} </h3>
    </div>
  );
}
