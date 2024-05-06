import {
    TitleHeader,
    TutorialCard
} from "@/components/home";
import "../../../components/styles.css";

export default function MyGames() {
  return (
    <main style={{ padding: "15px" }}>
      <section style={{ padding: "16px 0px" }}>
        <TitleHeader title="Tutorials" />
        <div className="tutorial-section-container">
          {[1, 2, 3, 4, 5, 7, 8, 9]?.map((i) => <TutorialCard key={i} />)}
        </div>
      </section>
    </main>
  );
}
