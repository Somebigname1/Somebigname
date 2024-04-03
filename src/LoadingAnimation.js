// import React, { useState, useEffect } from 'react';
// import gsap from 'gsap';  
// import Banner from './Components/Landing/Banner';


// const LoadingAnimation = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const bar = document.getElementById('bar');
//     const mainContent = document.querySelector('.main-content');
//     const loaderText = document.querySelector('.loading-text');
//     const wrapper = document.getElementById('wrapper');
//     const sbn = document.getElementById('sbn-banner');

//     gsap.to(bar, { width: "100%", duration: 2, delay: 1, onComplete: showMainContent });
//     // gsap.to(bar, { width: "100%", duration: 2, delay: 1 });

//     const interval = setInterval(() => {
//       setProgress(prevProgress => prevProgress + 1);
//     }, 30);


    
//     function showMainContent() {
//       mainContent.style.display = 'block';
//       loaderText.style.display = 'none';
//       wrapper.style.display = 'none';
//       sbn.style.display = 'none';
//       document.body.classList.remove('no-scroll');
//       document.documentElement.style.overflow = 'auto'; 
//     }
    
    

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div id='sbn-banner'>
//         <img src={'images/sbn.png'} alt='sbn' />
//       </div>
//       <div id="wrapper">
//         <div id="bar"></div>
//       </div>
//       <div className="loading-text">Loading {progress}%</div>
//       <div className="main-content">
//         {/* <Comingsoon /> */}
//         <Banner/>
//       </div>
//     </>
//   );
// }

// export default LoadingAnimation;

import React, { useState, useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP library
import Comingsoon from './Comingsoon';
import Banner from './Components/Landing/Banner';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bar = document.getElementById('bar');
    const mainContent = document.querySelector('.main-content');
    const loaderText = document.querySelector('.loading-text');
    const wrapper = document.getElementById('wrapper');
    const sbn = document.getElementById('sbn-banner');

    // Add no-scroll class to body to hide scrollbar during loading animation
    document.body.classList.add('no-scroll');

    gsap.to(bar, { width: "100%", duration: 2, delay: 1, onComplete: showMainContent });

    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1);
    }, 30);

    function showMainContent() {
      mainContent.style.display = 'block';
      loaderText.style.display = 'none';
      wrapper.style.display = 'none';
      sbn.style.display = 'none';
      
      // Remove no-scroll class from body to show scrollbar
      document.body.classList.remove('no-scroll');
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id='sbn-banner'>
        <img src={'images/sbn.png'} alt='sbn' />
      </div>
      <div id="wrapper">
        <div id="bar"></div>
      </div>
      <div className="loading-text">Loading {progress}%</div>
      <div className="main-content">
        {/* <Comingsoon /> */}
        <Banner/>
      </div>
    </>
  );
}

export default LoadingAnimation;














// import React, { useState, useEffect } from 'react';
// import gsap from 'gsap'; // Import GSAP library

// function LoadingAnimation() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const bar = document.getElementById('bar');
//     const progressText = document.getElementById('progress');
//     const mainContent = document.querySelector('.main-content');

//     // Animate the loading bar
//     gsap.to(bar, { width: "100%", duration: 2, delay: 1 });

//     // Update the loading progress text
//     const interval = setInterval(() => {
//       setProgress(prevProgress => prevProgress + 1);
//     }, 20);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//     <div id='sbn-banner'>
//         <img src={'images/sbn.png'}/>
//     </div>
//       <div id="wrapper">
//         <div id="bar"></div>
//       </div>

//       <div className="loading-text">Custom Loading Message Here</div>

//       <div className="main-content">
//         <h1>Welcome to My Website</h1>
//         {/* Add your main content here */}
//       </div>
//     </>
//   );
// }

// export default LoadingAnimation;




