"use client"

import { ContactForm } from "@/components/contact-form";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion, Variants } from "motion/react";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2
      }
   }
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardHoverVariants: Variants = {
   hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "hsl(var(--primary) / 0.5)",
      transition: { type: "spring", stiffness: 300 }
   }
};

export default function ContactPage() {
   return (
      <div className="overflow-hidden">
         <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-secondary py-20 md:py-28"
         >
            <div className="container mx-auto max-w-7xl px-4 text-center">
               <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-extrabold tracking-tight"
               >
                  Contact Us
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
               >
                  We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
               </motion.p>
            </div>
         </motion.section>

         <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto max-w-7xl px-4 py-16 md:py-24"
         >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
               <motion.div variants={itemVariants} className="h-full">
                  <motion.div variants={cardHoverVariants} whileHover="hover" className="h-full">
                     <Card className="text-center border shadow-lg h-full transition-colors">
                        <CardContent className="p-6 flex flex-col items-center h-full">
                           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                              <MapPin className="h-8 w-8" />
                           </div>
                           <div className="flex flex-col flex-grow">
                              <h3 className="text-lg font-semibold mb-2">Address, Location</h3>
                              <p className="text-sm text-muted-foreground mb-2 flex-grow">1/167 Attavanith Thottam, Grey Nagar, Erode, TamilNadu-638 056.</p>
                              <a className="text-primary text-sm font-medium hover:underline mt-auto" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">See on the map</a>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </motion.div>

               <motion.div variants={itemVariants} className="h-full">
                  <motion.div variants={cardHoverVariants} whileHover="hover" className="h-full">
                     <Card className="text-center border shadow-lg h-full transition-colors">
                        <CardContent className="p-6 flex flex-col items-center h-full">
                           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                              <Clock className="h-8 w-8" />
                           </div>
                           <div className="flex flex-col flex-grow">
                              <h3 className="text-lg font-semibold mb-2">Working hours</h3>
                              <ul className="list-none text-sm text-muted-foreground m-0 p-0">
                                 <li>Monday - Sunday</li>
                                 <li>9.30am - 6.00pm </li>
                              </ul>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </motion.div>

               <motion.div variants={itemVariants} className="h-full">
                  <motion.div variants={cardHoverVariants} whileHover="hover" className="h-full">
                     <Card className="text-center border shadow-lg h-full transition-colors">
                        <CardContent className="p-6 flex flex-col items-center h-full">
                           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                              <Phone className="h-8 w-8" />
                           </div>
                           <div className="flex flex-col flex-grow">
                              <h3 className="text-lg font-semibold mb-2">Phone numbers</h3>
                              <ul className="list-none text-sm text-muted-foreground m-0 p-0">
                                 <li><a className="text-primary hover:underline" href="tel:+917708580558">77085 80558</a></li>
                                 <li><a className="text-primary hover:underline" href="tel:+917708883764">77088 83764</a></li>
                              </ul>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </motion.div>

               <motion.div variants={itemVariants} className="h-full">
                  <motion.div variants={cardHoverVariants} whileHover="hover" className="h-full">
                     <Card className="text-center border shadow-lg h-full transition-colors">
                        <CardContent className="p-6 flex flex-col items-center h-full">
                           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                              <Mail className="h-8 w-8" />
                           </div>
                           <div className="flex flex-col flex-grow">
                              <h3 className="text-lg font-semibold mb-2">Email address</h3>
                              <ul className="list-none text-sm text-muted-foreground m-0 p-0">
                                 <li><a className="text-primary hover:underline" href="mailto:contact@argynix.com">contact@argynix.com</a></li>
                              </ul>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </motion.div>
            </div>
         </motion.section>

         <section className="container mx-auto max-w-7xl px-4 pb-16 md:pb-24">
            <div className="grid md:grid-cols-2 gap-12">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden shadow-lg h-full"
               >
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6916881708808!2d77.48626177477209!3d11.28405914962583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91338ec44a113%3A0x3447cb1cd57f6d8d!2sAttavanith%20Thottam!5e0!3m2!1sen!2sin!4v1754694241331!5m2!1sen!2sin"
                     width="100%"
                     height="100%"
                     style={{ border: 0, minHeight: '480px' }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
               >
                  <Card className="shadow-lg h-full border-t-4 border-t-primary">
                     <CardHeader>
                        <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <ContactForm />
                     </CardContent>
                  </Card>
               </motion.div>
            </div>
         </section>
      </div>
   )
}
