function MainTheme() {
    function playAudio(x) {
        const audio = new Audio("assets/audio/" + x + ".mp3");
        audio.play();
    };

    return (
      <div>
        <h2 onClick={() => {playAudio("MainOperaTheme")}}>Main Theme</h2>
        <p>What can we do to save the world?</p>
        <p>What can we do to reduce?</p>
        <p>What can we do to save animals?</p>
        <p>What can we do to reuse?</p>
        <p>What can we do to save ourselves?</p>
        <p>What can we do to recylce?</p>
        <p>Reduce, Reuse, Recycle</p>
        <p>Reduce, Reuse, Recycle</p>
        <p>Reduce, Reuse, Recycle</p>
      </div>
    );
  }
  
  export default MainTheme;