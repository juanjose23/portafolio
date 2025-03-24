import { useRef, useState,useEffect } from "react";

// Hook para manejar la visibilidad de un elemento
export const useVisibility = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    elementRef.current = document.getElementById(elementId);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementId]);

  return { isVisible, elementRef };
};