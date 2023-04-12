import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 white">
        {"This Smart Brain will detect faces in your pictures! Git it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5 w-60 center flex form spicial pa4">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
            placeholder="Enter your image's URL"
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple Detect"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
