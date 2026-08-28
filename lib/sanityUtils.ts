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

export async function getPostBySlug(slug: string): Promise<Post | null> {
	const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        slug,
        description,
        text,
        technologies,
        link,
        mainImage{
            asset->{
                url
            }
        },
        gallery[]{
            asset->{
                url
            }
        },
        body,
        publishedAt,
        author{
            name
        },
        categories[]{
            title
        }
    }`;

	return await client.fetch(query, { slug });
}
