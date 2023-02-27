import React from "react";
import InvitationForm from "../components/Invitation";
// import Pdf from "react-to-pdf";


function Invitation() {
  return (
    <div>
      <InvitationForm />
     
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}

      {/* <ReactToPdf>
        {({toPdf, targetRef}) =>  (
          <div style={{width: 500, height: 500, background: 'red'}} onClick={toPdf} ref={targetRef}/>
        )}
      </ReactToPdf> */}

    </div>
  );
}

export default Invitation;