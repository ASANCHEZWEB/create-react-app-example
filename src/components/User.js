import React from "react";

function User(props) {

console.log(props)

  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}!
      </h2>
    </div>
  );
}

export default User;