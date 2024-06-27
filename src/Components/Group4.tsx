import "./Group4.css";
import glasskeyboard from "../assets/mobile/image-glass-and-keyboard.jpg";
import phonekeyboard from "../assets/mobile/image-phone-and-keyboard.jpg";

export const Group4 = () => {
  return (
    <div className="group4">
      <div className="phonekeyboard">
        <img src={phonekeyboard} />
        <div className="mask" />
      </div>
      <img src={glasskeyboard} />
    </div>
  );
};
