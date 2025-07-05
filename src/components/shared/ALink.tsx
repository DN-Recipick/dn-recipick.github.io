import React from 'react';

export interface LinkType extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  icon?: React.ReactNode;
}

const ALink = ({ text, icon, ...rest }: LinkType) => {
  return (
    <a {...rest}>
      <span>{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default ALink;
