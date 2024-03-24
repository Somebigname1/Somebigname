import DateTimeDisplay from "./DateTimeDisplay";
import Header from "./Header";
import Movement from "./Movement";
import Social from "./Social";

const Comingsoon =()=>{

    return(
        <>
         <Header/>
        <div className="maine-section">
          
            <div className="text-section">
            <Movement/>
                <h2>Big Names Take Time</h2>
                <h3>So, We will take some <br/> as well.</h3>
                <p>Till then catch our crazy side here.</p>
                <Social/>
            </div>
{/* <DateTimeDisplay/> */}
        </div>
        </>
    )
}

export default Comingsoon;