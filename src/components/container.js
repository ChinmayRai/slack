import React from "react";

function Container({ className, ...rest }) {
  return (
    <div
      className={className}
      style={{ border: "1px solid #35373b" }}
      {...rest}
    ></div>
  );
}

export default Container;
