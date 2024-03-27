import React, { useEffect } from 'react';

function Movement() {
  useEffect(() => {
    const handleMouseMove = (e) => {
     
      const pupils = document.querySelectorAll(".eye .pupil");
      pupils.forEach((pupil) => {
       
        var rect = pupil.getBoundingClientRect();
        var x = (e.pageX - rect.left) / 30 + "px";
        var y = (e.pageY - rect.top) / 30 + "px";
        pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

   
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
     <div className="eyes">
        <div className="eye">
          <div className="pupil"></div>
        </div>
        <div className="eye">
          <div className="pupil"></div>
        </div>
      </div></>
  );
}

export default Movement;
