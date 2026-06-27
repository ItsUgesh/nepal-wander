import { getAllArticles } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Articles — NepalWander",
  description: "Travel guides, trekking tips and stories from Nepal",
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Travel Journal</p>
        <h1 className={styles.title}>Latest from the Trail</h1>
        <p className={styles.sub}>
          Stories, guides, and insider tips from guides and travellers who've walked every pass.
        </p>
      </div>

      <div className={styles.grid}>
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className={styles.card}
          >
            <div className={styles.cardThumb}>
              {article.travelArticleDetails.heroImage ? (
                <img
                  src={article.travelArticleDetails.heroImage.node.sourceUrl}
                  alt={article.title}
                  className={styles.cardImg}
                />
              ) : (
                <div className={styles.cardImgPlaceholder} />
              )}
              {article.travelArticleDetails.category && (
                <span className={styles.cardCategory}>
                  {article.travelArticleDetails.category}
                </span>
              )}
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              {article.travelArticleDetails.excerpt && (
                <p className={styles.cardExcerpt}>
                  {article.travelArticleDetails.excerpt}
                </p>
              )}
              <div className={styles.cardMeta}>
                {article.travelArticleDetails.readTime && (
                  <span>{article.travelArticleDetails.readTime}</span>
                )}
                {article.travelArticleDetails.category && (
                  <>
                    <span className={styles.dot}></span>
                    <span>{article.travelArticleDetails.category}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}