import Link from "next/link";
import styles from "./RecipeCard.module.css"

export const Header = () => (
    <header>
        <h1 class='h1'>What's Cooking?</h1>
        <div className={styles.dropdown}>
            <button className={styles.dropbtn} >Fruits</button>
            <div className={styles.dropdowncontent}>
                <p><Link href="/apples"> apples </Link> </p>
                <p><Link href="/strawberries" > strawberries </Link> </p>
                <p><Link href="/pumpkin"> pumpkin </Link> </p>
            </div>
        </div>
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Protein</button>
            <div className={styles.dropdowncontent}> 
                <p><Link href="/chicken"> chicken </Link> </p>
                <p><Link href="/beef"> beef</Link> </p>
                <p><Link href="/pork"> pork </Link> </p>
                <p><Link href="/fish"> fish </Link> </p>
            </div>
        </div>
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Vegetables</button>
            <div className= {styles.dropdowncontent}> 
                <p><Link href="/lettuce"> lettuce </Link> </p>
                <p><Link href="/spinach"> spinach</Link> </p>
                <p><Link href="/celery"> celery </Link> </p>
                <p><Link href="/cucumber"> cucumber </Link> </p>
            </div>
        </div>
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Dairy</button>
            <div className= {styles.dropdowncontent}> 
                <p><Link href="/milk"> milk</Link> </p>
                <p><Link href="/eggs">eggs</Link> </p>
                <p><Link href="/yogurt">yogurt </Link> </p>
                <p><Link href="/cheese"> cheese </Link> </p>
            </div>
        </div>
    </header>
);

export default Header;