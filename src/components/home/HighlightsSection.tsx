import { motion } from "framer-motion";
import { Heart, Globe, GraduationCap, Users } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "120-Bed Multi-Specialty Hospital",
    description: "State-of-the-art clinical training facility",
  },
  {
    icon: Globe,
    title: "100% Placement",
    description: "In India & UK with global opportunities",
  },
  {
    icon: GraduationCap,
    title: "Value-Based Learning",
    description: "Education rooted in compassion and ethics",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Expert mentors with industry experience",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose Janapriya
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Excellence in education, infrastructure, and outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
