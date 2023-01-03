
function ActOneLine3() {
    const audio = new Audio("assets/audio/Act1Line3.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div className="card">
            <div className="insideCard words">
                <p><strong>Kid Mayor (Tristan):</strong> We need more trees.  We need to make 50 chairs in every house 'cause there are 50 people in our town!</p>
            </div>
            <div className="insideCard play" onClick={playAudio}>
                &#9654;&#65039;
            </div>
            <div className="insideCard pause" onClick={pauseAudio}>
                &#9208;&#65039;
            </div>

        </div>
      </div>
    );
  }
  
  export default ActOneLine3;