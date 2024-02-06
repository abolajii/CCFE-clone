import { useEffect, useState } from "react";

const useMediaQuery = ({ minWidth, maxWidth }) => {
  const query = [];

  if (minWidth) {
    query.push(`(min-width: ${minWidth}px)`);
  }

  if (maxWidth) {
    query.push(`(max-width: ${maxWidth}px)`);
  }

  const mediaQuery = query.join(" and ");

  const [matches, setMatches] = useState(
    () => window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addListener(updateMatches);

    // Initial cleanup
    return () => {
      mediaQueryList.removeListener(updateMatches);
    };
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
