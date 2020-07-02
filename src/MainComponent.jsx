import React from 'react';
import SocialCard from './SocialCard'
// import bg from "./wallpaper 2.jpg";

const MainComponent = () => {
        return(
            <div className="main">
                {/* <img src={bg} alt="bg"></img> */}
                <code><div className="tag">{"<span id='hello'>"}</div> {" Hello! I am "}<u>Indrajit</u>{", a "}<span className="highlight">full stack web developer</span>{" and a "}
                <span className="highlight">Machine Learning enthusiast</span>{" from "} <span id="india">
                    India! </span><div className="tag">{"</span>"}</div></code>

                <div id="socialcards">
                <SocialCard src="./linkedin.png" url="https://www.linkedin.com/in/indrajit-vijayakumar-6b761869"/>
                <SocialCard src="./github.png" url="https://github.com/thisisindrajit"/>
                <SocialCard src="./twitter.png" url="https://twitter.com/indrajitmusic"/>
                <SocialCard src="./youtube.png" url="https://www.youtube.com/channel/UCvd_7o_qpO2VC6HPn7Huh_w?view_as=subscriber"/>
                {/* <SocialCard />
                <SocialCard />
                <SocialCard /> */}
                </div>

            </div>
        );
}

export default MainComponent;