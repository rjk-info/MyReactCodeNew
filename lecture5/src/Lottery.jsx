import { useState } from "react" ;
import "./Lottery.css" ;
import { genTecket , sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n = 3 , winCondition}) {

    let [ticket, setTicket] = useState(genTecket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTecket(n));
    }
    return (
        <div className="lottery">
            <h1>Lottery Game </h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy New Ticket </button>
            <h3>{isWinning && "Congratulations, You Won!"}</h3>
        </div>
    )
}