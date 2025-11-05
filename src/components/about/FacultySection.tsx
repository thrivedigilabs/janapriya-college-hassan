import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useState } from "react";

const FacultySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faculty = [
    { name: "Dr. Rajesh Kumar", title: "Professor", dept: "Nursing", bio: "20+ years in nursing education" },
    { name: "Dr. Anita Desai", title: "Associate Professor", dept: "Paramedical", bio: "Expert in medical lab technology" },
    { name: "Dr. Suresh Reddy", title: "Professor", dept: "Allied Health", bio: "Specialist in physiotherapy" },
    { name: "Dr. Meera Nair", title: "Assistant Professor", dept: "Nursing", bio: "Pediatric nursing specialist" },
    { name: "Dr. Vikram Singh", title: "Associate Professor", dept: "Paramedical", bio: "Radiology & imaging expert" },
    { name: "Dr. Kavita Iyer", title: "Professor", dept: "Allied Health", bio: "Clinical research pioneer" },
    { name: "Dr. Arun Menon", title: "Assistant Professor", dept: "Nursing", bio: "Critical care specialist" },
    { name: "Dr. Deepa Rao", title: "Associate Professor", dept: "Paramedical", bio: "Dialysis technology expert" },
    { name: "Dr. Ramesh Patel", title: "Professor", dept: "Allied Health", bio: "Sports physiotherapy specialist" },
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
            Our Expert Faculty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced educators dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mb-4">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-1">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.dept}</p>
                <p className={`text-sm text-muted-foreground italic transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
