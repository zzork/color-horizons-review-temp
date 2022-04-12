import { useEffect } from "react";

const useOnClickOutside = (callback) => {
  useEffect(() => {
    const handleOnClick = (event) => {
      callback(event);
    };
    document.addEventListener("click", handleOnClick);
    return () => {
      document.removeEventListener("click", handleOnClick);
    };
  }, [callback]);
};

export default useOnClickOutside;
