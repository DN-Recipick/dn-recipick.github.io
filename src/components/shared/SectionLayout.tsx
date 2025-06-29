import { type ReactNode } from 'react';

const SectionLayout = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <section className="py-10">
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SectionLayout;
