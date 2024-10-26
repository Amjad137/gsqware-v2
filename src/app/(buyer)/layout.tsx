import Footer from '@/components/shared/footer';
import NavBar from '@/components/shared/nav-bar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BuyerLayout = (props: Props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default BuyerLayout;
