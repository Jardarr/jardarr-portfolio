"use client";

import { useState } from "react";
import Image from "next/image";

export default function WriteMe() {
    const [formData, setFormData] = useState({ message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;

        const trimmedMessage = formData.message.trim();

        if (!trimmedMessage) {
            setErrorMessage("Введите сообщение");
            return;
        }

        try {
            setLoading(true);
            setErrorMessage("");
            setSuccessMessage("");

            const response = await fetch("/api/sendToTG", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: trimmedMessage }),
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            setFormData({ message: "" });
            setSuccessMessage("Сообщение отправлено!");
        } catch {
            setErrorMessage("Ошибка отправки. Попробуйте снова.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-col justify-between items-center sm:flex-row space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Write me
                </h1>
                <div className="relative w-28 h-28">
                    {!isLoaded && (
                        <div className="absolute inset-0 w-28 h-28 animate-pulse rounded-2xl border bg-neutral-800" />
                    )}
                    <Image
                        src="/j-assist.png"
                        alt="assistant"
                        width={200}
                        height={200}
                        className={`w-28 h-28 rounded-2xl border border-teal-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                </div>
            </div>
            <div className="w-full flex items-center flex-col text-xs sm:text-xl text-center">
                <h2 className="mt-2">
                    You can write me a message in the telegram bot.
                </h2>
                <p>
                    Be sure to include an address or phone number for feedback
                </p>
                <div className="max-w-[500px] mx-auto mt-8 w-full">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="p-2 mt-2 rounded-md border border-gray-300 w-full"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            rows={4}
                        />
                        <button
                            className="w-full p-2 mt-2 rounded-md bg-teal-700 text-white cursor-pointer"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                        {errorMessage && (
                            <p className="text-red-600 mt-2 text-sm">
                                {errorMessage}
                            </p>
                        )}
                        {successMessage && (
                            <p className="text-green-600 mt-2 text-sm">
                                {successMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
