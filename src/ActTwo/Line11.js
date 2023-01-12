
function ActTwoLine11() {
    const audio = new Audio("assets/audio/ActTwoLine11.mp3")

    
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
                <p><strong>Townspeople:</strong> Borrow and trade. Borrow and trade.</p>
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
  
  export default ActTwoLine11;