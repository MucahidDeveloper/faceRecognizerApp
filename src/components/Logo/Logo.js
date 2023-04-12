import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt>
      <div
        className="Tilt flex justify-center items-center br2 shadow-2 ba b--black"
        style={{
          height: "150px",
          width: "150px",
        }}
      >
        <img src={brain} alt="Smart Brain" height={100} />
      </div>
    </Tilt>
  );
};
// const Logo = () => {
//   return (
//     <div className="ma4 mt0">
//       <Tilt
//         className="Tilt br2 shadow-2"
//         options={{ max: 55 }}
//         style={{ height: 150, width: 150 }}
//       >
//         <div className="Tilt-inner pa3">
//           <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
//         </div>
//       </Tilt>
//     </div>
//   );
// };

export default Logo;
