import { useEffect } from "react";

const useOnClickOutside = (callback) => {
  useEffect(() => {
    const handleOnClick = () => {
      callback();
    };
    document.addEventListener("click", handleOnClick);
    return () => {
      document.removeEventListener("click", handleOnClick);
    };
  }, [callback]);
};

export default useOnClickOutside;
