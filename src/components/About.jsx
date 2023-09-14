import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          {/* What bought u into programming<br/> */}
          When I came into Bachelor's degree during initial days I used to play PUBG a lot, 
          few of my seniors motivated me by giving information that these are all done by programming,
          I was curious to know about how the things gonna work, So ya this got me into programming.
        </p>

        <br />

        <p className="text-xl">
          {/* why do u like programming<br/> */}
          Be it a human or programming - If you stay with it long enough and get to know more about it 
          you will eventually fall in love with it.

          So yeah, the only sure shot way of falling in love with programming is by practicing as much as you can. 
          Write a lot of code. Build Stuff. 
          Keep trying if you fail. 
          You will eventually fall in love with it.
        </p>
      </div>
    </div>
  );
};

export default About;
