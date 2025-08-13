import { desc, eq, sql } from "drizzle-orm";
import { db } from "..";
import { feedFollows, posts } from "../schema";
import { firstOrUndefined } from "./utils";

export async function createPost(
  title: string,
  url: string,
  description: string,
  published_at: Date,
  feed_id: string,
) {
  const result = await db
    .insert(posts)
    .values({
      title: title,
      url: url,
      description: description,
      publishedAt: published_at,
      feedID: feed_id      
    })
    .returning();

  return firstOrUndefined(result);
}

export async function getPostsForUser(userID: string, numPost: number) {
    const result = await db
    .select()
    .from(posts)
    .innerJoin(feedFollows, eq(feedFollows.feedId, posts.feedID))
    .where(eq(feedFollows.userId, userID))
    .orderBy(desc(posts.publishedAt))
    .limit(numPost)

    return result
}