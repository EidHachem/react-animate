import React from "react"

import "./Modal.css"

const modal = (props) => {
  const cssClasses = [
    "modal",
    props.show === "entering"
      ? "modal-open"
      : props.show === "exiting"
      ? "modal-close"
      : null,
  ]
  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  )
}
export default modal
