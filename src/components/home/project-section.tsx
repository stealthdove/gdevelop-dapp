import React from "react";
import { EmptyProject } from "./empty-project";
import { TitleHeader } from "./title-header";
import { ProjectCard } from "./project-card";

const ProjectSection = ({ recent }: { recent: boolean }) => {
  // Fetch Data here
  return (
    <section className="get-started-container">
      {recent === true && (
        <div style={{ width: "100%" }}>
          <TitleHeader title="Recents" path="my-games" />
          <div className="project-section-container">
            {[1, 2, 3, 4]?.map((i) => <ProjectCard key={i} />)}
          </div>
        </div>
      )}
      {recent === false && <EmptyProject />}
    </section>
  );
};

export { ProjectSection };
