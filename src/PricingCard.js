function PricingCard(props) {
  return (
    <div className="col-lg-4 mb-5 mb-lg-0">
      <div className="bg-white p-5 rounded-lg shadow">
        <h1 className="h6 text-uppercase font-weight-bold mb-4">
          {props.name}
        </h1>
        <h2 className="h1 font-weight-bold">
          {"$"}
          {props.cost}
          <span className="text-small font-weight-normal ml-2">/ month</span>
        </h2>

        <div className="custom-separator my-4 mx-auto bg-primary"></div>

        <ul className="list-unstyled my-5 text-small text-left">
          {props.features.map((f) => {
            return (
              <li
                key={f.name}
                className={
                  "mb-3 " + (f.access === true ? "" : "text-muted unavail")
                }
              >
                <i
                  className={
                    "fa mr-2 " +
                    (f.access === true ? "fa-check text-primary" : "fa-times")
                  }
                ></i>
                {f.name}
              </li>
            );
          })}
        </ul>
        <a
          href="#"
          className="btn btn-primary btn-block p-2 shadow rounded-pill"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default PricingCard;
