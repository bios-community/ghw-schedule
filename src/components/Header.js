import '../styles/header.scss'

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Global Hack Week <span className="header__title__diff">Schedule</span></h1>
      <p className="header__description">
        This page consist of Major League Hacking: Global Hack Week Schedule but
        in Indian Time Zone. This website is not intended to impersonate
        anybody; rather, it was created to assist anyone looking for the GHW
        Schedule in IST.
      </p>
      <p className="header__description">
        Made by{" "}
        <a href="https://bio.link/inclinedadarsh" className="link">
          Adarsh Dubey
        </a>{" "}
        under{" "}
        <a href="https://discord.gg/ZQGRW6uCXA" className="link">
          BIO-S Community
        </a>
        .
      </p>
    </header>
  );
}

export default Header;
