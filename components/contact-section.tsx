"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Briefcase, DollarSign, Building2, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessDescription: "",
    projectType: "web-development",
    budget: "quote",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            businessName: "",
            businessDescription: "",
            projectType: "web-development",
            budget: "quote",
            message: "",
          });
        }, 5000);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            Let's <span className="text-accent text-glow">Collaborate</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            Have a project in mind? Whether it's a new business venture or a digital transformation, I'm here to help bring your vision to life.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-[2rem] p-8 md:p-16 shadow-2xl relative"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Send className="w-10 h-10 text-accent animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold">Message Sent!</h3>
              <p className="text-muted-foreground text-lg">
                Thank you for reaching out. I'll get back to you at <span className="text-foreground font-medium">{formData.email}</span> as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4" /> Your Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="full-stack">Full Stack Solution</option>
                    <option value="consulting">Tech Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                  >
                    <option value="quote">Get a Quote</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k+">$5,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessDescription" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Business Description
                  </label>
                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    rows={1}
                    placeholder="What do you do?"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/30 resize-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Project Details
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me more about your project goals..."
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={cn(
                    "w-full bg-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]",
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-light">
            Or reach out directly at <a href="mailto:maciekgeneja@gmail.com" className="text-accent hover:underline decoration-accent/30 underline-offset-4">maciekgeneja@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};
