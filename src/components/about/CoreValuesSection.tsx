import { motion } from "framer-motion";
import { Heart, Shield, Globe } from "lucide-react";

const CoreValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "We believe healthcare is a calling to serve humanity with empathy and kindness.",
    },
    {
      icon: Shield,
      title: "Professional Integrity",
      description: "Upholding the highest ethical standards in education and healthcare practice.",
    },
    {
      icon: Globe,
      title: "Global Competence",
      description: "Preparing students to excel in healthcare careers worldwide with international standards.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
