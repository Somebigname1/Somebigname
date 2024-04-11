

import GameBox from "./Components/Assets/GameBox";
import EmailForm from "./Components/EmailForm";
import Started from "./Components/HomePage/Started";

import DateTimeDisplay from "./DateTimeDisplay";

import Socials from "./Social";


const Comingsoon =()=>{
 

    return(
        <>
        <section id="coming-soon">
   

        
<div className="container">
            <div className="row big-name">
                <div className="col-lg-6">
                    <div className="coming-text">
                    
                        <h2>Big Names take time.</h2>
                        <h3>We will take some as well.
                        </h3>
                    </div>
             {/* <EmailForm/> */}
    
                </div>

                <div className="col-lg-6">
                    <div className="main-logo">
                        <img src={"images/Logo.png"}/>
                        <DateTimeDisplay/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container media-icons" id="media-hide">
            <div className="row">
                <div className="col-lg-6 socials">
                    <div className="social-mediaa">
                        
                        <p>Till then catch our crazy side here.</p>
                        <Socials/>
                    </div>
                </div>


                <div className="col-lg-6 box-game">
                <GameBox/>
                </div>
            </div>
        </div>



        </section>
        </>
    )
}

export default Comingsoon;