import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (event, sectionId) => {
    event?.preventDefault();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState({}, "", `/#${sectionId}`);
  };
}

export function useHomeHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.hash]);
}
