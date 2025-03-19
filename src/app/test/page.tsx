'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TestPage() {
    const [questions, setQuestions] = useState<
        { id: number; text: string; buttonColor: string; answers: string[] }[]
    >([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/data/testData.json'); // заменить на мок серевер
                const data = await response.json();
                setQuestions(data.questions);
            } catch (error) {
                console.error("Ошибка загрузки вопросов:", error);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerClick = async (answer: string) => {
        console.log(`Ответ: ${answer}`); // иммитация отправки ответа, изменить

        await fetch('/api/saveAnswer', { //Замеенить на реальный адрес если есть куда сохранять
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({questionId: questions[currentQuestionIndex].id, answer})
        });

        if (!questions[currentQuestionIndex]) {
            router.push('/finish');
            return;
        }

        if (currentQuestionIndex >= questions.length - 1) {
            router.push('/finish');
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {questions.length > 0 ? (
                <>
                    <div className="border p-4 mb-4 text-xl font-bold">
                        {questions[currentQuestionIndex].text}
                    </div>
                    <div className="flex flex-col gap-2">
                        {questions[currentQuestionIndex].answers.map((answer, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 rounded text-white"
                                style={{backgroundColor: questions[currentQuestionIndex].buttonColor}}
                                onClick={() => handleAnswerClick(answer)}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <p>Загрузка вопросов...</p>
            )}
        </div>
    );
}
