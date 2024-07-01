import React from "react";
import { Button } from './Button';
import { TrashIcon } from '@heroicons/react/24/solid';
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Button
        small
        variant="danger"
        className="w-10 h-8 border-2 flex justify-center items-center"
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? (
          <TrashIcon className="w-3 flex justify-center items-center" />
        ) : (
          '-'
        )}
      </Button>
      <p>{props.qty}</p>
      <Button
        small
        className="w-10 h-8"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
