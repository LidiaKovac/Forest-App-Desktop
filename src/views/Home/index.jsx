import "./index.scss";
import Tree from "../../assets/tree_1.png";
import DeadTree from "../../assets/tree_dead.png";
import { useEffect, useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Confirmation from "../../components/Modal";
const Home = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState();
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("normal");
  const [focusing, setFocusing] = useState(false);
  useEffect(() => {
    if (minutes < 0) {
      setHours((h) => h - 1);
      setMinutes(59);
    }
    if (hours === 0 && minutes === 0) {
      stopTimer();
      setFocusing(false);
    }
  }, [hours, minutes]);

  const stopTimer = () => {
    clearInterval(timer);
    setHours(0);
    setMinutes(0);
  };
  const giveUp = (data) => {
    setShow(data);
    stopTimer();
    setStatus("gave up");
  };
  const leavePage = () => {
        stopTimer();
        setStatus("gave up");
    }
  //HANDLES TITLE CHANGE
  const title_in = () => (document.title = `Keep Focusing!`);
  const title_out = () => (document.title = "Come back!");
  window.onfocus = title_in;
  window.visibilitychange = leavePage;
  return (
    <div className="home__wrap">
      <Confirmation show={show} giveUp={giveUp} setShow={setShow} />
      <div className="home__content">
        {status === "normal" ? (
          <i> Get back to work!</i>
        ) : (
          status === "gave up" && <i>You tree died.</i>
        )}
        <div className="timer__wrap">
          <div className="timer__visual">
            {status === "normal" ? (
              <img src={Tree} alt="tree" />
            ) : (
              status === "gave up" && <img src={DeadTree} alt="tree" />
            )}
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
                  minutes !== 0
                    ? () => setMinutes((m) => m - 5)
                    : () => {
                        if (hours > 0) {
                          setHours((h) => h - 1);
                          setMinutes(55);
                        }
                      }
                }
              />
            </div>
          </div>
          {!focusing && (
            <button
              disabled={minutes === 0 && hours === 0 && true}
              className="start__button"
              onClick={() => {
                setTimer(() =>
                  setInterval(
                    () => setMinutes((m) => m - 1),
                    //since setINterval is not an asyncrounous function, time is handled in the useEffect
                    1000
                  )
                );
                document.title = `Keep Focusing!`;
                setStatus("normal");
                setFocusing(true);
              }}
            >
              Start
            </button>
          )}
          {focusing && (
            <div className="give-up__button" onClick={() => setShow(true)}>
              Give up
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
