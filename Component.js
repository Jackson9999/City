import React from "react";
import "./cities.css";

const Component = (props) => {
  return (
    <div className="compon">
      <img src={props.component.img} />
      <h2>{props.component.title}</h2>
      <p>{props.component.text}</p>
      <button onClick={props.onDelete}>Удалить</button>
    </div>
  );
};

export default Component;
