
function ActTwoLine5() {
    const audio = new Audio("assets/audio/ActOneLine5.mp3")
    const chant = new Audio("assets/audio/ReduceChant.mp3")

    
    function playAudio() {
        audio.play();
    };

    function playChant() {
        chant.play();
    };

    function pauseAudio() {
        audio.pause();
    }

    function pauseChant() {
        chant.pause();
    }


    return (
      <div className="doubleParent">
        <div className="card wholeGroup double">
            <div className="insideCard words">
                <p><strong>Townspeople:</strong> **wash and reuse song**</p>
            </div>
            <div className="insideCard play" onClick={playAudio}>
                &#9654;&#65039;
            </div>
            <div className="insideCard pause" onClick={pauseAudio}>
                &#9208;&#65039;
            </div>
        </div>
        <div className="card wholeGroup double">
            <div className="insideCard words">
                <p><strong>Reuse Chant</strong> Chant and use percussion instruments during scene shift.</p>
            </div>
            <div className="insideCard play" onClick={playChant}>
                &#9654;&#65039;
            </div>
            <div className="insideCard pause" onClick={pauseChant}>
                &#9208;&#65039;
            </div>
        </div>
      </div>
    );
  }
  
  export default ActTwoLine5;