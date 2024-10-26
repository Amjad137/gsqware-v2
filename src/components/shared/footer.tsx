import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col justify-start px-4 lg:px-12 gap-8 mt-8'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='flex flex-col col-span-1 gap-6'>
          <Image
            src={'/assets/logo8.png'}
            alt='GSqware'
            width={605}
            height={283}
            className='w-[50%]'
          />
          <div className='text-g-md w-full text-primary-foreground font-medium'>
            Redefining the Standard of Excellence in Shopping.
          </div>
        </div>
        <div className='flex flex-col col-span-1 gap-4'>
          <div className='text-g-md w-full text-primary-foreground font-semibold'>Quick Links</div>
          <div className='flex flex-col gap-4'>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              About
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Offers & Discounts
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Get Coupons
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Contact Us
            </Link>
          </div>
        </div>
        <div className='flex flex-col col-span-1 gap-4'>
          <div className='text-g-md w-full text-primary-foreground font-semibold'>New Products</div>
          <div className='flex flex-col gap-4'>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Mobiles
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Laptops
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Gadgets
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Others
            </Link>
          </div>
        </div>
        <div className='flex flex-col col-span-1 gap-4'>
          <div className='text-g-md w-full text-primary-foreground font-semibold'>Support</div>
          <div className='flex flex-col gap-4'>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Frequently Asked questions
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Terms & Conditions
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Privacy & Policy
            </Link>
            <Link href={'/'} className='text-g-xs text-primary-foreground font-extralight'>
              Report Payment Issue
            </Link>
          </div>
        </div>
      </div>
      <div className='text-g-xs font-light text-gray-500'>Copyright @ All Rights Reserved</div>
    </div>
  );
};

export default Footer;
