import { useRef, useState } from 'react';

const useDrag = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current!.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.DragEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  return { scrollRef, onDragStart, onDragEnd, onDragMove };
};

export default useDrag;
