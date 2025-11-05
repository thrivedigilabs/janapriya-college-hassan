import { motion } from "framer-motion";

const CoursesHero = () => {
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
            Explore Career-Focused Healthcare Programs
          </h1>
          <p className="text-lg text-muted-foreground">
            Your pathway to a purposeful career in healthcare starts here
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesHero;
