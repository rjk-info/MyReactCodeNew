export default function InfoBox() {

    let info= {
        feelslike : 24.84 ,
        temp : 25.05,
        tempMin : 25.05, 
        tempMax : 25.05, 
        humidity : 47,
        weather : "haze",
    };
    return (
        <div>
            <h1>WeatherInfo - {info.weather}</h1>
        </div>
    ) ;
}