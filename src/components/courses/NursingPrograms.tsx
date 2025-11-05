import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import nursingImg from "@/assets/nursing-care.jpg";

const NursingPrograms = () => {
  const features = [
    "4-year comprehensive program",
    "Affiliated to RGUHS",
    "Approved by INC & KNC",
    "Integrated IELTS, OET & OSCE Training",
    "100% Placement (India & UK)",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-2 border-accent/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={nursingImg}
                  alt="Nursing Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-accent font-semibold text-sm">Healthcare Education</span>
                  <h2 className="font-heading font-bold text-3xl mt-2 text-foreground">
                    🩺 Janapriya College of Nursing
                  </h2>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                  B.Sc Nursing
                </h3>
                <ul className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-accent hover:opacity-90 w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default NursingPrograms;
