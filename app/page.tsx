import Image from "next/image";
import Me from "../public/me.jpg";

export default function Home() {
	return (
		<div className="divide-y divide-gray-100 dark:divide-gray-700">
			<div className="space-y-2 pt-5 pb-8 md:space-x-5">
				<h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
					Home
				</h1>
			</div>
			<div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
				<div className="flex flex-col items-center pt-8">
					<Image
						src={Me}
						alt="Dmitry Pligin"
						className="h-48 w-48 rounded-full object-cover object-top"
					/>
					<h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
						Dmitry Pligin
					</h3>
					<p className="text-gray-500 dark:text-gray-300 text-center">
						Hey my name is Dmitry and i am a frontend developer
					</p>
					<div className="flex pt-6 space-x-5">
						<a href="https://github.com/Jardarr" target="_blank">
							<svg
								viewBox="0 0 1024 1024"
								fill="currentColor"
								className="w-8 h-8"
							>
								<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
							</svg>
						</a>
						<a href="https://t.me/jardarr" target="_blank">
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-8 h-8"
							>
								<path d="M11.994 2a10 10 0 1010 10 10 10 0 00-10-10zm3.18 15.152a.705.705 0 01-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 01-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258z" />
							</svg>
						</a>
						<a href="mailto:dmitrynordmann@gmail.com" target="_blank">
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
								<path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
							</svg>
						</a>
					</div>
				</div>
				<div className="prose dark:prose-invert max-w-none prose-lg pt-8 pb-7 xl:col-span-2">
					<p>
						Hey everyone my name is Dmitry, i am a Frontend developer based in
						Saransk/Russia
					</p>
					<p>
						I enjoy building applications using React. When I discovered React,
						I was amazed by its interactivity and speed. Its virtual DOM and
						efficient rendering engines allow me to create efficient user
						interfaces that respond to user action in real time.
					</p>
					<p>
						Creating applications with React is the perfect tool for
						self-expression and creativity. I m excited to continue this
						journey, honing my skills and inspiring others in the process.
					</p>
				</div>
			</div>
		</div>
	);
}
