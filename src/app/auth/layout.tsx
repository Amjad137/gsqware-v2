import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default AuthLayout;
