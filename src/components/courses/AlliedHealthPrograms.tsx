import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import alliedHealthImg from "@/assets/allied-health.jpg";

const AlliedHealthPrograms = () => {
  const programs = [
    {
      name: "BPT – Physiotherapy",
      duration: "4.5 years",
      eligibility: "10+2 PCB (50%)",
      placements: "Hospitals, Sports Centers",
    },
    {
      name: "B.Sc Medical Lab Technology",
      duration: "3 years",
      eligibility: "10+2 PCB (50%)",
      placements: "Diagnostic Labs, Hospitals",
    },
    {
      name: "B.Sc Radiology & Imaging",
      duration: "3 years",
      eligibility: "10+2 PCB (50%)",
      placements: "Imaging Centers, Hospitals",
    },
    {
      name: "B.Sc Anaesthesia & OT Technology",
      duration: "3 years",
      eligibility: "10+2 PCB (50%)",
      placements: "Operation Theatres, Hospitals",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4 text-foreground">
              🧬 Janapriya Institute of Allied Health Sciences
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive healthcare programs for tomorrow's professionals
            </p>
          </div>

          <div className="mb-12">
            <img
              src={alliedHealthImg}
              alt="Allied Health Sciences"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Comparison Chart */}
          <Card className="overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-accent">
                  <tr>
                    <th className="text-left p-4 font-heading font-bold text-primary-foreground">Program</th>
                    <th className="text-left p-4 font-heading font-bold text-primary-foreground">Duration</th>
                    <th className="text-left p-4 font-heading font-bold text-primary-foreground">Eligibility</th>
                    <th className="text-left p-4 font-heading font-bold text-primary-foreground">Career Paths</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-semibold text-foreground">{program.name}</td>
                      <td className="p-4 text-muted-foreground">{program.duration}</td>
                      <td className="p-4 text-muted-foreground">{program.eligibility}</td>
                      <td className="p-4 text-muted-foreground">{program.placements}</td>
                      <td className="p-4">
                        <Button size="sm" variant="outline">Apply</Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AlliedHealthPrograms;
