import { useState } from "react";
// import IntroActOne from "./IntroActOne";
// import SceneInstructionBox from "../SceneInstructionBox";
// import ActOneLine1 from "./Line1";
// import ActOneLine2 from "./Line2";
// import ActOneLine3 from "./Line3";
// import ActOneLine4 from "./Line4";
// import ActOneLine5 from "./Line5";
// import ActOneLine6 from "./Line6";
// import ActOneLine7 from "./Line7";
// import ActOneLine8 from "./Line8";
// import ActOneLine9 from "./Line9";
// import ActOneLine10 from "./Line10";
// import ActOneLine11 from "./Line11";
// import ActOneLine12 from "./Line12";

function ActThree() {
    // const [expand, setExpand] = useState(false)

    // const handleClick = () => setExpand(!expand)

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
            {/* <h1 className="plus" aria-expanded={expand} onClick={handleClick}>+</h1>
            <h1 className="minus" aria-expanded={!expand} onClick={handleClick}>-</h1> */}
        </div>
        {/* <div className="accordion-content" aria-expanded={!expand}>
                <div className="card fullact">
                <div className="insideCard words">
                <h2><strong>Full Act</strong></h2>
            </div>
                <div className="insideCard play" onClick={playAudio}>
                &#9654;&#65039;
            </div>
            <div className="insideCard pause" onClick={pauseAudio}>
                &#9208;&#65039;
            </div>
                </div>
                <IntroActOne />
                <SceneInstructionBox description="Scene: a town surrounded by tree stumps and just a few trees.  The townspeople are gathered and all look very sad.  Reducing Rya enters from offstage and walks up to them." />
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
                <ActOneLine11 />
                <ActOneLine12 />
            </div> */}
      </div>
    );
  }
  
  export default ActThree;