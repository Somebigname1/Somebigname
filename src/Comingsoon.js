

import GameBox from "./Components/Assets/GameBox";
import Hamburger from "./Components/Assets/Hamburger";
import DateTimeDisplay from "./DateTimeDisplay";

import Socials from "./Social";


const Comingsoon =()=>{


    return(
        <>
        <section id="coming-soon">
       {/* <Hamburger/> */}
        {/* <Header/> */}
    
        {/* <div className="maine-section">
        
            <div className="text-section">
            <Movement/>
          
                <h2>Big Names Take Time</h2>
                <h3>So, We will take some <br/> as well.</h3>
                <p>Till then catch our crazy side here.</p>
                <Social/>
            </div>

        </div> */}

        
<div className="container">
            <div className="row big-name">
                <div className="col-lg-6">
                    <div className="coming-text">
                    
                        <h2>Big Names take time.</h2>
                        <h3>So, we will take some as well.
                        </h3>
                    </div>
    
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
                        <Socials/>
                        <p>This coming soon page Follow along to get notified <br/>when more free templates are released.</p>
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