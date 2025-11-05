import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To nurture skilled, compassionate, and globally competent healthcare professionals who serve humanity with excellence and empathy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To serve humanity through education rooted in values, science, and empathy — creating healthcare professionals who heal with both skill and compassion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
