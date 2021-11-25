import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import PricingCard from "./PricingCard";

function Plans() {
  const [plans, setPlans] = useState([]);

  //Fetching data from JSON
  const getData = () => {
    fetch("plans.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setPlans(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className="plans">
        <Row>
          {plans.map((plan) => {
            return (
              <PricingCard
                key={plan.name}
                name={plan.name}
                cost={plan.cost}
                features={plan.features}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Plans;
