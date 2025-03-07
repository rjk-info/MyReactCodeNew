import { useState , useEffect} from "react";

export default function Counter() {
    const [countx, setCountx] = useState(0);
    const [county, setCounty] = useState(0);

    const incrementCountx = () => {
        setCountx((currCount) => currCount + 1);
    };

    const incrementCounty = () => {
        setCounty((currCount) => currCount + 1);
    };

    useEffect (function printSomthing() {
        console.log("this is a side-effect");
    } , [countx , county]) ;

    return (
        <div>
            <h3>Count: {countx}</h3>
            <button onClick={incrementCountx}>+1</button>
            <h3>Count: {county}</h3>
            <button onClick={incrementCounty}>+1</button>
        </div>
    );
}