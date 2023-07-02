import React from "react";
import memesData from "../memesData";

const Meme = () => {
    let imgUrl; //globally declared so as to use in return
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    //get a random number which is in between range of length of array
    const randomNumber = Math.floor(Math.random() * memesArray.length)

    //get url property of random memesData record in imgUrl
    imgUrl = memesArray[randomNumber].url;
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
};

export default Meme;
