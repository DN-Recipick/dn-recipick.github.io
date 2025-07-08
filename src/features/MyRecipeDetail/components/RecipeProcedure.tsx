import EmptyState from '@/components/feedback/empty/EmptyState';
import SectionLayout from '@/components/shared/SectionLayout';

const RecipeProcedure = ({ procedure }: { procedure: string[] }) => {
  return (
    <SectionLayout title="조리 순서">
      {procedure.length === 0 && <EmptyState text="조리 순서가 없습니다" />}
      <ol className="space-y-4">
        {procedure.map((step, index) => (
          <li
            key={step}
            className="relative bg-[var(--color-card-bg)] px-5 py-4 rounded-xl border-l-4 border-y border-y-[var(--color-border)] border-r border-r-[var(--color-border)] shadow-[var(--shadow)]"
          >
            <div className="mb-1 text-sm text-[var(--color-sub-text)]">STEP {index + 1}</div>
            <p className="leading-relaxed break-words">{step}</p>
          </li>
        ))}
      </ol>
    </SectionLayout>
  );
};

export default RecipeProcedure;
