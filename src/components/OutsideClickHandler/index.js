import React from "react";

export default function OutsideClickHandler({ children, onOutsideClick }) {
  const wrapperRef = React.useRef(null);

  const handleClickOutside = (event) => {
    console.log(wrapperRef, event);

    if (
      wrapperRef &&
      wrapperRef.current &&
      wrapperRef.current.contains(event.target)
    ) {
      onOutsideClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    () => {
      document.removeEventListenerEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
