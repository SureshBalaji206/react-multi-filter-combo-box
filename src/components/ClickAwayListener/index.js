import React from "react";

export default function ClickAwayListener({ children, clickAwayHandler }) {
  const wrapperRef = React.useRef(null);

  const mouseDownHandler = (event) => {
    if (
      wrapperRef &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      clickAwayHandler();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", mouseDownHandler);

    () => {
      document.removeEventListenerEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
