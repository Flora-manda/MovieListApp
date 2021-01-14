import React from "react";
import { TrophyFilled32 } from "@carbon/icons-react";

export default function Heading(props) {
  return (
    <div className="header-container">
      <h1 className="header-content">
        <TrophyFilled32 />
        {props.heading}
        <TrophyFilled32 />
      </h1>
    </div>
  );
}
