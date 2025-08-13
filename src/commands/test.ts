import { getNextFeedToFetch } from "src/lib/db/queries/feeds";

export async function handlerTest(_: string) {
    await getNextFeedToFetch()
}