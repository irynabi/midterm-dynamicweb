"use-client";
import styles from "./RecipeCard.module.css"

const RecipeCard = ({img, title, totalTime, cuisineType,link, emoji}) => (
<div className = {styles.RecipeCardWrapper}>
<img className ={styles.emoji} src={emoji}></img>
    <div className = {styles.RecipeCardImage}>  
        <img src ={img}></img>
    </div>
    <div className = {styles.RecipeCardDetails}>
        <h1>{title}</h1>
        <br></br>
        {cuisineType}
        <br></br>
        {totalTime + ' min'}
        <br></br>
        <a href= {link}>
            <button className={styles.button}> View the Recipe </button>
        </a>
    </div>
</div>
)

export default RecipeCard;