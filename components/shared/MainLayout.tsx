import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-col gap-8 ">{children}</section>;
};

export default MainLayout;
