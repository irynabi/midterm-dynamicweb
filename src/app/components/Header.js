import Link from "next/link";


export const Header = () => (
    <header>
        <h1 class='h1'>What's Cooking?</h1>
        <div class="dropdown">
            <button class="dropbtn"><h1>What's In Your Fridge</h1></button>
        <div class="dropdown-content">
            <ui><Link href="apples">apples</Link></ui>
            <ui><Link href="bananas">bananas</Link></ui>
            <ui><Link href="strawberries"> strawberries </Link></ui>
            <ui><Link href="tomatoes"> tomatoes </Link></ui>
        </div>
        </div>
    </header>
);

export default Header;