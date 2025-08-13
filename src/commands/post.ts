import { getPostsForUser } from "src/lib/db/queries/posts";
import { User } from "src/lib/db/schema";
import { isNumberObject } from "util/types";


export async function handlerBrowse( 
    cmdName: string,
    user: User,
    ...args: string[]
)  {
    let numPost: string | number = args[0]
    if (args.length !== 1) {
        throw new Error(`usage: ${cmdName} <num_post>`);
    }
    
    const regex = /^\d+$/;

    if (regex.test(numPost)) {
        numPost = Number(numPost)
    } else {
        throw new Error("Invalid input: only numeric characters are allowed.");
    }


    const result = await getPostsForUser(user.id, numPost)

    for (const item of result) {
        console.log(`* ${item.posts.title}`)
    }
}