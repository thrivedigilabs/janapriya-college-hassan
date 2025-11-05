import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labStudentsImg from "@/assets/lab-students.jpg";

const ParamedicalPrograms = () => {
  const programs = [
    {
      title: "DMLT",
      fullName: "Medical Lab Technology",
      duration: "2 years",
      eligibility: "10+2 with PCB",
      description: "Comprehensive training in laboratory diagnostics and medical technology.",
    },
    {
      title: "DRIT",
      fullName: "Radiology & Imaging",
      duration: "2 years",
      eligibility: "10+2 with PCB",
      description: "Advanced imaging techniques and radiological procedures training.",
    },
    {
      title: "DDT",
      fullName: "Dialysis & ECG Technology",
      duration: "2 years",
      eligibility: "10+2 with PCB",
      description: "Specialized training in dialysis procedures and cardiac monitoring.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4 text-foreground">
              ⚕️ Janapriya Institute of Paramedical Science
            </h2>
            <p className="text-muted-foreground text-lg">
              Empowering professionals for the nation's healthcare needs
            </p>
          </div>

          <div className="mb-8">
            <img
              src={labStudentsImg}
              alt="Paramedical Lab"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
                  <div className="mb-4">
                    <h3 className="font-heading font-bold text-2xl text-accent mb-2">
                      {program.title}
                    </h3>
                    <h4 className="font-semibold text-foreground">{program.fullName}</h4>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Duration:</span> {program.duration}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Eligibility:</span> {program.eligibility}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {program.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParamedicalPrograms;
