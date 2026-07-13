import type { Story } from "../lib/content";

export function StoryCard({
  story,
  variant = "standard",
}: {
  story: Story;
  variant?: "lead" | "compact" | "standard" | "archive";
}) {
  return (
    <article className={`story-card story-card--${variant}`}>
      <div className="story-card__image" aria-hidden="true" />
      <div className="story-card__body">
        <span className="story-card__category">{story.category}</span>
        <h3>{story.title}</h3>
        <p>{story.summary}</p>
        <small>
          {story.publishedAt} · {story.readingMinutes} min
        </small>
      </div>
    </article>
  );
}
