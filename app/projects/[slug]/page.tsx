import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug } from "@/lib/sanityUtils";

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;

	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<article className="mx-auto max-w-4xl px-5 py-10">
			<h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{post.title}</h1>

			{post.mainImage?.asset.url && <Image src={post.mainImage.asset.url} alt={post.title} width={1200} height={800} className="mt-8 w-full h-50 sm:h-110 rounded-xl object-cover object-center" />}

            {post.gallery && post.gallery.length > 0 && (
                <div className="mt-8 flex overflow-x-auto sm:justify-center gap-2">
                    {post.gallery.map((image) => (
                        <Image key={image.asset.url} src={image.asset.url} alt={post.title} width={150} height={350} className="rounded-xl object-cover" />
                    )).slice(1, 5)}
                </div>
            )}

			<p className="mt-4 text-gray-600 dark:text-gray-400">{post.text}</p>

			{post.technologies && post.technologies.length > 0 && (
				<div className="mt-6 flex flex-wrap gap-2">
					{post.technologies.map((technology) => (
						<span key={technology} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
							{technology}
						</span>
					))}
				</div>
			)}

			<div className="mt-8">
				<a href={post.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
					Visit project →
				</a>
			</div>
		</article>
	);
}
