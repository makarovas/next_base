// import Navbar from '@/app/(components) /Navbar';

import Navbar from '../(components)/Navbar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      Sibebar
      <main className='flex flex-col h-full py-7 px-9  bg-gray-200 md:pl-24 '>
        <Navbar />
        {props.children}
      </main>
    </div>
  );
};

export default DashboardLayout;
