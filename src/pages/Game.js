import React from "react";

const Game = () => {
  return (
    <div className="game">
      <h1>Secret Page</h1>
      <p>
        Congratulations on finding my secret page! For your efforts, here is a
        completely playable game of Pokemon Ruby. Enjoy!
      </p>
      <iframe
        src="https://www.retrogames.cc/embed/26523-pokemon-ruby-e-independent.html"
        title="game"
        className="game-iframe"
        frameBorder="no"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
      ></iframe>
      <div className="gametext">
        <h1>Controls</h1>
        <h1>A Button = Z</h1>
        <h1>B Button = X</h1>
        <h1>Select = Shift</h1>
        <h1>Start = Enter</h1>
      </div>
    </div>
  );
};

export default Game;
