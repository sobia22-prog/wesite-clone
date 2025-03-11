import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Why should I choose a Noovo camper van?",
      answer:
        "Whether you seek part-time or full-time van life, Noovo is designed with you in mind. Our engineering team has optimized innovative technology within a stunning, super-light design. With ample storage for all your essentials, a full-time bathroom, a comfortable bed (or two!), and easy maneuverability, Noovo vans give you all the comforts of home while on the road.",
    },
    {
      question: "What are the layouts currently available?",
      answer: "We offer three layouts: <br>- Noovo Lite, ideal for full-time living or weekend adventures. <br>- Noovo Pop, perfect for families or anyone who needs more sleeping space. <br>- Noovo Plus, a super high roof van with an elevator bed. <br>All of them are off-grid capable with a hot shower and full-time toilet.",
    },
    {
      question: "What van chassis do you work on?",
      answer: "We work on a range of van chassis. Please contact us for more information.",
    },
    {
      question: "Do you offer financing?",
      answer: "Yes, we offer financing options. Please contact us for more information.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl">{expandedIndex === index ? "x" : "+"}</span>
              </div>
              {expandedIndex === index && (
                <div className="mt-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800">
            Read more FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;