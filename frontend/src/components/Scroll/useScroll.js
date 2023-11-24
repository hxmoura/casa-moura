import { useRef, useState } from 'react';

export default function useScroll() {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(null);

  const handleMouseMove = (event) =>
    (scrollRef.current.scrollLeft -= event.movementX);

  const handleMouseDown = (event) => {
    event.preventDefault();
    scrollRef.current.style.scrollBehavior = 'auto';
    document.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseLeft = () => {
    scroll.current.style.scrollBehavior = 'smooth';
    scroll.current.scrollLeft -= 200;
  };

  const handleMouseRight = () => {
    scroll.current.style.scrollBehavior = 'smooth';
    scroll.current.scrollLeft += 200;
  };

  const getScrollReference = (ref) => setScroll(ref);

  return {
    handleMouseDown,
    handleMouseUp,
    handleMouseLeft,
    handleMouseRight,
    scrollRef,
    getScrollReference,
  };
}
