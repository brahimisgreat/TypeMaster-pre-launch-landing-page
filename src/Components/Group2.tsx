import "./Group2.css";
import keyboard from '../assets/mobile/image-keyboard.jpg'

export const Group2 = () => {
  return <div className="group2">
    <div className="box1">
        <h1>TYPEMASTER KEYBOARD</h1>
        <p>Improve your productivity and gaming without breaking the bank. Upgrade
             to a high quality mechanical typing experience.
        </p>
        <div className="preorder">
            <button>PRE-ORDER-NOW</button>
            <span>RELEASE ON 5/27</span>
        </div>
    </div>
    <div className="box2">
        <img src={keyboard} alt="keyboard"/>
    </div>
  </div>;
};
