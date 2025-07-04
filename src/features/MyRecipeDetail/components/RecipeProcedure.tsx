import SectionLayout from '@/components/shared/SectionLayout';

const RecipeProcedure = ({ procedure }: { procedure: string[] }) => {
  return (
    <SectionLayout title="조리 순서">
      <ol className="space-y-5">
        {procedure.map((step, index) => (
          <li
            key={step}
            className="relative bg-white dark:bg-gray-800 px-5 py-4 rounded-xl border-l-4 shadow-[var(--shadow)]"
          >
            <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">STEP {index + 1}</div>
            <p className="leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
    </SectionLayout>
  );
};

export default RecipeProcedure;
