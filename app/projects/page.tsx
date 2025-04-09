import { Card, CardContent } from "@/components/ui/card";
import { getFilteredPosts } from "@/lib/sanityUtils";
import Image from "next/image";

export const revalidate = 60;

export default async function Projects() {
    const posts = await getFilteredPosts();

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    All Projects
                </h1>
            </div>

            <div className="min-h-screen sm:h-fit">
                <div className="grid grid-cols-1 sm:grid-cols-3 m-5 gap-5">
                    {posts.map((post) => (
                        <Card key={post.slug.current} className="">
                            <Image src={post.mainImage?.asset.url || ""} alt="image" width={400} height={300} className="h-40 object-cover object-top rounded-t-xl" />
                            <CardContent className="">
                                <h3 className="text-sm text-teal-500 line-clamp-1">{post.title}</h3>
                                <p className="text-xs line-clamp-3">&quot;{post.description}&quot;</p>
                                <a href={post.link} target="_blank" className="group my-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
                                    Learn More
                                    <span className="block transition-all group-hover:ms-0.5">&rarr;</span>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
