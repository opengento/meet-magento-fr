import React from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
