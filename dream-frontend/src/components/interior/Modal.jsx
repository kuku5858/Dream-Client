import React from "react";
import "../../styles/interior.css";

function Modal({ selectedImage, setSelectedImage }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("modal__container")) {
      setSelectedImage(null);
    }
  };
  return (
    <div className="modal__container" onClick={handleClick}>
      <img src={selectedImage} alt="enlarged image" />
    </div>
  );
}

export default Modal;
