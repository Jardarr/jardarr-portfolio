import CodeBlock from "./components/codeBlock";
import Link from "next/link";
import HomePageAvatar from "./components/homePageAvatar";

export default function Home() {
	return (
		<div className="divide-y divide-gray-100 dark:divide-gray-700">
			<div className="space-y-2 pt-5 pb-8 md:space-x-5">
				<h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">Home</h1>
			</div>
			<div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
				<div className="flex flex-col items-center pt-8">
					<HomePageAvatar />
					<h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Dmitry Pligin</h3>
					<p className="text-gray-500 dark:text-gray-300 text-center">Hey my name is Dmitry and i am a frontend developer</p>
					<div className="flex pt-6 space-x-5">
						<a href="https://github.com/Jardarr" target="_blank">
							<svg viewBox="0 0 1024 1024" aria-label="github" fill="currentColor" className="w-8 h-8">
								<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
							</svg>
						</a>
						<Link href="/write-me">
							<svg viewBox="0 0 24 24" aria-label="Write-me page" fill="currentColor" className="w-8 h-8">
								<path d="M11.994 2a10 10 0 1010 10 10 10 0 00-10-10zm3.18 15.152a.705.705 0 01-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 01-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258z" />
							</svg>
						</Link>
						<a href="mailto:dmitrynordmann@gmail.com" target="_blank">
							<svg viewBox="0 0 24 24" aria-label="gmail" fill="currentColor" className="w-8 h-8">
								<path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
							</svg>
						</a>
						<a rel="me" href="https://mastodon.social/@jrdrr" target="_blank" className="inline-flex items-center">
							<svg viewBox="0 0 480 511.475" aria-label="Mastodon" fill="currentColor" className="w-7 h-7">
								<path d="M478.065 113.237c-7.393-54.954-55.29-98.266-112.072-106.656C356.413 5.162 320.121 0 236.043 0h-.626c-84.099 0-102.141 5.162-111.72 6.581C68.498 14.738 18.089 53.653 5.859 109.26c-5.882 27.384-6.51 57.747-5.416 85.594C2 234.794 2.302 274.662 5.93 314.438a562.647 562.647 0 0013.09 78.437c11.625 47.653 58.686 87.311 104.793 103.494a281.07 281.07 0 00153.315 8.09 223.879 223.879 0 0016.578-4.533c12.368-3.929 26.855-8.323 37.507-16.043a1.198 1.198 0 00.486-.928v-38.544a1.12 1.12 0 00-.437-.879 1.134 1.134 0 00-.957-.215 424.764 424.764 0 01-99.49 11.626c-57.665 0-73.172-27.361-77.611-38.75a120.008 120.008 0 01-6.745-30.549 1.048 1.048 0 01.094-.51c.07-.161.178-.304.317-.415a1.094 1.094 0 01.982-.213 417.004 417.004 0 0097.865 11.624c7.927 0 15.834 0 23.761-.213 33.156-.928 68.105-2.625 100.722-8.997.816-.16 1.63-.301 2.327-.508 51.455-9.883 100.423-40.894 105.397-119.421.184-3.092.652-32.382.652-35.588.021-10.904 3.509-77.344-.511-118.166zm-82.796 61.744V311.51h-54.104V179.003c0-27.897-11.627-42.126-35.273-42.126-25.998 0-39.018 16.834-39.018 50.073v72.534h-53.776V186.95c0-33.239-13.045-50.073-39.04-50.073-23.507 0-35.249 14.229-35.249 42.126V311.51H84.73V174.981c0-27.896 7.121-50.059 21.366-66.488 14.693-16.388 33.969-24.805 57.893-24.805 27.692 0 48.618 10.648 62.569 31.919l13.464 22.597 13.485-22.597c13.95-21.271 34.876-31.919 62.52-31.919 23.903 0 43.177 8.417 57.919 24.805 14.231 16.413 21.337 38.576 21.323 66.488z" />
							</svg>
						</a>
						<a rel="me" href="https://x.com/jardarrrr" target="_blank" className="inline-flex items-center">
							<svg viewBox="0 0 512 462.799" aria-label="x.com" fill="currentColor" className="w-6 h-6">
								<path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
							</svg>
						</a>
						<a rel="me" href="https://www.linkedin.com/in/dmitry-pligin/" target="_blank" className="inline-flex items-center">
							<svg viewBox="0 0 34 34" aria-label="LinkedIn" fill="currentColor" className="w-6 h-6">
								<path d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"></path>
								<path d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"></path>
							</svg>
						</a>
					</div>
				</div>
				<div className="prose font-thin dark:prose-invert max-w-none prose-lg pt-8 pb-7 xl:col-span-2">
					<p>Hey everyone my name is Dmitry, i am a Frontend developer based in Saransk/Russia</p>
					<p>
						I enjoy building applications using React. When I discovered React, I was amazed by its interactivity and speed. Its virtual DOM and efficient rendering engines allow me to
						create efficient user interfaces that respond to user action in real time.
					</p>
					<p>
						Creating applications with React is the perfect tool for self-expression and creativity. I m excited to continue this journey, honing my skills and inspiring others in the
						process.
					</p>
				</div>
			</div>
			<div className="m-4">
				<CodeBlock />
			</div>
		</div>
	);
}
