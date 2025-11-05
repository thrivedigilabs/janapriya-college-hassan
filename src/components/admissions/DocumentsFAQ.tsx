import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const DocumentsFAQ = () => {
  const documents = [
    "10th & 12th Mark Sheets",
    "Transfer Certificate",
    "Migration Certificate (if applicable)",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy",
    "Caste Certificate (if applicable)",
  ];

  const faqs = [
    {
      question: "What is the eligibility for B.Sc Nursing?",
      answer: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology with minimum 50% marks.",
    },
    {
      question: "Are hostel facilities available?",
      answer: "Yes, we provide separate hostel facilities for both boys and girls with all modern amenities.",
    },
    {
      question: "What are the placement opportunities?",
      answer: "We have 100% placement record with opportunities in top hospitals across India and abroad, including UK, UAE, and other countries.",
    },
    {
      question: "Is there any scholarship available?",
      answer: "Yes, we offer merit-based scholarships and support for economically weaker students. Details are provided during admission.",
    },
    {
      question: "What is the fee structure?",
      answer: "Fee structure varies by program. Please contact our admission office or download the prospectus for detailed information.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
              Required Documents
            </h2>
            <Card className="p-6 border border-border">
              <ul className="grid md:grid-cols-2 gap-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsFAQ;
