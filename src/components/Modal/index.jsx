
import "./index.scss"

const Confirmation = ({show, giveUp, setShow})=> {
    return (<div className={show ? "modal__wrap" : "modal__hide"}>
        <div className='modal__inner'>
            Are you sure you want to give up? 
            <br/>
            Keep focusing!
            <br/>
            <span>

            <button id='gu' onClick={()=> giveUp(false)}>Give up</button>
            <button id='kg' onClick={()=> setShow(false)}>Keep going</button>
            </span>
        </div>
    </div>)
}
export default Confirmation;
