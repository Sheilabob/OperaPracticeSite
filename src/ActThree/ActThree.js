import { useState } from "react";
import IntroActThree from "./IntroActThree";
import SceneInstructionBox from "../SceneInstructionBox";
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
import Act3Line12 from "./Line12";
import Act3Line13 from "./Line13";
import Act3Line4B from "./Line4B";
import Act3Line4C from "./Line4C";


function ActThree() {
    const [expand, setExpand] = useState(false)

    const handleClick = () => setExpand(!expand)

    const audio = new Audio("assets/audio/ActThree.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }

    return (
      <div className="actContainer accordion">
        <div className="accordion-title">
            <h1>Act III</h1>
            <h1 className="plus" aria-expanded={expand} onClick={handleClick}>+</h1>
            <h1 className="minus" aria-expanded={!expand} onClick={handleClick}>-</h1>
        </div>
        <div className="accordion-content" aria-expanded={!expand}>
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
                <IntroActThree />
                <SceneInstructionBox description="Scene: a school cafeteria.  Students are all lined up (stage right), placing their trays in a bin for cleaning and throwing away their forks.  Recycling Ruby enters from stage left." />
                <Act3Line1 />
                <SceneInstructionBox description="Statistician enters from stage left." />
                <Act3Line2 />
                <Act3Line3 />
                <Act3Line4 />
                <Act3Line5 />
                <SceneInstructionBox description="Scene: an art classroom.  There is camera equipment and a bunch of paper dinosaurs because the students have just finished filming a paper dinosaur movie  Students are gathered in the middle and teacher is stage right." />
                <Act3Line6 />
                <Act3Line7 />
                <SceneInstructionBox description="Recycling Ruby enters from stage left holding recycling bin." />
                <Act3Line8 />
                <Act3Line9 />
                <Act3Line4B />
                <Act3Line5 />
                <SceneInstructionBox description="Scene: a classroom.  It is a party and the students have decorated with toilet paper.  There is a cabinet near the students, stage right.  The teacher enters from stage left." />
                <Act3Line10 />
                <SceneInstructionBox description="Recycling Ruby enters from stage left." />
                <Act3Line11 />
                <Act3Line12 />
                <Act3Line13 />
                <Act3Line4C />
                <Act3Line5 />
            </div> 
     </div>
    );
  }
  
  export default ActThree;