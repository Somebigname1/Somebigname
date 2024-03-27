
import DateTimeDisplay from "../../DateTimeDisplay";


const Header =() =>{
    return(
        <>
        <div className="container">
        <div className="main-header">
            <div className="logo">
                <img src={"images/logo-sv.svg"} alt="logo"/>
            </div>

            <div className="countdown-timer">
                {/* <Countdown/> */}
             <DateTimeDisplay/>
            </div>
        </div>
        </div>
        </>
    )


}

export default Header;