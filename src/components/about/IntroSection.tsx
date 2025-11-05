import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
            Rooted in Values, Growing with Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, Janapriya Group of Institutions has been a beacon of excellence 
            in healthcare education. Founded on the principles of compassion, integrity, and service 
            to humanity, we have nurtured thousands of healthcare professionals who are making a 
            difference across India and the globe. Our commitment goes beyond academics — we build 
            character, instill values, and prepare our students to serve with empathy and expertise. 
            Every student who walks through our doors becomes part of a legacy dedicated to healing, 
            care, and the betterment of society.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
