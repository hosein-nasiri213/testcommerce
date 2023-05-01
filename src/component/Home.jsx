// import React from "react";
// import Products from "./Products";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <img
//               src="/assets/bg1.jpg"
//               className="img-fluid"
//               alt="background1"
//             />
//           </div>
//         </div>
//       </div>
//       <Products />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Products from "./Products";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap 5 CSS file

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <img
              src="/assets/bg1.jpg"
              className="img-fluid"
              alt="background1"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
