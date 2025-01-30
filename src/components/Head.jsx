import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <Nav />
      <div className="container">
        <div className="hero-text padding-m">
          <h1>Adventure Tours</h1>
          <p>feed your wunderlust</p>
          <button>find out more</button>
        </div>
      </div>
    </header>
  );
}
