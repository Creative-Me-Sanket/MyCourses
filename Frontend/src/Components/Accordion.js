import React from "react";
const Accordion = props => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {props.items.map((acc, index) => {
        var id = (Math.random() + 1).toString(36).substring(7);
        return (
          <div className="accordion-item" key={index+50}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#"+id}
                aria-expanded="false"
                aria-controls={id}
              >
                {acc.head}
              </button>
            </h2>
            <div
              id={id}
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
            >
              <div className="accordion-body">
              <h1>{acc.data}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
