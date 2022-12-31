import IntroActOne from "./IntroActOne";
import ActOneLine1 from "./Line1";
import ActOneLine2 from "./Line2";
import ActOneLine3 from "./Line3";

function ActOne() {

    return (
      <div className="actContainer">
        <h1>Act I</h1>
        <IntroActOne />
        <ActOneLine1 />
        <ActOneLine2 />
        <ActOneLine3 />
      </div>
    );
  }
  
  export default ActOne;