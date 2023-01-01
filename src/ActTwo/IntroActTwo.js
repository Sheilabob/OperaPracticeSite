
function IntroActTwo() {
    const audio = new Audio("assets/audio/Reusing-Rarish.mp3")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div class="card wholeGroup">
            <div class="insideCard words">
                <h2>Intro to Act II: Reusing Rarish</h2>
                <p>Now come to the story of Reusing Rarish.<br />
                One day he visited a mall on Pluto.<br />
                At this mall, there was too much trash.<br />
                There was so much that the janitor quit.<br />
                Rarish helped the people figure out what to do.</p>
            </div>
            <div class="insideCard play" onClick={playAudio}>
                &#9654;&#65039;
            </div>
            <div class="insideCard pause" onClick={pauseAudio}>
                &#9208;&#65039;
            </div>

        </div>
      </div>
    );
  }
  
  export default IntroActTwo;