import background from "../images/header-img.jpg"
import logo from "../images/ABS_Text.svg"

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="ABS Logo" />
      <p>🚧 WE'RE RENOVATING 🚧</p>
      <div class={"dimmer"} />
    </header>
  );
}
