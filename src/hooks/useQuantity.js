import { useEffect, useState } from 'react';

export const useQuantity = (item = 1) => {
  const [quantity, setQuantity] = useState(item);

  useEffect(() => {
    setQuantity(item);
  }, [item]);

  const sumQuantity = () => {
    if (quantity > 14) return;
    setQuantity((prev) => prev + 1);
  };

  const restQuantity = () => {
    if (quantity < 2) return;
    setQuantity((prev) => prev - 1);
  };

  return {
    quantity,
    sumQuantity,
    restQuantity,
  };
};
