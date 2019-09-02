import React from "react";

function welcome(props) {
  return (
    <div>
      {props.isTeacher ? (
        <h1>
          Teacher:{props.name},count:{props.count}
        </h1>
      ) : (
        <h1>
          Student:{props.name},count:{props.count}
        </h1>
      )}
    </div>
  );
}
export default welcome;
