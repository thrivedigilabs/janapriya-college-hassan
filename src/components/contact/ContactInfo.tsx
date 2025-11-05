import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "Janapriya Group of Institutions\nJanapriya Campus, Hassan, Karnataka",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@janapriyaedu.in",
      link: "mailto:info@janapriyaedu.in",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
  ];

  const socials = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-accent mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                    {detail.title}
                  </h3>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">
                      {detail.content}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-heading font-bold text-xl mb-6 text-foreground">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-6">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-accent hover:opacity-80 transition-opacity"
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.234567890123!2d76.0987654321!3d13.0123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQ0LjQiTiA3NsKwMDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Janapriya Campus Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
