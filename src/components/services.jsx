import React from "react";

export const Services = (props) => {
  const firstElement = props.data ? props.data[0] : null;
  const remainingElements = props.data ? props.data.slice(1) : [];

  const secondAndThirdElements = remainingElements.slice(0, 2);
  const otherElements = remainingElements.slice(2);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Prize Pool</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          <h3>Prizes to be announced soon</h3>
        </div>
        {/* <div className="row">
          {firstElement ? (
            <div key={`${firstElement.name}-0`} className="col-md-12 prizes">
              <div className="prize">
                <i className="fa fa-trophy"></i>
                <h3 id="lakh">₹ 1 Lakh </h3>
                <h4 id="pool">Prize Pool</h4>
                <h3>{firstElement.name}</h3> */}
                {/* <p>{firstElement.text}</p>
              </div>
              <div className="service-desc">
                <p>{firstElement.text}</p>
              </div>
            </div>
          ) : (
            "loading"
          )}
        </div> */}
        {/* <div className="row">
          {secondAndThirdElements.length > 0
            ? secondAndThirdElements.map((d, i) => (
                <div key={`${d.name}-${i + 1}`} className="col-md-6 prizes">
                  <div className="prize">
                    <i className="fa fa-trophy"></i>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                  <div className="service-desc">
                    
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}

        {/* <div className="row">
          {otherElements.length > 0
            ? otherElements.map((d, i) => (
                <div key={`${d.name}-${i + 3}`} className="col-md-4 prizes">
                  <div className="prize">
                    <i className="fa fa-trophy"></i>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
