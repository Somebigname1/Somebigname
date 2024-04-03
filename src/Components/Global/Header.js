
import DateTimeDisplay from "../../DateTimeDisplay";


const Header = () => {
    return (
        <>
            {/* <div className="container">
        <div className="main-header">
            <div className="logo">
                <img src={"images/logo-sv.svg"} alt="logo"/>
            </div>

            <div className="countdown-timer">
        
             <DateTimeDisplay/>
            </div>
        </div>
        </div> */}



            {/* NEW HEADER */}
            <div className="container">
                <div className="row">
                  
                        <div className="col-lg-5">
                            <div className="start-head">
<DateTimeDisplay/>
<h2>Let's Start</h2>
                            </div>
                        </div>

<div className="col-lg-2">
    <div className="header-logo">
        <img src={"images/main-logo.png"} alt="website-logo"/>
    </div>
</div>

<div className="col-lg-5">
                            <div className="start-head touch">
<h3>&#123;Email: Hi@somebigname.com&#125;</h3>
<h2>Get in Touch</h2>
                            </div>
                        </div>
                    </div>
              
            </div>
        </>
    )


}

export default Header;