import { motion } from "framer-motion";
import chairmanImage from "@/assets/chairman.jpg";

const ChairmanMessage = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20" />
                <img
                  src={chairmanImage}
                  alt="Dr. Abdul Basheer - Chairman & CEO"
                  className="relative rounded-2xl w-full shadow-elegant"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="border-l-4 border-accent pl-6">
                <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
                  Chairman's Message
                </h2>
                <p className="text-accent font-semibold mb-6">Dr. Abdul Basheer</p>
                
                <blockquote className="text-lg text-muted-foreground mb-6 italic">
                  "Health is the greatest wealth. Our mission is to make the nation healthy, happy, and educated."
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  For over two decades, Janapriya Group of Institutions has been committed to nurturing healthcare professionals who combine clinical excellence with human compassion. Our vision extends beyond academic achievement — we aim to create leaders who serve with integrity, empathy, and a deep sense of purpose.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
