"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const emails = [
    { address: "abdomel2002@gmail.com", label: "Primary Gmail" },
    { address: "abdomouanaim9@gmail.com", label: "Alternative Gmail" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_l2s47w6",         // 👉 Ton Email Service ID
      "template_2y6ose9",        // 👉 Ton Template ID
      formData,
      "2SKmNHIg_3BceGTvC"      // 👉 Ta Public Key EmailJS
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error("Échec d'envoi :", err);
      alert("Erreur d'envoi du message.");
    });
  };

  return (
    <section id="CONTACT" className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 px-4 py-16 text-white">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-yellow-300">Contact</h2>
        <p className="text-gray-300">
          Have a project in mind or want to discuss an opportunity? Reach out directly by email or use the form below.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Direct contact</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            You can contact me directly through either of these Gmail addresses and I will get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-3">
            {emails.map((item) => (
              <a
                key={item.address}
                href={`mailto:${item.address}?subject=Portfolio%20Contact`}
                className="flex flex-col rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20"
              >
                <span className="text-sm font-semibold text-cyan-200">{item.label}</span>
                <span className="text-sm text-white">{item.address}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-purple-900/70 bg-slate-800/60 p-6 shadow-2xl shadow-purple-950/30 backdrop-blur">
          <div className="space-y-2">
            <Label className="text-yellow-300">Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-purple-900 bg-slate-900 text-white focus-visible:ring-yellow-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-yellow-300">Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="border-purple-900 bg-slate-900 text-white focus-visible:ring-yellow-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-yellow-300">Message</Label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              className="border-purple-900 bg-slate-900 text-white focus-visible:ring-yellow-300"
              required
            />
          </div>

          <Button type="submit" className="bg-yellow-300 font-semibold text-slate-900 hover:bg-yellow-400">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
