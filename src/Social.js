import { useState } from 'react';

const Socials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="social-icons">
      <a
        className={`social-icon dribbble ${hoveredIndex !== null && hoveredIndex !== 0 && 'blurred'}`}
        href="https://twitter.com/somebigname"
        rel="noreferrer"
        target="_blank"
        onMouseOver={() => handleMouseOver(0)}
        onMouseOut={handleMouseOut}
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className={`social-icon dribbble ${hoveredIndex !== null && hoveredIndex !== 1 && 'blurred'}`}
        href="https://youtube.com/@Somebigname?si=MJtCBGtE2k2ExEqk"
        rel="noreferrer"
        target="_blank"
        onMouseOver={() => handleMouseOver(1)}
        onMouseOut={handleMouseOut}
      >
        <i className="fab fa-youtube"></i>
      </a>

      <a
        className={`social-icon dribbble ${hoveredIndex !== null && hoveredIndex !== 2 && 'blurred'}`}
        href="https://www.instagram.com/somebigname.india?igsh=eG91YnRtbXg4Nnoz"
        rel="noreferrer"
        target="_blank"
        onMouseOver={() => handleMouseOver(2)}
        onMouseOut={handleMouseOut}
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default Socials;
