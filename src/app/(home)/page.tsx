import { Suspense } from "react";
import "../../components/styles.css";
import { ProjectSection, TitleHeader, TutorialCard } from "@/components/home";

export default function Home() {
  return (
    <main style={{ padding: "15px" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectSection recent={true} />
      </Suspense>
      {/* recent: if array has ele -> show recent projects -> replace with actual sliced arr */}
      <section style={{ padding: "16px 0px" }}>
        <TitleHeader title="Tutorials" path="tutorials" />
        <div className="tutorial-section-container">
          {[1, 2, 3, 4, 5]?.map(
            (i) => <TutorialCard key={i} />
          )}
        </div>
      </section>
    </main>
  );
}
