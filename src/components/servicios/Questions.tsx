import { useState } from "react";

type QuestionsData = {
    data: {
        title: string;
        content: string;
    }[]
}

const Questions = ( {data} : QuestionsData ) => {
    const [dataInfo, setDataInfo] = useState(
        data.map(item => ({ ...item, isOpen: false }))
    );

    const toggleItem = (index: number) => {
        setDataInfo(prevItems =>
            prevItems.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false
            }))
        );
    };

    return (
        <section className="max-w-5xl mx-auto my-10 p-3 space-y-10">
            <h2 className="text-4xl font-bold text-center">Preguntas frecuentes</h2>
            <div className="border-y border-gray-200">
                {dataInfo.map((item, index) => (
                    <div
                        key={index}
                        className={`relative border-b border-gray-200 last:border-b-0 ${item.isOpen ? 'border-l-0 ' : ''
                            }`}
                    >
                        {/* Border-l que cubre toda la altura */}
                        {item.isOpen && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cafeBosc"></div>
                        )}

                        {/* Accordion Header */}
                        <div
                            className="flex justify-between items-center py-4 px-2 md:px-4 hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={() => toggleItem(index)}
                        >
                            <span className={`text-lg ${item.isOpen ? 'font-bold' : 'font-normal'} text-gray-800 transition-all pl-2`}>
                                {item.title}
                            </span>
                            <span className="text-xl text-gray-600 font-bold">
                                {item.isOpen ? '-' : '+'}
                            </span>
                        </div>

                        {/* Accordion Content */}
                        {item.isOpen && (
                            <div className="pb-4">
                                <p className="text-gray-600 leading-relaxed py-2 px-4 md:px-6 font-normal pl-6">
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Questions