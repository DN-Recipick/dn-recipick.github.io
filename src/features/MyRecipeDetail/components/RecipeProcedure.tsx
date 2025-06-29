import SectionLayout from '@/components/shared/SectionLayout';

const RecipeProcedure = ({ procedure }: { procedure: string[] }) => {
  return (
    <SectionLayout title="조리 순서">
      <ul>
        {procedure.map((method) => (
          <li key={method}>
            <p>{method}</p>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default RecipeProcedure;
