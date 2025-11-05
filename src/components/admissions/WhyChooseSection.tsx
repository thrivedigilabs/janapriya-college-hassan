import { motion } from "framer-motion";
import { FileCheck, Users, DollarSign, Globe } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: FileCheck,
      title: "Transparent Process",
      description: "Clear, straightforward admission procedures with no hidden requirements.",
    },
    {
      icon: Users,
      title: "Personalized Counselling",
      description: "One-on-one guidance to help you choose the right program for your career.",
    },
    {
      icon: DollarSign,
      title: "Affordable Value-Based Education",
      description: "Quality education at competitive fees with flexible payment options.",
    },
    {
      icon: Globe,
      title: "Global Placements",
      description: "Strong placement support with opportunities in India and abroad.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Why Choose Janapriya?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
