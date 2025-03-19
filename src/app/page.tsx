'use client'

import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { useRouter} from "next/navigation";

export default function HomePage() {
    const [name, setName] = useState("");
    const router = useRouter();

    const handleStart = () => {
        router.push("/test");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Введите имя</h1>
            <Input value={name} onChange={setName} />
            <Button disabled={!name} onClick={handleStart} />
        </div>
    );
}
