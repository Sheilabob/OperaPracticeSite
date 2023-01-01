
function IntroActThree() {
    const audio = new Audio("assets/audio/MainOperaTheme.mp3")

    
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
                <h2>Intro to Act III: Recycling Ruby</h2>
                <p>Finally the story of Recycling Ruby<br />
                There were some things going on at school.<br />
                So many things were getting thrown away,<br />
                When they could have been recycled.<br />
                Ruby helped make sure all her classmates recycled!</p>
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
  
  export default IntroActThree;