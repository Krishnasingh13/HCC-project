import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const { profileImages } = useSelector((state) => state.profile);

  return (
    <div>
      <div className="profile-gallery">
        <div className="candidate-gallery">
          <div className="row">
            {profileImages?.length > 0
              ? profileImages.map((image, i) => (
                  <div key={i} className="col-md-3">
                    <div className="galley-image">
                      <img className="modal-target" src={image.image} />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
