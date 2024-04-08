import React, {useState, useEffect } from 'react';
import gsap from 'gsap';

const GameBox = () => {

    const [cursorVisible, setCursorVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setCursorVisible(true);
      };
    
      const handleMouseLeave = () => {
        setCursorVisible(false);
      };
    
      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  useEffect(() => {
    const box = document.getElementById('box');

    if (box) {
      const initialWidth = ''; // Example initial width
      const initialHeight = ''; // Example initial height

      function animateToInitialState() {
        gsap.to(box, {
          width: initialWidth,
          height: initialHeight,
          bottom: 0,
          right: 0,
          duration: 0.5
        });
        box.classList.remove('expanded-state');
      }

      const handleClick = (event) => {
        event.stopPropagation();
        if (!box.classList.contains('expanded-state')) {
          gsap.to(box, {
            width: 800,
            height: 800,
            bottom: '50%',
            right: '50%',
            duration: 0.5
          });
          box.classList.add('expanded-state');
        }
      };

      const handleKeyDown = (event) => {
        if (event.key === 'Escape' && box.classList.contains('expanded-state')) {
          animateToInitialState();
        }
      };

      box.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);

     
      return () => {
        box.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []); 





  return (
    <>
      <div id="box" className="initial-state customCursorDiv" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
       
      </div>
      {cursorVisible && (
        <img
          src={"images/frame.png"}
          alt="Custom Cursor"
          className="customCursor"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        />
      )}
   
    </>
  );
};

export default GameBox;
