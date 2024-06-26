import "./Header.css";
import logo from "../assets/shared/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <div className="square">
        <span>PRE-ORDER NOW</span>
      </div>
    </div>
  );
};
