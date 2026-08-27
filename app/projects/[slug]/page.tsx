import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug } from "@/lib/sanityUtils";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-4xl px-5 py-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                {post.title}
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
                {post.description}
            </p>

            {post.mainImage?.asset.url && (
                <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={1200}
                    height={800}
                    className="mt-8 w-full rounded-xl object-cover"
                />
            )}

            <div className="mt-8">
                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                >
                    Visit project →
                </a>
            </div>
        </article>
    );
}