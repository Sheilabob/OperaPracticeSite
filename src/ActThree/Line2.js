
function Act3Line2() {
    const audio = new Audio("assets/audio/Act3Line2.mp3")

    
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
                <p><strong>Statistician(Jose):</strong> Two thousand, three hundred twenty three forks were thrown away in the last 2 months by just third grade.</p>
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
  
  export default Act3Line2;