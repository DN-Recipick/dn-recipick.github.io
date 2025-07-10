import { type ReactNode } from 'react';

const SectionLayout = ({ children, title }: { children: ReactNode; title?: string }) => {
  return (
    <section className="pt-6">
      {title && <h3 className="mb-5">{title}</h3>}
      {children}
    </section>
  );
};

export default SectionLayout;
