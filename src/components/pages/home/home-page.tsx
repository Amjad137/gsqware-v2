'use client';

import SliderComponent from '@/components/carousel/slider';
import ProductsContainer from '@/components/shared/products-container';
import { Button } from '@/components/shared/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {};

const HomePage = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <SliderComponent />
      <div className='px-4 lg:px-12'>
        <div className='flex flex-col w-full items-center justify-center mt-[2%] gap-2'>
          <span className='text-primary-foreground text-g-xl font-semibold'>
            Discover the Innovative World...
          </span>
          <Button onClick={() => router.push('/')}>Shop Now</Button>
        </div>
        <div className='flex flex-row justify-between h-screen pt-[5%]'>
          <div className='flex flex-col gap-2 w-[40%] pt-[5%]'>
            <span className='text-primary-foreground text-g-xl font-semibold'>
              Explore Latest Tech Trends!
            </span>
            <span className='text-g-sm text-primary-foreground font-light'>
              Ignite your curiosity and explore the forefront of technological innovation. From
              futuristic drones to revolutionary smart appliances, dive into a world where
              imagination meets reality.
            </span>
            <div className='flex justify-center mt-4'>
              <Button onClick={() => router.push('/')}>Shop Now</Button>
            </div>
          </div>
          <div className='flex w-[50%] h-[60%]'>
            <Image
              src='/assets/image4.jpg'
              width={6000}
              height={4000}
              alt='Get Yours'
              className='w-auto h-auto rounded-xl shadow-md'
            />
          </div>
        </div>
        <div>
          <ProductsContainer title='Transform Your Digital Life!' />
        </div>
        <div className='flex flex-row gap-[5%] h-screen pt-[5%]'>
          <div className='flex w-[50%] h-[60%]'>
            <Image
              src='/assets/image1.jpg'
              width={6000}
              height={4000}
              alt='Get Yours'
              className='w-auto h-auto rounded-xl shadow-md'
            />
          </div>
          <div className='flex flex-col gap-2 w-[50%] pt-[5%]'>
            <span className='text-primary-foreground text-g-xl font-semibold'>
              Shop Online, Explore Further!
            </span>
            <span className='text-g-sm text-primary-foreground font-light'>
              Expand your horizons with every click. Our online platform offers more than just
              products; it&apos;s a gateway to inspiration, innovation, and the latest trends across
              various categories.
            </span>
            <div className='flex justify-start mt-4'>
              <Button onClick={() => router.push('/')}>Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
