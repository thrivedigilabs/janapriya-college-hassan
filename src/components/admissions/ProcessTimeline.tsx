import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, UserCheck, CheckCircle2 } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Application Submission",
      description: "Fill out the online application form and submit required documents.",
    },
    {
      number: "2",
      icon: UserCheck,
      title: "Interview & Verification",
      description: "Attend a personal interview and document verification process.",
    },
    {
      number: "3",
      icon: CheckCircle2,
      title: "Admission Confirmation",
      description: "Receive admission letter and complete the enrollment process.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Admission Process Timeline
          </h2>
          <p className="text-muted-foreground">
            Three simple steps to begin your healthcare journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-accent/30" />
                  )}
                  <div className="bg-card rounded-lg p-6 border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-accent text-primary-foreground font-bold text-xl mb-4 mx-auto">
                      {step.number}
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-center mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            Download Prospectus
          </Button>
          <Button size="lg" variant="outline">
            Apply Online
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
