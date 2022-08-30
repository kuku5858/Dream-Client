import React, { useState } from "react";
import Samples from "../components/interior/Samples";
import Modal from "../components/interior/Modal";
import Estimate from "../components/interior/Estimate";
import { Bathrooms } from "../components/interior/bathroom/bathroom.js";
import { Bedrooms } from "../components/interior/bedroom/bedroom.js";
import { Kitchens } from "../components/interior/kitchen/kitchen.js";
import { Livingrooms } from "../components/interior/livingroom/livingroom.js";
import { Offices } from "../components/interior/office/office.js";

function Interior() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container interiour__container">
      <div>
      <h2>Salon Designs</h2>
        <Samples images={Livingrooms} setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>

      <div>
      <h2>Bedroom Designs</h2>
        <Samples images={Bedrooms} setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>

      <div>
      <h2>Bathroom Designs</h2>
        <Samples images={Bathrooms} setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>

      <div>
      <h2>Kitchen Designs</h2>
        <Samples images={Kitchens} setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>

      <div>
      <h2>Office Spaces</h2>
        <Samples images={Offices} setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>

      <div>
        <Estimate />
      </div>
    </div>
  );
}

export default Interior;
