/**
 * PUBLISHED CLIENT REVIEWS
 *
 * Clients submit reviews through the form on the website; each submission
 * is emailed to Willis for approval. To publish one, add it to this list
 * and redeploy. Nothing appears on the site without being added here.
 */
export interface PublishedReview {
  stars: 1 | 2 | 3 | 4 | 5;
  quote: string;
  by: string; // e.g. "Sarah M., Cambridge"
}

export const PUBLISHED_REVIEWS: PublishedReview[] = [
  // Example:
  // { stars: 5, quote: "Best tuning my piano has ever had.", by: "Sarah M., Cambridge" },
];
