import "./Group10.css";
import compatible from "../assets/Group 8.svg";
import bluetooth from "../assets/Group 7 (1).svg";
import battery from "../assets/Group 5.svg"
import modes from "../assets/Group (2).svg"

const Group10 = () => {
  return (
    <div className="group10">
      <div className="sqaure10">
        <img src={compatible} />
        <h2>HIGHLY<br/> COMPATIBLE</h2>
        <p>
          Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver
          needed.
        </p>
      </div>
      <div className="sqaure10">
        <img src={bluetooth} />
        <h2>WIRELESS <br/> WITH BLUETOOTH</h2>
        <p>
          Powerful 2.4G RF technology allows you to connect the cordless
          keyboard from up to 30ft away. Simply plug the unifying receiver into
          your computer.
        </p>
      </div>
      <div className="sqaure10">
        <img src={battery} />
        <h2>HIGH CAPACITY<br/> BATTERY</h2>
        <p>
          Equipped with a long-lasting built-in battery, you’ll never have to
          spend a dime on replaceable ones.Enjoy 40 hours of usage time between
          charges.
        </p>
      </div>
      <div className="sqaure10">
        <img src={modes} />
        <h2>RGB BACKLIT<br/> MODES</h2>
        <p>
          Choose from 4 backlight brightness levels and adjustable breathing
          speed. Each key glows intensely in the dark and helps you type in low
          light conditions.
        </p>
      </div>
    </div>
  );
};

export default Group10;
