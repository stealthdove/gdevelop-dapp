import {
    EmptyProject,
    ProjectCard
} from "@/components/home";
import "../../../components/styles.css";
import Image from "next/image";

export default function MyGames() {
  const project = true; // TODO: Get the projects from the api
  return (
    <main style={{ padding: "15px" }} className="min-h-[calc(100vh-140px)]">
      <section className="project-showcase-section">
        <div className="text-container title-header">
          <h1 style={{ fontSize: "16px", textAlign: "left" }}>My Games</h1>
          <Image
            alt="add-icon"
            src="/res/add.svg"
            width={44}
            height={44}
            style={{ paddingRight: "16px" }}
          />
        </div>
        <div
          className="project-showcase-container"
          style={project ? { justifyContent: "start" } : {}}
        >
          {project ? (
            <div className="project-section-container">
              {[1, 2, 3, 4, 5, 6]?.map((i) => <ProjectCard key={i} />)}
            </div>
          ) : (
            <EmptyProject />
          )}
        </div>
      </section>
    </main>
  );
}
