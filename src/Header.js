import Countdown from "./Countdown";

const Header =() =>{
    return(
        <>
        <div className="container">
        <div className="main-header">
            <div className="logo">
                <img src={"images/logo-sv.svg"}/>
            </div>

            <div className="countdown-timer">
                <Countdown/>
            </div>
        </div>
        </div>
        </>
    )


}

export default Header;