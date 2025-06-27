import RecipeLinkForm from '@/features/RecipeLink/components/RecipeLinkForm';
import RecipeLinkHeading from '@/features/RecipeLink/components/RecipeLinkHeading';

const Home = () => {
  return (
    <div className="full-page-center">
      <div className="max-w-xl w-full">
        <RecipeLinkHeading />
        <RecipeLinkForm />
      </div>
    </div>
  );
};

export default Home;
