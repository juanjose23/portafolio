import { useEffect, useRef, useState } from "react";

export const useCarousel = (totalItems, itemsPerView) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const getItemsPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) return itemsPerView.desktop;
    if (width >= 768) return itemsPerView.tablet;
    return itemsPerView.mobile;
  };

  useEffect(() => {
    const handleResize = () => setActiveIndex(0); // Reiniciar índice en resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const itemsPerViewCount = getItemsPerView();
    const maxIndex = Math.max(0, totalItems - itemsPerViewCount); 
  
    setActiveIndex((prev) => (prev < maxIndex ? prev + itemsPerViewCount : prev));
  };
  
  const prevSlide = () => {
    const itemsPerViewCount = getItemsPerView();
    setActiveIndex((prev) => Math.max(0, prev - itemsPerViewCount));
  };
  
  
  
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return { getItemsPerView, activeIndex, setActiveIndex, nextSlide, prevSlide, handleTouchStart, handleTouchMove, handleTouchEnd, carouselRef };
};
