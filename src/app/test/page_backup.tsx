// "use client";
//
// import { useState, useEffect } from "react";
//
// type AnswerOption = {
//     id: string;
//     text: string;
//     color: string;
// };
//
// export default function TestPage() {
//     const [media, setMedia] = useState<string | null>(null);
//     const [answers, setAnswers] = useState<AnswerOption[]>([]);
//     const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//
//     useEffect(() => {
//         fetchNext();
//     }, [selectedAnswer]); // Запрос при загрузке и при изменении ответа
//
//     async function fetchNext() {
//         try {
//             const response = await fetch(`/api/runs/123/next`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ media, answer: selectedAnswer }),
//             });
//
//             if (!response.ok) {
//                 throw new Error(`Ошибка загрузки: ${response.status} ${response.statusText}`);
//             }
//
//             const data = await response.json();
//             console.log("Ответ сервера:", data);
//             if (!data.media) {
//                 window.location.href = "/complete"; // Переход на страницу завершения
//                 return;
//             }
//
//             setMedia(data.media);
//             setAnswers(data.answers);
//         } catch (error) {
//             console.error("Ошибка при загрузке:", error);
//         }
//     }
//
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen p-4">
//             {media && (
//                 <div className="mb-4">
//                     <img src={media} alt="Медиа контент" className="max-w-full h-auto" />
//                 </div>
//             )}
//             <div className="grid grid-cols-2 gap-4">
//                 {answers.map(({ id, text, color }) => (
//                     <button
//                         key={id}
//                         className={`px-4 py-2 text-white rounded ${color}`}
//                         onClick={() => setSelectedAnswer(id)}
//                     >
//                         {text}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }
