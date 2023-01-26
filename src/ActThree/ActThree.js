import { useState } from "react";
import IntroActThree from "./IntroActThree";
// import SceneInstructionBox from "../SceneInstructionBox";
import Act3Line1 from "./Line1";
import Act3Line2 from "./Line2";
import Act3Line3 from "./Line3";
import Act3Line4 from "./Line4";
import Act3Line5 from "./Line5";
import Act3Line6 from "./Line6";
import Act3Line7 from "./Line7";
import Act3Line8 from "./Line8";
import Act3Line9 from "./Line9";
import Act3Line10 from "./Line10";
import Act3Line11 from "./Line11";
// import ActOneLine12 from "./Line12";

function ActThree() {
    const [expand, setExpand] = useState(false)

    const handleClick = () => setExpand(!expand)

    // const audio = new Audio("assets/audio/FullActOne.mp3")

    
    // function playAudio() {
    //     audio.play();
    // };

    // function pauseAudio() {
    //     audio.pause();
    // }

    return (
      <div className="actContainer accordion">
        <div className="accordion-title">
            <h1>Act III (Coming Soon!)</h1>
            <h1 className="plus" aria-expanded={expand} onClick={handleClick}>+</h1>
            <h1 className="minus" aria-expanded={!expand} onClick={handleClick}>-</h1>
        </div>
        <div className="accordion-content" aria-expanded={!expand}>
                {/* <div className="card fullact">
                <div className="insideCard words">
                <h2><strong>Full Act</strong></h2>
            </div>
                <div className="insideCard play" onClick={playAudio}>
                &#9654;&#65039;
            </div>
            <div className="insideCard pause" onClick={pauseAudio}>
                &#9208;&#65039;
            </div>
                </div> */}
                <IntroActThree />
                {/* <SceneInstructionBox description="Scene: a town surrounded by tree stumps and just a few trees.  The townspeople are gathered and all look very sad.  Reducing Rya enters from offstage and walks up to them." /> */}
                <Act3Line1 />
                <Act3Line2 />
                <Act3Line3 />
                <Act3Line4 />
                <Act3Line5 />
                <Act3Line6 />
                <Act3Line7 />
                <Act3Line8 />
                <Act3Line9 />
                <Act3Line4 />
                <Act3Line5 />
                <Act3Line10 />
                <Act3Line11 />
                {/* <ActOneLine12 /> */}
            </div> 
     </div>
    );
  }
  
  export default ActThree;