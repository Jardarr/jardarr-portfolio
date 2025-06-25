// app/api/sendToTG/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { message } = body;

    const chat_id = process.env.JARDARR_CHAT_ID;
    const bot_token = process.env.JARDARR_BOT_TOKEN;

    if (!chat_id || !bot_token) {
        return NextResponse.json({ message: "Environment variables not set" }, { status: 500 });
    }

    let text = `✔️Новое сообщение с сайта Jardarr portfolio!\n\n`;
    if (message) text += `📫: ${message}\n\n`;

    const api_url = `https://api.telegram.org/bot${bot_token}/sendMessage`;
    const post_data = {
        chat_id,
        text,
        parse_mode: "HTML",
    };

    try {
        const response = await fetch(api_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post_data),
        });

        if (response.ok) {
            return NextResponse.json({ message: "Message sent successfully" });
        } else {
            return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error sending message:", error);
        return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
    }
}
