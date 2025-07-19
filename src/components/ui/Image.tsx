import clsx from 'clsx';
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapClassName?: string;
  imgClassName?: string;
}

const Image = ({ wrapClassName, imgClassName, className, ...rest }: ImageProps) => {
  return (
    <div className={clsx('relative overflow-hidden', wrapClassName)}>
      <img
        className={clsx('w-full h-full object-cover', imgClassName, className)}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};

export default Image;
