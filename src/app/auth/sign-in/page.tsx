'use client';

import Image from 'next/image';
import { InferType, object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/ui/form';
import { Input } from '@/components/shared/ui/input';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';

const formSchema = object({
  email: string().email('Email must be a valid email.').required('Email is required.'),
  password: string()
    .min(4, 'Password should have at least 4 characters')
    .required('Password is required.'),
});

const Signin = () => {
  const form = useForm<InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log({ data: values });
  });
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col w-[450px] h-[450px] p-4 rounded-lg bg-white'>
        <span className='flex w-full justify-start text-primary-foreground text-g-lg font-medium'>
          Signin
        </span>
        <div className='flex w-full justify-center'>
          <Image
            src={'/assets/logo8.png'}
            alt='GSqware'
            width={605}
            height={283}
            className='w-[25%]'
          />
        </div>
        <Form {...form}>
          <form onSubmit={onSubmit} className='p-4'>
            <div className='flex flex-col w-full gap-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='select-none'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='name@email.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='select-none'>Password</FormLabel>
                    <FormControl>
                      <Input placeholder='*******' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                href={'/auth/forgot-password'}
                className='flex w-full justify-end text-g-xs text-secondary-foreground hover:underline underline-offset-2'
              >
                Forgot Password?
              </Link>
            </div>
            <div className='flex w-full justify-center'>
              <Button type='submit' className='gap-1 w-[40%] mt-5 rounded-xl '>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
