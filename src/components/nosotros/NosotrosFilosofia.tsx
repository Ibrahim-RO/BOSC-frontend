import React, { useState } from 'react';
import imgFilosofia from '../../assets/Nosotros/Bosc_nosotros006.webp'

interface AccordionItem {
  title: string;
  content: string;
  isOpen?: boolean;
}

const PhilosophyValues: React.FC = () => {
  // Objeto con toda la data
  const philosophyData = {
    title: "FILOSOFÍA Y VALORES",
    description: () => (
      <>
        Nuestro compromiso es <span className="font-bold">promover y fomentar relaciones comerciales de alto valor</span> con profesionalismo, excelencia e innovación desde y hacia la comunidad corporativa mediante:
      </>
    ),
    imageUrl: imgFilosofia,
    imageAlt: "Imagen de Filosofia y Valores",
    items: [
      {
        title: "Integridad y honestidad",
        content: "Nos conducimos con transparencia en todas nuestras relaciones para consolidarlas y agregarles valor."
      },
      {
        title: "Comunicación efectiva", 
        content: "La asertividad, la claridad y la cortesía son factores que potencian la eficiencia de nuestros servicios y complementan."
      },
      {
        title: "Servicio de excelencia",
        content: "Oferecer a la alta gerencia un enfoque ene el análisis y toma decisiones oportunas y de valor."
      },
      {
        title: "Dirigir y detonar", 
        content: "Proponer un cambio que siempre considere la mitigación de los riesgos identificados."
      }
    ]
  };

  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>(
    philosophyData.items.map(item => ({ ...item, isOpen: false }))
  );

  const toggleItem = (index: number) => {
    setAccordionItems(prevItems =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false // Cierra los demás, togglea el clickeado
      }))
    );
  };

  return (
    <div className="bg-gray-100 w-full  mx-auto px-5 py-8 lg:px-30 lg:py-30 lg:pt-40">
      {/* Responsive layout: tablet (md) and desktop igual, mobile diferente */}
      <div className=" flex flex-col md:flex-row gap-8 md:gap-12">
        
        {/* Text Content - Left on tablet/desktop, top on mobile */}
        <div className="flex-1">
          <h1 className="font-title text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {philosophyData.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {philosophyData.description()}
          </p>

          {/* Accordion List */}
          <div className="border-y border-gray-200">
            {accordionItems.map((item, index) => (
              <div 
                key={index}
                className={`relative border-b border-gray-200 last:border-b-0 ${
                  item.isOpen ? 'border-l-0 ' : ''
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
        </div>

        {/* Image - Right on tablet/desktop, bottom on mobile */}
        <div className=" flex-1 flex items-center justify-center md:items-start lg:items-center lg:justify-center lg:-mt-20">
          <div className="w-full h-64 md:h-99 md:mt-10 lg:h-120 lg:w-95 bg-gray-100 overflow-hidden">
            <img 
              src={philosophyData.imageUrl} 
              alt={philosophyData.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyValues;