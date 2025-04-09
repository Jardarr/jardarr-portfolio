import { client } from "@/sanity/lib/client";
import { Post } from "./sanityTypes";

export async function getFilteredPosts(): Promise<Post[]> {

    const query = `*[_type == "post"]{
    title,
    link,
    slug,
    description,
    mainImage{asset->{url}}, 
    }`;

    return await client.fetch(query);
}