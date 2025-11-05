import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg text-muted-foreground italic">
            "Your journey in healthcare begins with Janapriya — where knowledge meets kindness."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
