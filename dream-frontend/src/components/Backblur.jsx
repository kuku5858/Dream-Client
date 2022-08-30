import React from 'react'
import "../styles/Nav.css";

function Backblur({show, click}) {
  return show && <div className="backblur__container" onClick={click}></div>
}

export default Backblur