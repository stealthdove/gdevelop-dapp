import React from "react";

const ProjectCard = () => {
  return (
    <div className="h-fit project-card-container">
      <div>
        <img
          src="/res/showcase.png"
          alt="game"
          width={262}
          height={175}
          style={{
            width: "100%",
          }}
        />
      </div>
      <div className="text-container" style={{ padding: "16px 20px" }}>
        <h1 style={{ textAlign: "left", margin: 0 }}>Space Hunters</h1>
        <p
          style={{
            textAlign: "left",
            marginTop: "4px",
            marginBottom: 0,
          }}
        >
          Edited 1 day ago
        </p>
      </div>
    </div>
  );
};

export { ProjectCard };
