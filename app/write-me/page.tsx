"use client";

import { useState } from "react";

export default function WriteMe() {
    const [formData, setFormData] = useState({ message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ message: e.target.value });
        setErrorMessage(""); // очищаем ошибку при вводе
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedMessage = formData.message.trim();

        if (!trimmedMessage) {
            setErrorMessage("Please enter a message before sending.");
            return;
        }

        try {
            const response = await fetch("/api/sendToTG", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: trimmedMessage }),
            });

            if (response.ok) {
                setFormData({ message: "" });
                setSuccessMessage("Message sent successfully!");
                setErrorMessage(""); // успешная отправка — очистить ошибку
            } else {
                setErrorMessage("Failed to send the message. Try again later.");
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Write me
                </h1>
            </div>
            <div className="w-full flex items-center flex-col">
                <h2 className="text-xl mt-2">You can write me a message in the telegram bot.</h2>
                <p>Be sure to include an address or phone number for feedback</p>
                <div className="max-w-[500px] mx-auto mt-8 w-full">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="p-2 mt-2 rounded-md border border-gray-300 w-full"
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                        />
                        <button
                            className="w-full p-2 mt-2 rounded-md bg-teal-700 text-white cursor-pointer"
                            type="submit"
                        >
                            Send
                        </button>
                        {errorMessage && (
                            <p className="text-red-600 mt-2 text-sm">{errorMessage}</p>
                        )}
                        {successMessage && (
                            <p className="text-green-600 mt-2 text-sm">{successMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
