import React from "react";
import { Button } from "carbon-components-react";

export default function AddNomination(props) {
  return (
    <div>
      <Button
        kind="primary"
        disabled={props.isNominated || props.numberOfNominations >= 5}
      >
        Nominate
      </Button>
    </div>
  );
}
