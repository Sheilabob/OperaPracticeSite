import { useState } from "react";
import IntroActTwo from "./IntroActTwo";
import SceneInstructionBox from "../SceneInstructionBox";
import ActTwoLine1 from "./Line1";
import ActTwoLine2 from "./Line2";
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

function ActTwo() {
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
            <h1>Act II (Coming Soon!)</h1>
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
                <IntroActTwo />
                <SceneInstructionBox description="Scene: a pants storefront. People are coming out of the store wearing new pants and throwing their old ones in the trash.   Reusing Rarish watches in confusion and then approaches a group who was about to toss their pants." />
                <ActTwoLine1 />
                <ActTwoLine2 />
                {/* <ActOneLine3 />
                <ActOneLine4 />
                <ActOneLine5 />
                <ActOneLine6 />
                <ActOneLine7 />
                <ActOneLine8 />
                <ActOneLine9 />
                <ActOneLine10 />
                <ActOneLine11 />
                <ActOneLine12 /> */}
           
            </div> 
      </div>
    );
  }
  
  export default ActTwo;