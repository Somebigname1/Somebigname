
import Header from "./Components/Global/Header";


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

        </div>
        </>
    )
}

export default Comingsoon;