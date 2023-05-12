import React from "react";
import ClickAwayListener from "../ClickAwayListener";

export default function MultiFilterComboxBox() {
  return (
    <ClickAwayListener
      clickAwayHandler={() => {
        console.log(
          "I am called whenever click happens outside of 'AnyOtherReactComponent' component"
        );
      }}
    >
      MultiFilterComboxBox
    </ClickAwayListener>
  );
}
