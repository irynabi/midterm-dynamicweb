
import RecipeCard from "../app/components/RecipeCard";
import "../app/globals.css";
import Header from "../app/components/Header";

export async function getStaticProps(params){
    const food = (params && params.q) || "pumpkin"
    const bearerToken = `Bearer ${process.env.EMOJI_API_KEY}`;
    const baseURL1 = `https://api.edamam.com/search?q=${food}&app_id=${process.env.API_ID}&app_key=${process.env.FOOD_API_KEY}&to=6`;
    const group = "food_drink";
    const baseURL2= 'https://api.api-ninjas.com/v1/emoji?group=' + group;
    const response1 = await fetch(baseURL1);
    const response2 = await fetch(baseURL2, {
        method: 'GET',
        headers:{
            'X-Api-Key':`hh2kfnINhUAg2e75rA8CDCfBIuODzG93EHjwmgUZ`,
            "Content-Type": "application/json",
        },
    });
    const recipeData = await response1.json();
    const imageData = await response2.json();
    return {
        props: {
            recipeData,
            imageData,
           
        },
    }
}

export default function Home({recipeData, imageData}) {
    if (!recipeData) return null;
    if (!imageData) return null;
    return (
        <>
        <Header/>
        <main>
            <RecipeCard img = {recipeData.hits[0].recipe.image}
                        title = {recipeData.hits[0].recipe.label}
                        totalTime = {recipeData.hits[0].recipe.totalTime}
                        cuisineType = {recipeData.hits[0].recipe.cuisineType}
                        emoji = {imageData[0].image}
                        link = {recipeData.hits[0].recipe.url}>
            </RecipeCard> 
           <RecipeCard img = {recipeData.hits[1].recipe.image}
                        title = {recipeData.hits[1].recipe.label}
                        totalTime = {recipeData.hits[1].recipe.totalTime}
                        cuisineType = {recipeData.hits[1].recipe.cuisineType}
                        emoji = {imageData[1].image}
                        link = {recipeData.hits[1].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[2].recipe.image}
                        title = {recipeData.hits[2].recipe.label}
                        totalTime = {recipeData.hits[2].recipe.totalTime}
                        cuisineType = {recipeData.hits[2].recipe.cuisineType}
                        emoji = {imageData[2].image}
                        link = {recipeData.hits[2].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[3].recipe.image}
                        title = {recipeData.hits[3].recipe.label}
                        totalTime = {recipeData.hits[3].recipe.totalTime}
                        emoji = {imageData[3].image}
                        cuisineType = {recipeData.hits[3].recipe.cuisineType}
                        link = {recipeData.hits[3].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[4].recipe.image}
                        title = {recipeData.hits[4].recipe.label}
                        totalTime = {recipeData.hits[4].recipe.totalTime}
                        cuisineType = {recipeData.hits[4].recipe.cuisineType}
                        emoji = {imageData[2].image}
                        link = {recipeData.hits[4].recipe.url}>
            </RecipeCard>
            <RecipeCard img = {recipeData.hits[5].recipe.image}
                        title = {recipeData.hits[5].recipe.label}
                        totalTime = {recipeData.hits[5].recipe.totalTime}
                        cuisineType = {recipeData.hits[5].recipe.cuisineType}
                        emoji = {imageData[1].image}
                        link = {recipeData.hits[5].recipe.url}>
            </RecipeCard>
        </main>
        </>

    );

}


