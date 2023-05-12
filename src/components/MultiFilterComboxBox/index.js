import React from "react";
import OutsideClickHandler from "../OutsideClickHandler";

export default function MultiFilterComboxBox() {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        console.log(
          "I am called whenever click happens outside of 'AnyOtherReactComponent' component"
        );
      }}
    >
      MultiFilterComboxBox
    </OutsideClickHandler>
  );
}
