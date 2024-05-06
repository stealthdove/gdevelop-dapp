import React from "react";
const EmptyProject = () => {
  return (
    <>
      <img src="/res/game.png" alt="game" width={120} height={90} />
      <article className="text-container">
        <h1>Create your first game project!</h1>
        <p>
          You currently have no projects, start creating your first <br />{" "}
          project right now.
        </p>
      </article>
      <button
        className="prompt-submit-btn text-white"
        style={{ width: "fit-content", padding: "10px 40px" }}
        type="button"
      >
        Create a new project
      </button>
    </>
  );
};

export { EmptyProject };
