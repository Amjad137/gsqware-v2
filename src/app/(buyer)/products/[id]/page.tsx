'use client';
import ProductCard from '@/components/shared/product-card';
import ProductsContainer from '@/components/shared/products-container';
import StarRating from '@/components/shared/star-rating';
import { Button } from '@/components/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/ui/form';
import { Input } from '@/components/shared/ui/input';
import { Progress } from '@/components/shared/ui/progress';
import { yupResolver } from '@hookform/resolvers/yup';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { InferType, number, object, string } from 'yup';

const formSchema = object({
  address: string(),
  quantity: number(),
});
const Products = () => {
  const [count, setCount] = useState(0);
  const form = useForm<InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      address: '',
      quantity: 0,
    },
  });
  const product = {
    id: '_w2mjec4v5of',
    title:
      'TWS Pro6 Earphone Bluetooth Headphones with Mic 9D Stereo Pro 6 Earbuds for Xiaomi Samsung Android Wireless Bluetooth Headset',
    image: '/assets/products/image3.jpg',
    freeShipping: true,
    price: 5000.0,
    soldCount: 60,
    starRating: 5,
    mainImages: [
      '/assets/products/image1.jpg',
      '/assets/products/image2.jpg',
      '/assets/products/image3.jpg',
      '/assets/products/image4.jpg',
      '/assets/products/image5.jpg',
      '/assets/products/image6.jpg',
    ],
    variantImages: [
      '/assets/products/image1.jpg',
      '/assets/products/image2.jpg',
      '/assets/products/image3.jpg',
      '/assets/products/image4.jpg',
      '/assets/products/image5.jpg',
      '/assets/products/image6.jpg',
    ],
    reviews: ['Awesome', 'Excellent', 'Wonderful'],
  };

  const onSubmit = form.handleSubmit((values) => {
    console.log({ data: values });
  });

  const incrementNumber = (value: number) => {
    value = value + 1;
    setCount(value);
    form.setValue('quantity', count + 1);
  };

  const decrementNumber = (value: number) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
    form.setValue('quantity', count - 1);
  };

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className='flex px-4 lg:px-12 gap-4 justify-between my-[1%]'>
          <div className='flex flow-row gap-6 border-b border-gray-300 pb-4'>
            <div className='flex flex-col gap-2 justify-center'>
              <div className='w-[429px] h-[429px] bg-background rounded-2xl overflow-hidden relative'>
                <Image src={product.image} alt='Product Image' layout='fill' objectFit='cover' />
              </div>
              <div className='flex flex-row w-full gap-2 justify-center'>
                {product.mainImages.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='w-[56px] h-[56px] bg-background rounded-xl overflow-hidden relative'
                    >
                      <Image src={item} alt='Variant Image' layout='fill' objectFit='cover' />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col w-[500px] gap-4 pt-4'>
              <span className='text-g-xl font-semibold text-primary-foreground'>
                {product.price} <span className='text-g-lg'>LKR</span>
              </span>
              <span className='text-g-md font-semibold text-primary-foreground'>
                {product.title}
              </span>
              <div className='flex flex-row w-[70%] items-center justify-between gap-2'>
                <div className='flex flex-row gap-3 items-center'>
                  <StarRating rating={product.starRating} />
                  <span className='text-g-sm text-primary-foreground font-semibold'>
                    {product.starRating}
                  </span>
                </div>
                <span className='text-g-sm text-primary-foreground font-light'>
                  {product.reviews.length} Reviews
                </span>
                <span className='text-g-sm text-primary-foreground font-light'>
                  {product.soldCount}+ Sold
                </span>
              </div>

              <hr className='border-[0.5] border-gray-300 w-full my-2' />

              <div className='flex flex-row w-full gap-1 justify-center'>
                {product.variantImages.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='w-[90px] h-[90px] bg-background rounded-xl overflow-hidden relative'
                    >
                      <Image src={item} alt='Variant Image' layout='fill' objectFit='cover' />
                    </div>
                  );
                })}
              </div>

              <hr className='border-[0.5] border-gray-300 w-full my-2' />
            </div>
          </div>

          <div className='flex flex-col justify-between w-[305px] h-[360px] bg-white p-2 rounded-lg'>
            <div className='flex flex-row items-center w-full justify-between'>
              <span className='text-g-md font-semibold text-primary-foreground'>Ship to</span>
              <div className='flex flex-row gap-2 relative'>
                <MdOutlineLocationOn className='text-primary-foreground absolute top-1.5 left-[-20px]' />
                <span className='text-g-sm font-extralight text-primary-foreground'>Sri Lanka</span>
              </div>
            </div>
            <hr className='border-[0.5] border-gray-300 w-full my-2' />
            <div className='text-g-sm text-primary-foreground font-light'>
              16, Henrich Colonie, Hinsburgh Jaxis, Florida, USA, 30100
            </div>
            <hr className='border-[0.5] border-gray-300 w-full my-2' />
            <div className='flex flex-row items-center w-full justify-between'>
              <span className='text-g-md font-semibold text-primary-foreground'>Quantity</span>
              <div className='flex flex-row gap-2 items-center'>
                <FormField
                  control={form.control}
                  name='quantity'
                  render={({ field }) => (
                    <div className='w-24 grid grid-cols-3 overflow-hidden'>
                      <Button
                        type='button'
                        onClick={() => decrementNumber(count)}
                        variant='ghost'
                        className='flex w-7 h-7 col-span-1 rounded-full p-0 m-0 items-center justify-center border border-gray-300 bg-gray-200'
                      >
                        <span>-</span>
                      </Button>
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={true}
                            {...field}
                            className='p-0 text-center w-7 h-7 border-none'
                            value={count}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      <Button
                        type='button'
                        onClick={() => incrementNumber(count)}
                        variant='ghost'
                        className='flex w-7 h-7 col-span-1 rounded-full p-0 m-0 items-center justify-center border border-gray-300 bg-gray-200'
                      >
                        <span>+</span>
                      </Button>
                    </div>
                  )}
                />
              </div>
            </div>
            <span className='flex justify-end text-primary-foreground font-light text-g-2xs'>
              215 pieces available
            </span>
            <div className='flex flex-col gap-2 mt-[4%]'>
              <Button className='rounded-3xl'>Buy Now</Button>
              <Button variant={'secondary'} className='rounded-3xl'>
                Add to Cart
              </Button>
            </div>
            <div className='flex flex-row w-full justify-between mt-[2%]'>
              <Button size={'sm'} variant={'outline'} className='px-4 rounded-2xl'>
                Share
              </Button>
              <Button size={'sm'} variant={'outline'} className='px-4 rounded-2xl'>
                <Heart />
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-4 lg:px-12 w-[60%] gap-4'>
          <div className='flex flex-col gap-1'>
            <span className='text-g-xl text-primary-foreground font-semibold'>Description</span>
            <div className='text-g-xs font-light text-primary-foreground ml-4'>
              Bluetooth 5.3 Technology :Experience seamless connectivity with Bluetooth 5.3
              technology, ensuring stable transmission and high-quality sound for an immersive audio
              experience. Bluetooth 5.3 Technology :Experience seamless connectivity with Bluetooth
              5.3 technology, ensuring stable transmission and high-quality sound for an immersive
              audio experience.
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-g-xl text-primary-foreground font-semibold'>Specifications</span>
            <div className='text-g-xs font-light text-primary-foreground ml-4'>
              Bluetooth 5.3 Technology :Experience seamless connectivity with Bluetooth 5.3
              technology, ensuring stable transmission and high-quality sound for an immersive audio
              experience. Bluetooth 5.3 Technology :Experience seamless connectivity with Bluetooth
              5.3 technology, ensuring stable transmission and high-quality sound for an immersive
              audio experience.
            </div>
          </div>
          <div className='flex flex-col gap-1 w-full my-4'>
            <span className='text-g-xl text-primary-foreground font-semibold'>
              Customer Reviews (1)
            </span>
            <div className='flex flex-row ml-4 w-full justify-between'>
              <div className='flex flex-col gap-1'>
                <div className='text-g-xl text-primary-foreground font-semibold'>4.5</div>
                <StarRating rating={4.5} />
                <div className='text-g-xs text-primary-foreground font-light'>
                  All from verified purchase
                </div>
              </div>

              <div className='flex flex-col w-[60%]'>
                <div className='flex flex-row items-center gap-2'>
                  <span className='text-g-xs text-primary-foreground font-light'>5 Stars</span>{' '}
                  <Progress value={100} className='w-[80%] h-1' />
                </div>
                <div className='flex flex-row items-center gap-2 '>
                  <span className='text-g-xs text-primary-foreground font-light'>5 Stars</span>{' '}
                  <Progress value={80} className='w-[80%] h-1' />
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <span className='text-g-xs text-primary-foreground font-light'>5 Stars</span>{' '}
                  <Progress value={60} className='w-[80%] h-1' />
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <span className='text-g-xs text-primary-foreground font-light'>5 Stars</span>{' '}
                  <Progress value={40} className='w-[80%] h-1' />
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <span className='text-g-xs text-primary-foreground font-light'>5 Stars</span>{' '}
                  <Progress value={20} className='w-[80%] h-1' />
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[80] rounded-lg bg-white border border-gray-300 p-4 gap-2'>
              <StarRating rating={3.5} />
              <span className='text-g-xs text-primary-foreground font-light'>Color: Black</span>
              <div className='text-g-xs text-primary-foreground font-semibold'>
                I had bought it before, but I bought one more. It&apos;s a great handset, it&apos;s
                great audio quality for the value
              </div>
              <div className='flex flex-row gap-2'>
                {product.mainImages.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='w-[56px] h-[56px] bg-background rounded-xl overflow-hidden relative'
                    >
                      <Image src={item} alt='Variant Image' layout='fill' objectFit='cover' />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-col w-[80] rounded-lg bg-white border border-gray-300 p-4 gap-2'>
              <StarRating rating={3.5} />
              <span className='text-g-xs text-primary-foreground font-light'>Color: Black</span>
              <div className='text-g-xs text-primary-foreground font-semibold'>
                I had bought it before, but I bought one more. It&apos;s a great handset, it&apos;s
                great audio quality for the value
              </div>
              <div className='flex flex-row gap-2'>
                {product.mainImages.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='w-[56px] h-[56px] bg-background rounded-xl overflow-hidden relative'
                    >
                      <Image src={item} alt='Variant Image' layout='fill' objectFit='cover' />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='flex px-4 lg:px-12'>
          <ProductsContainer title='Love More!' />
        </div>
      </form>
    </Form>
  );
};

export default Products;
