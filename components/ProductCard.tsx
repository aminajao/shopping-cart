'use client';
import { Product } from 'interfaces';
import AddToCartBtn from './AddToCartBtn';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { formatCurrency } from '@/utils';

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  return (
    <>
      <div className="col-span-1 group">
        <div className="flex flex-col gap-1 w-full">
          <div className="aspect-square h-[230px] w-full relative overflow-hidden rounded-xl">
            <Image
              alt={props.product.name}
              src={props.product.imagePath}
              className="object-cover h-full w-full group-hover:scale-110 transition"
              fill
            />
          </div>
          <div className="font-semibold text-lg"></div>
          <div className="font-light text-neutral-500">
            {props.product.name}
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">
              {formatCurrency(props.product.price)}
            </div>
          </div>
          <AddToCartBtn product={props.product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
