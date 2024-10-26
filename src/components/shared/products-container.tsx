import React from 'react';
import ProductCard from './product-card';

type Props = {
  title: string;
};

const productImages = [
  '/assets/products/image1.jpg',
  '/assets/products/image2.jpg',
  '/assets/products/image3.jpg',
  '/assets/products/image4.jpg',
  '/assets/products/image5.jpg',
  '/assets/products/image6.jpg',
  '/assets/products/image2.jpg',
  '/assets/products/image4.jpg',
  '/assets/products/image5.jpg',
  '/assets/products/image6.jpg',
];

const generateId = () => {
  return '_' + Math.random().toString(36).slice(2, 14);
};

const products = [
  {
    id: generateId(),
    title:
      'TWS Pro6 Earphone Bluetooth Headphones with Mic 9D Stereo Pro 6 Earbuds for Xiaomi Samsung Android Wireless Bluetooth Headset',
    image: '/assets/products/image1.jpg',
    freeShipping: true,
    price: 5000.0,
    soldCount: 60,
    starRating: 5,
    variantImages: [
      '/assets/products/image1.jpg',
      '/assets/products/image1.jpg',
      '/assets/products/image1.jpg',
      '/assets/products/image1.jpg',
      '/assets/products/image1.jpg',
      '/assets/products/image1.jpg',
    ],
  },
  {
    id: generateId(),
    title:
      'Silicone Cases For Airpods 1/2 Luxury Wireless Earphone Protective Cover Anti-drop Housing For With Hook Headphone Accessories',
    image: '/assets/products/image2.jpg',
    freeShipping: true,
    price: 4500.0,
    soldCount: 10,
    starRating: 4.5,
  },
  {
    id: generateId(),
    title:
      'E7S TWS Wireless Headphones Bluetooth earphones Control Sport Headset Waterproof Microphones Music Earphones For All Smartphone  ',
    image: '/assets/products/image3.jpg',
    freeShipping: false,
    shippingCharge: 650.23,
    price: 2500.0,
    soldCount: 10,
    starRating: 2.5,
  },
  {
    id: generateId(),
    title:
      'Silicone Cases For Airpods 1/2 Luxury Wireless Earphone Protective Cover Anti-drop Housing For With Hook Headphone Accessories',
    image: '/assets/products/image4.jpg',
    freeShipping: false,
    shippingCharge: 650.23,
    price: 5080.0,
    soldCount: 1100,
    starRating: 3.5,
  },
  {
    id: generateId(),
    title:
      'TWS Pro6 Earphone Bluetooth Headphones with Mic 9D Stereo Pro 6 Earbuds for Xiaomi Samsung Android Wireless Bluetooth Headset ',
    image: '/assets/products/image5.jpg',
    freeShipping: false,
    shippingCharge: 650.23,
    price: 6500.0,
    soldCount: 1200,
    starRating: 4.5,
  },
  {
    id: generateId(),
    title:
      'E7S TWS Wireless Headphones Bluetooth earphones Control Sport Headset Waterproof Microphones Music Earphones For All Smartphone  ',
    image: '/assets/products/image6.jpg',
    freeShipping: true,
    shippingCharge: 650.23,
    price: 5075.0,
    soldCount: 1040,
    starRating: 1.5,
  },
  {
    id: generateId(),
    title:
      'Silicone Cases For Airpods 1/2 Luxury Wireless Earphone Protective Cover Anti-drop Housing For With Hook Headphone Accessories',
    image: '/assets/products/image5.jpg',
    freeShipping: true,
    shippingCharge: 650.23,
    price: 5040.0,
    soldCount: 1005,
    starRating: 5,
  },
  {
    id: generateId(),
    title:
      'TWS Pro6 Earphone Bluetooth Headphones with Mic 9D Stereo Pro 6 Earbuds for Xiaomi Samsung Android Wireless Bluetooth Headset ',
    image: '/assets/products/image1.jpg',
    freeShipping: false,
    shippingCharge: 650.23,
    price: 5120.0,
    soldCount: 1000,
    starRating: 3.5,
  },
  {
    id: generateId(),
    title:
      'Silicone Cases For Airpods 1/2 Luxury Wireless Earphone Protective Cover Anti-drop Housing For With Hook Headphone Accessories',
    image: '/assets/products/image4.jpg',
    freeShipping: true,
    shippingCharge: 650.23,
    price: 1200.0,
    soldCount: 200,
    starRating: 4.5,
  },
  {
    id: generateId(),
    title:
      'E7S TWS Wireless Headphones Bluetooth earphones Control Sport Headset Waterproof Microphones Music Earphones For All Smartphone  ',
    image: '/assets/products/image6.jpg',
    freeShipping: true,
    shippingCharge: 650.23,
    price: 3260.0,
    soldCount: 100,
    starRating: 3.5,
  },
];

const productIds = Array.from({ length: 10 }, (_, index) => index + 1);

const ProductsContainer = ({ title }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-primary-foreground text-g-xl font-semibold'>{title}</span>
      <div className='flex flex-row items-center justify-center gap-4 flex-wrap'>
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
