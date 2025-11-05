import { motion } from "framer-motion";
import chairmanImg from "@/assets/dr-basheer.jpg";
import principalImg from "@/assets/principal.jpg";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Dr. Abdul Basheer",
      title: "Chairman & CEO",
      image: chairmanImg,
      message: "Health is the greatest wealth. Our mission is to make the nation healthy, happy, and educated. At Janapriya, we believe that true education transforms not just individuals, but entire communities. Every healthcare professional we nurture becomes an agent of positive change, bringing hope and healing wherever they serve.",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Principal",
      message: "Academic excellence combined with human values is the foundation of our institution. We are committed to providing world-class education while ensuring our students develop the compassion and ethics essential for healthcare professionals. Our focus is not just on creating skilled practitioners, but on shaping caring individuals who will serve humanity with dedication and integrity.",
      image: principalImg,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-center mb-16 text-foreground"
        >
          Our Leadership
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background rounded-lg shadow-md overflow-hidden border border-border"
            >
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-accent font-medium">{leader.title}</p>
                  </div>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{leader.message}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
