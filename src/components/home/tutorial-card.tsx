import React from "react";

const TutorialCard = () => {
  return (
    <div className="tutorial-card-container">
      <div className="tutorial-image-container">
        <img
          alt="video-img"
          src="/res/tutorial.png"
          width={216}
          height={125}
          style={{
            width: "100%",
          }}
        />
        <div className="time-badge">
          <p>06:04</p>
        </div>
      </div>
      <div className="text-container tutorial-card-detail">
        <h2>How To Get Started</h2>
        <p style={{ textAlign: "left" }}>
          Hello! In this tutorial you will learn how to use...
        </p>
      </div>
    </div>
  );
};

export { TutorialCard };
