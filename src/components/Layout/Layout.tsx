import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {/* <header>Header can be here</header> */}
      <main className="flex flex-col h-screen justify-center items-center text-center bg-gray-200">
        <Outlet />
      </main>
      {/* <footer>Footer can be here</footer> */}
    </>
  );
};
