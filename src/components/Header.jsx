    import { Button } from "./components";
    export function Header() {
    return (
        <header>
        <h1>My Application Header</h1>
            <Button label="Click Me" onClick={() => alert('Button clicked!')} />
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        </header>
    );
    }
