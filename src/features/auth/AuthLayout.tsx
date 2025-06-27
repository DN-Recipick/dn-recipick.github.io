import React from 'react';

const AuthLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

export default AuthLayout;
