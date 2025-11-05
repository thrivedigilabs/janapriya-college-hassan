import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, UserPlus } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Join Us — Where Knowledge Heals<br />and Compassion Leads
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Take the first step towards a rewarding career in healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-accent font-semibold"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
