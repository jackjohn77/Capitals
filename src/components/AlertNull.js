import React from "react";

// takes the Boolean prop called show, if show is true then Alert is shown.
function AlertNull({ show }) {
  return (
    <>
      {show && <p >Please enter name above</p>}
    </>
  );
}

export default AlertNull;
