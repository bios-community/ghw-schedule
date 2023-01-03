import '../styles/header.scss'

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        MLH GHW Schedule as per Indian Standard Time
      </h1>
      <p className="header__description">
        This page consist the schedule of MLH Global Hack Week but in Indian
        Time Zone. It includes everything that's in the official MLH Schedule.
      </p>
      <p className="header__description">
        It's not under MLH. By no means this page is trying to impersonate MLH.
        This is made to help people who want to see timings in IST. Made by{" "}
        <a href="https://bio.link/inclinedadarsh" className="link">
          Adarsh Dubey
        </a>
        .
      </p>
      <p className="header__description">
        Join the{" "}
        <a href="https://discord.gg/ZQGRW6uCXA" className="link">
          BIO-S Community
        </a>
      </p>
    </header>
  );
}

export default Header;
