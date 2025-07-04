import Button from '@/components/shared/Button';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const PageLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center gap-3 mb-8">
        <Button
          className="btn-icon"
          icon={<IoMdArrowBack className="text-2xl" />}
          onClick={() => navigate('/')}
        />
        <h2 className="mb-0 line-clamp-1">{title}</h2>
      </div>
      {children}
    </>
  );
};

export default PageLayout;
