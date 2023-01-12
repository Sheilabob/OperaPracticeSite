import { useState } from "react";
import IntroActTwo from "./IntroActTwo";
import SceneInstructionBox from "../SceneInstructionBox";
import ActTwoLine1 from "./Line1";
import ActTwoLine2 from "./Line2";
import ActTwoLine3 from "./Line3";
import ActTwoLine5 from "./Line5";
import ActTwoLine6 from "./Line6";
import ActTwoLine7 from "./Line7";
import ActTwoLine8 from "./Line8";
import ActTwoLine9 from "./Line9";
import ActTwoLine10 from "./Line10";
import ActTwoLine11 from "./Line11";
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
                <ActTwoLine3 />
                <ActTwoLine5 />
                <ActTwoLine6 />
                <ActTwoLine7 />
                <ActTwoLine8 />
                <ActTwoLine9 />
                <ActTwoLine10 />
                <ActTwoLine11 />
                {/* <ActOneLine12 /> */}
           
            </div> 
      </div>
    );
  }
  
  export default ActTwo;