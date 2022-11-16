import "../animal.css";

export default function AnimalDetails({ props }) {
  return (
    <div className="container">
      <div>
        <h1 style={{ color: "#31b0d5", fontWeight: "bold", fontSize: "20px" }}>
          Animal Details
        </h1>
      </div>
      <div className="hr-container">
        <div className="hr"></div>
      </div>
      <div style={{ margin: "10px" }}>
        <p>Animal : {props.name} </p>
      </div>
      <div style={{ margin: "10px" }}>
        <p>ShortCode : {props.shortcode} </p>
      </div>
    </div>
  );
}
