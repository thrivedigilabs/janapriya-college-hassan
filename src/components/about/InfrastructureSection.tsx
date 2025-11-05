import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import classroomImg from "@/assets/classroom.jpg";
import simLabImg from "@/assets/simulation-lab.jpg";
import hospitalWardImg from "@/assets/hospital-ward.jpg";
import libraryImg from "@/assets/library.jpg";

const InfrastructureSection = () => {
  const facilities = [
    { title: "Modern Classrooms", image: classroomImg, desc: "State-of-the-art learning spaces" },
    { title: "Simulation Labs", image: simLabImg, desc: "Hands-on practical training" },
    { title: "Hospital Wards", image: hospitalWardImg, desc: "120-bed clinical facility" },
    { title: "Library", image: libraryImg, desc: "Extensive academic resources" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            World-Class Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience learning in facilities designed for excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {facilities.map((facility, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden group">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                      <div className="p-8 text-primary-foreground">
                        <h3 className="font-heading font-bold text-2xl mb-2">{facility.title}</h3>
                        <p className="text-primary-foreground/90">{facility.desc}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
