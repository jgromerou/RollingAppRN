import { useState } from "react";


export const useQuantity = (item = 0) => {

    const [quantity, setQuantity] = useState(item);


    const sumQuantity = () => {
        setQuantity((prev) => prev + 1);
    }


    const restQuantity = () => {
        if(quantity <= 0) return;
        setQuantity((prev) => prev - 1);
    }

  return {
    quantity,
    sumQuantity,
    restQuantity
  }
}
