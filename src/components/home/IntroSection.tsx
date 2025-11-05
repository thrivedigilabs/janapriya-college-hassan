import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Welcome to Janapriya Group of Institutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A center of excellence in healthcare education. With decades of trust and service, we unite three leading institutes shaping compassionate healthcare professionals who serve humanity with skill, knowledge, and empathy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
