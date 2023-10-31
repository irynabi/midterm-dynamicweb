import Link from "next/link";
import styles from "./RecipeCard.module.css"

export const Header = (catData) => (
    <header>
        <h1 class='h1'>What's Cooking?</h1>
        <div className={styles.Catimg}>
              <img src={catData}></img>
        </div>
        <div className= {styles.dropdown}>
            <button className={styles.button}><h2>What's In Your Fridge</h2></button>
            <div className={styles.dropdowncontent}>
                <Link href="apples">apples</Link>
                <Link href="bananas">bananas</Link>
                <Link href="strawberries"> strawberries </Link>
                <Link href="tomatoes"> tomatoes </Link>
            </div>
        </div>
    </header>
);

export default Header;