import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nursingImage from "@/assets/nursing-care.jpg";
import paramedicalImage from "@/assets/lab-students.jpg";
import alliedHealthImage from "@/assets/allied-health.jpg";

const institutions = [
  {
    title: "Janapriya College of Nursing",
    description: "Empowering compassionate nurses with global competencies and clinical excellence.",
    image: nursingImage,
  },
  {
    title: "Janapriya Institute of Paramedical Science",
    description: "Training skilled paramedical professionals for India's healthcare needs.",
    image: paramedicalImage,
  },
  {
    title: "Janapriya Institute of Allied Health Sciences",
    description: "Building expertise in physiotherapy, radiology, and specialized healthcare fields.",
    image: alliedHealthImage,
  },
];

const InstitutionCards = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Institutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three pillars of healthcare education excellence under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <motion.div
              key={institution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={institution.image}
                    alt={institution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {institution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {institution.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-accent"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionCards;
