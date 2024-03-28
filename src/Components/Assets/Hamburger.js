const Hamburger = () =>{

    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        const closeButton = document.querySelector('.close-btn');
      
        hamburger.addEventListener('click', function () {
          menu.classList.toggle('show');
        });
      
        closeButton.addEventListener('click', function () {
          menu.classList.remove('show');
        });
      });
      
    return(
        <>
          <div class="hamburger-menu">
        <div class="hamburger"></div>
        <div class="menu">
          <button class="close-btn">&times;</button>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default Hamburger;