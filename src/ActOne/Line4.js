
function ActOneLine4() {
    const audio = new Audio("assets/audio/MainOperaTheme.mp4")

    
    function playAudio() {
        audio.play();
    };

    function pauseAudio() {
        audio.pause();
    }


    return (
      <div>
        <div class="card">
            <div class="insideCard words">
                <p><strong>Reducing Rya (Lila):</strong> You don't need 50 in EVERY HOUSE.  The whole town won't be in one house at the same time.  If they are, they can bring their own chairs.  You can SHARE chairs.</p>
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
  
  export default ActOneLine4;