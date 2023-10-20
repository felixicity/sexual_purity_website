import React from "react";

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold text-center mb-16">Gallery</h2>
      <div className="grid grid-flow-row gap-y-6 justify-center  md:grid-flow-col md:gap-x-6">
        <div className="gallery_card">
          <div className="gallery_card-content">
            <h2 className="gallery_card-title">Sexual Purity 1.0</h2>
            <p>
              First edition of sexual purity. selected group of pictures and
              video assets for sexual purity 1.0
            </p>
            <a href="#" className="gallery_card-button">
              View all ...
            </a>
          </div>
        </div>
        <div className="gallery_card">
          <div className="gallery_card-content">
            <h2 className="gallery_card-title">Sexual Purity 2.0</h2>
            <p>
              Second edition of sexual purity. A selected group of pictures and
              video assets for sexual purity 2.0 .
            </p>
            <a href="#" className="gallery_card-button">
              View all ...
            </a>
          </div>
        </div>
        <div className="gallery_card">
          <div className="gallery_card-content">
            <h2 className="gallery_card-title">Sexual Purity 3.0</h2>
            <p>
              Third edition of sexual purity. selected group of pictures and
              video assets for sexual purity 3.0
            </p>
            <a href="#" className="gallery_card-button">
              View all ...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
