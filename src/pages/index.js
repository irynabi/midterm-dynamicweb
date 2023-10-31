
import RecipeCard from "@/app/components/RecipeCard";
import "../app/globals.css";
import Header from "../app/components/Header";
import CatIcon from "../app/components/catIcon.js";

export async function getStaticProps(params){
    const food = (params && params.q) || "apples"
    const baseURL1 = `https://api.edamam.com/search?q=${food}&app_id=${process.env.API_ID}&app_key=${process.env.FOOD_API_KEY}&to=6`;
    const catData= 'http://placekitten.com/200/300'
    const response1 = await fetch(baseURL1);
    const recipeData = await response1.json();
    return {
        props: {
            recipeData,
            catData,
           
        },
    }
}

export default function Home({recipeData, catData}) {
    if (!recipeData) return null;
    if (!catData) return null;
    return (
        <>
        <Header/>
        <main>
            <CatIcon cuisineType={recipeData.hits[0].cuisineType}/>
            <RecipeCard img = {recipeData.hits[0].recipe.image}
                        title = {recipeData.hits[0].recipe.label}
                        totalTime = {recipeData.hits[0].recipe.totalTime}
                        cuisineType = {recipeData.hits[0].recipe.cuisineType}
                        link = {recipeData.hits[0].recipe.url}>
            </RecipeCard> 
           <RecipeCard img = {recipeData.hits[1].recipe.image}
                        title = {recipeData.hits[1].recipe.label}
                        totalTime = {recipeData.hits[1].recipe.totalTime}
                        cuisineType = {recipeData.hits[1].recipe.cuisineType}
                        link = {recipeData.hits[1].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[2].recipe.image}
                        title = {recipeData.hits[2].recipe.label}
                        totalTime = {recipeData.hits[2].recipe.totalTime}
                        cuisineType = {recipeData.hits[2].recipe.cuisineType}
                        link = {recipeData.hits[2].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[3].recipe.image}
                        title = {recipeData.hits[3].recipe.label}
                        totalTime = {recipeData.hits[3].recipe.totalTime}
                        cuisineType = {recipeData.hits[3].recipe.cuisineType}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[4].recipe.image}
                        title = {recipeData.hits[4].recipe.label}
                        totalTime = {recipeData.hits[4].recipe.totalTime}
                        cuisineType = {recipeData.hits[4].recipe.cuisineType}
                        link = {recipeData.hits[4].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[5].recipe.image}
                        title = {recipeData.hits[5].recipe.label}
                        totalTime = {recipeData.hits[5].recipe.totalTime}
                        cuisineType = {recipeData.hits[5].recipe.cuisineType}
                        link = {recipeData.hits[5].recipe.url}>
            </RecipeCard>
        </main>
        </>


    );

}


