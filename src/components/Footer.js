import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <a href="https://arthurcaraujo.github.io/">
                Arthur C. Araújo
            </a> - {new Date().getFullYear()}
        </footer>
    )
}