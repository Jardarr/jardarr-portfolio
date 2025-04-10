import Link from "next/link";

export default function CodeBlock() {
    return (
        <div className="whitespace-pre rounded-md shadow-2xl bg-neutral-800 text-xs text-white overflow-x-auto max-w-full p-4">
            <code>
                <span className="text-amber-300">{'{'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;name&quot;:</span> <span className="text-emerald-400">&quot;Dmitry&quot;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;introduction&quot;:</span> <span className="text-purple-500">{'{'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;description&quot;:</span> <span className="text-emerald-400">&quot;I am a front-end developer at an amateur level&quot;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">{'}'}</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;projects&quot;:</span> <span className="text-purple-500">{'{'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;portfolio&quot;:</span> <span className="text-emerald-400">&quot;All of my projects are available at <Link className="underline" href="/projects">Projects</Link>&quot;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">{'}'}</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;contact&quot;:</span> <span className="text-purple-500">{'{'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;email&quot;:</span> <a href="mailto:dmitrynordmann@gmail.com" className="text-emerald-400 underline">&quot;dmitrynordmann@gmail.com&quot;</a>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;telegram&quot;:</span> <a href="https://t.me/jardarr" className="text-emerald-400 underline">&quot;@Jardarr&quot;</a>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">{'}'}</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;skills&quot;:</span> <span className="text-purple-500">{'{'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;languages_and_tools&quot;:</span> <span className="text-sky-600">{'['}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">{'{'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-600">&quot;tool&quot;:</span> <span className="text-emerald-400">&quot;CSS3, SASS, TailwindCSS, HTML5, JavaScript, TypeScript, React, Next.js, Prisma, Drizzle, GROQ&quot;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">{'}'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-600">{']'}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">{'}'}</span><br />
                <span className="text-amber-300">{'}'}</span><br />        
            </code>
        </div>
    )
}
