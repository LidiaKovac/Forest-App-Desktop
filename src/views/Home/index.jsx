import "./index.scss";
import Tree from "../../assets/tree_1.png";
import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
const Home = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <div className="home__wrap">
      <div className="home__content">
        <i> Get back to work!</i>
        <div className="timer__wrap">
          <div className="timer__visual">
            <img src={Tree} alt="tree" />
          </div>
          <div className="timer__numbers">
            {hours < 10 && "0"}
            {hours}:{minutes < 10 && "0"}
            {minutes}
            <div className="add-remove__time">
              <BiUpArrow
                onClick={
                  minutes < 55
                    ? () => setMinutes((m) => m + 5)
                    : () => {
                        setHours((h) => h + 1);
                        setMinutes(0);
                      }
                }
              />
              <BiDownArrow
                onClick={
                  (minutes > 0 &&  minutes < 55) ? ()=> setMinutes((m) => m - 5) : ()=> {
                      setHours((h)=> h-1)
                      setMinutes(55)
                  }
                }
              />
            </div>
          </div>
          <div className="start__button">Start</div>
          <div className="give-up__button">Give up</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
