import { useState } from "react" ;
import "./Lottery.css" ;
import { genTecket , sum } from "./helper";
export default function Lottery() {

    let [ticket, setTicket] = useState(genTecket(3));
    let isWinning = sum (ticket) === 15 ;

    let buyTicket = () => {
        setTicket(genTecket(3));
    }
    return (
        <div className="lottery">
            <h1>Lottery Game </h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> <br/> 
            <button onClick={buyTicket}>Buy New Ticket </button>
            <h3>{isWinning && "Congratulations, You Won!"}</h3>
        </div>
    )
}