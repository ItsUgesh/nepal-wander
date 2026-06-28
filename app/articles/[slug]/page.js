import { getArticleBySlug } from "@/lib/api";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <main className={styles.main}>

      {/* Hero */}
      <div className={styles.hero}>
        {article.travelArticleDetails.heroImage && (
          <img
            src={article.travelArticleDetails.heroImage.node.sourceUrl}
            alt={article.title}
            className={styles.heroBg}
          />
        )}
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Link href="/articles" className={styles.backLink}>
            ← Back to Articles
          </Link>
          <div className={styles.meta}>
            {article.travelArticleDetails.category && (
              <span className={styles.category}>
                {article.travelArticleDetails.category}
              </span>
            )}
            {article.travelArticleDetails.readTime && (
              <span className={styles.readTime}>
                {article.travelArticleDetails.readTime}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{article.title}</h1>
          {article.travelArticleDetails.excerpt && (
            <p className={styles.excerpt}>
              {article.travelArticleDetails.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className={styles.contentWrap}>
        {article.content ? (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <p className={styles.noContent}>No content added yet.</p>
        )}
      </div>

    </main>
  );
}