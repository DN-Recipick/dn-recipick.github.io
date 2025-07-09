import Button from '@/components/shared/Button';
import { ROUTES } from '@/constants/routes';
import RecipeList from '@/features/MyRecipes/components/RecipeList';
import useGetRecipes from '@/features/MyRecipes/hooks/useGetRecipes';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';
import PageLayout from '@/components/shared/PageLayout';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabaseClient';

const MyRecipes = () => {
  const { data, isPending } = useGetRecipes();

  const [recipes, setRecipes] = useState(data?.recipes);

  const recipeStateCheck = (table:string, id:string) => {
    console.log(`실시간 통신 시작`);
    
    const channel = supabaseClient
    .channel('recipe-state')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: table,
        filter: `id=eq.${id}`,
      },
      (payload) => {
        console.log(payload)
        if (payload.new.state === 1){
          setRecipes(recipes.map((recipe) => recipe.id === id ? payload.new : recipe));
          channel.unsubscribe();
        }
      }
    )
    .subscribe();
  }

  useEffect(() => {
    setRecipes(data?.recipes);
  }, [isPending]);

  useEffect(() => {
    if(data){
      console.log("데이터 들어옴옴")

      console.log(`data:`, data);
      console.log(`recipes:`,recipes);

      const unprocessedRecipe = recipes?.find((recipe) => recipe.state === 0);
      console.log(`0인 레시피:`, unprocessedRecipe);
      if (unprocessedRecipe) {
        recipeStateCheck('recipe', unprocessedRecipe.id)
      }
    }

  }, [recipes]);



  return (
    <PageLayout title="내 레시피">
      <RecipeList isPending={isPending} recipes={recipes} />
      <div className="fixed bottom-23 w-full layout-max-w px-content left-1/2 -translate-x-1/2 z-10 flex justify-end">
        <Link to={ROUTES.HOME}>
          <Button
            icon={<FaPlus className="mini-icon-size" />}
            className="btn-primary w-14 h-14 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
      </div>
    </PageLayout>
  );
};

export default MyRecipes;
