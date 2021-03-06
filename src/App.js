import React from "react";
import "./App.css";

import Plans from "./Plans";
//Importing bootstrap and other modules
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
  
    return (
      <div className="maincontainer">
        <section>
          <div className="container py-5">
            <div className="row text-center align-items-end">
              
              <Plans />
              
              <>
              {/* <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                  <h2 className="h1 font-weight-bold">
                    $399
                    <span className="text-small font-weight-normal ml-2">
                      / month
                    </span>
                  </h2>

                  <div className="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum
                      dolor sit amet
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> At vero eos
                      et accusamus
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Nam libero
                      tempore
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Subscribe
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">
                    Enterprise
                  </h1>
                  <h2 className="h1 font-weight-bold">
                    $899
                    <span className="text-small font-weight-normal ml-2">
                      / month
                    </span>
                  </h2>

                  <div className="custom-separator my-4 mx-auto bg-primary"></div>

                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum
                      dolor sit amet
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> At vero eos
                      et accusamus
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Nam libero
                      tempore
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut
                      perspiciatis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut
                      perspiciatis
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Subscribe
                  </a>
                </div>
              </div> */}
              </>
            </div>
          </div>
        </section>
      </div>
    );

}

export default App;
