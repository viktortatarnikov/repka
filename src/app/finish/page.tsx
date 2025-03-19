'use client';

import { useRouter } from "next/navigation";

export default function FinishPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Спасибо!</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => router.push('/')}
            >
                Новый тест
            </button>
        </div>
    );
}