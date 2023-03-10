
function IntroActOne() {
    const audio = new Audio("assets/audio/Reducing-Rya.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div className="card wholeGroup">
            <div className="insideCard words">
                <h2>Intro to Act I: Reducing Rya</h2>
                <p>Join us for the story of Reducing Rya.<br />
                One day she visited a place called Treeville.<br />
                In Treeville the people made too many things,<br />
                All of the trees were getting cut down.<br />
                Rya helped the town figure out what to do.</p>
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
  
  export default IntroActOne;