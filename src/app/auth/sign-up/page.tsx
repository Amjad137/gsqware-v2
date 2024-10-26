'use client';

import Image from 'next/image';
import { InferType, object, ref, string } from 'yup';
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

const passwordStrength = string()
  .test('password-length', 'Password must contain at least 4 characters,', (value) => {
    if (!value) {
      return false;
    }
    return value.length >= 4;
  })
  .test('password-uppercase', 'Password must contain at least 1 uppercase character', (value) => {
    if (!value) {
      return false;
    }
    return /[A-Z]/.test(value);
  })
  .test('password-lowercase', 'Password must contain at least 1 lowercase character', (value) => {
    if (!value) {
      return false;
    }
    return /[a-z]/.test(value);
  })
  .test('password-special', 'Password must contain at least 1 special character', (value) => {
    if (!value) {
      return false;
    }
    return /[!@#$%^&*(),.?":{}|<>]/.test(value);
  });

const formSchema = object({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  email: string().email('Email must be a valid email.').required('Email is required.'),
  password: passwordStrength.required('Password is required.'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match.')
    .required('Confirm password is required.'),
});

const Signup = () => {
  const form = useForm<InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log({ data: values });
  });
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col w-[450px] h-[644px] p-2 rounded-lg bg-white  overflow-y-auto'>
        <span className='flex w-full justify-start text-primary-foreground text-g-lg font-medium'>
          Signup
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
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='select-none'>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Alfred' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='select-none'>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Huddleston' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='select-none'>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder='*******' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex w-full justify-center'>
              <Button type='submit' className='gap-1 w-[40%] mt-5 rounded-xl select-none '>
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
