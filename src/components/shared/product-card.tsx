import Image from 'next/image';
import StarRating from './star-rating';
import { MdAddShoppingCart, MdLocalShipping } from 'react-icons/md';
import { Divide } from 'lucide-react';
import Link from 'next/link';

type Props = {
  product: {
    id: string;
    title: string;
    image: string;
    freeShipping: boolean;
    shippingCharge?: number;
    price: number;
    soldCount: number;
    starRating: number;
  };
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className='flex flex-col items-center rounded-lg justify-between w-56 h-[360px] bg-white shadow-lg p-1 hover:cursor-pointer hover:scale-105 duration-500'
    >
      <div className='flex h-[70%] flex-col w-full'>
        <Image
          src={product.image}
          alt='product'
          width={720}
          height={480}
          className='w-full h-full content-center rounded-md'
        />
        <span className='w-full text-g-xs font-light text-primary-foreground truncate'>
          {product.title}
        </span>
      </div>
      <div className='flex flex-col w-full gap-1 px-1'>
        <div className='flex flex-row w-full gap-2'>
          <StarRating rating={product.starRating} />
          <span className='text-g-xs text-gray-400 font-light'>{product.soldCount}+ Sold</span>
        </div>
        {product.freeShipping ? (
          <div className='flex flex-row items-center w-full gap-2 text-secondary-foreground'>
            <MdLocalShipping size={18} />
            <span className='text-g-2xs font-medium'>Free Shipping</span>
          </div>
        ) : (
          <div className='flex flex-row items-center w-full gap-2 text-secondary-foreground'>
            <MdLocalShipping size={22} />
            <span className='text-g-xs font-medium'>
              {product.shippingCharge}
              <span className='text-g-2xs font-semibold'> LKR</span>
            </span>
          </div>
        )}

        <div className='flex flex-row mt-2 w-full justify-between text-primary-foreground font-semibold'>
          <div className='flex items-center justify-center p-1 rounded-md hover:bg-gray-200'>
            <MdAddShoppingCart />
          </div>
          <span className='text-g-xs'>
            {product.price} <span className='text-g-2xs'>LKR</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
