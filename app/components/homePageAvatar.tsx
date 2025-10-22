"use client";

import { useState } from "react";
import Image from "next/image";
import Me from "../../public/me-pixel.png";
export default function HomePageAvatar() {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="relative w-48 h-48">
            {!isLoaded && (
                <div className="absolute inset-0 w-48 h-48 animate-pulse rounded-full bg-neutral-800"></div>
            )}
            <Image
                src={Me}
                alt="Dmitry Pligin"
                className={`h-48 w-48 rounded-full object-cover object-top ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoadingComplete={() => setIsLoaded(true)}
            />
        </div>
    );
}
