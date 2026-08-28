import { PortableTextBlock } from "sanity";

interface Post {
	body: PortableTextBlock[];
	description: string;
	title: string;
	link: string;
	text: string;
    technologies?: string[];
	slug: { current: string };
	mainImage?: { asset: { url: string } };
	gallery?: { asset: { url: string; }; }[];
	publishedAt: string;
	author?: { name: string };
	categories?: { title: string }[];
}

export type { Post };
