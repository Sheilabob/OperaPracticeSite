import { useState } from "react";
import IntroActOne from "./IntroActOne";
import ActOneLine1 from "./Line1";
import ActOneLine2 from "./Line2";
import ActOneLine3 from "./Line3";
import ActOneLine4 from "./Line4";
import ActOneLine5 from "./Line5";
import ActOneLine6 from "./Line6";
import ActOneLine7 from "./Line7";
import ActOneLine8 from "./Line8";
import ActOneLine9 from "./Line9";
import ActOneLine10 from "./Line10";

function ActOne() {
    const [expand, setExpand] = useState(false)

    const handleClick = () => setExpand(!expand)

    return (
      <div className="actContainer">
        <h1 onClick={handleClick}>Act I (click to expand or collapse)</h1>
        {expand && 
            <div>
                <IntroActOne />
                <ActOneLine1 />
                <ActOneLine2 />
                <ActOneLine3 />
                <ActOneLine4 />
                <ActOneLine5 />
                <ActOneLine6 />
                <ActOneLine7 />
                <ActOneLine8 />
                <ActOneLine9 />
                <ActOneLine10 />
            </div>
        }
      </div>
    );
  }
  
  export default ActOne;