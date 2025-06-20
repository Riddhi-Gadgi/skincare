import { useState } from "react";
import "../../src/App.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, our products are dermatologist-tested and suitable for sensitive skin.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Products must be unused and in original packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to many countries.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "Use our product quiz or consult our skincare guide to find the best product for your skin type.",
    },
  ];
  return (
    <>
      <div className=" mt-126 flex gap-0 justify-around p-6">
        <div>
          <img
            className="rounded-2xl w-[480px] h-[520px]  object-cover"
            src="../../src/assets/p4.jpg"
          />
        </div>
        <div>
          <div className="bg-transparent mx-18 flex gap-2 w-55 h-9 rounded-full border-1  border-[#2D3B36]  px-4 py-2.5  text-[#2D3B36] ">
            <span className="bg-[#2D3B36] w-3 h-3 rounded-full "></span>
            <h3 className="text-xs "> Frequently Asked Question</h3>
          </div>
          <h3 className="text-[#2D3B36] text-4xl  max-w-95 mx-18 py-12">
            Answers to Your Skincare Questions, All in One Place.
          </h3>
          <div className="w-xl mx-auto px-16 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#2D3B36] rounded-md px-4 py-2 mb-2 mx-4 cursor-pointer bg-[#FEFFF4] w-100"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center ">
                  <h3 className="text-xs font-medium text-[#2D3B36] ">
                    {faq.question}
                  </h3>
                  <span className="text-xl text-[#2D3B36]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm text-[#2D3B36]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default FAQ;
