import Button from "./Button.jsx"; 
import Profile from "./Profile.jsx";
export default function Header() {
  return (
    <header>
          <nav className="app-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> 
            </nav>
          <Profile />
    </header>
  );
}
