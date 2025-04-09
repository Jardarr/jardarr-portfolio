"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function postEntry(formData: FormData) {
    "use server";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await prisma.guestbook.create({
        data: {
            message: formData.get("entry") as string,
            username: "user",
        },
    });
    revalidatePath("/guestbook");
}