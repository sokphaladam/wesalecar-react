import React from "react";

export function Content(props: { children?: any }) {
  return (
    <div className="full-row">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}
