import { type ReactNode } from 'react';

const SectionLayout = ({ children, title }: { children: ReactNode; title?: string }) => {
  return (
    <section className="py-5">
      {title && <h3 className="pb-2">{title}</h3>}
      {children}
    </section>
  );
};

export default SectionLayout;
