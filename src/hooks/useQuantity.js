import { useState } from "react";

export const useQuantity = () => {
  const [quantity, setQuantty] = useState(0)

  const addOne = () => {
    setQuantty((prev) => prev + 1)
  }

  const removeOne = () => {
    if (quantity <= 0) return; 
    setQuantty((prev) => prev - 1)
  }

  return {
    quantity,
    addOne,
    removeOne
  }
}


