"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
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
<section id="CONTACT" className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16 px-4 text-white">
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold mb-4 text-yellow-300">Contact</h2>
    <p className="text-gray-300">
      Do you have a project or a question? Send me a message!
    </p>
  </div>

  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-slate-800/60 p-6 rounded-2xl border border-purple-900 shadow-lg backdrop-blur">
    <div className="space-y-2">
      <Label className="text-yellow-300">Name</Label>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        className="bg-slate-900 text-white border-purple-900 focus-visible:ring-yellow-300"
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
        className="bg-slate-900 text-white border-purple-900 focus-visible:ring-yellow-300"
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
        className="bg-slate-900 text-white border-purple-900 focus-visible:ring-yellow-300"
        required
      />
    </div>

    <Button type="submit" className="bg-yellow-300 text-slate-900 font-semibold hover:bg-yellow-400">
      Send
    </Button>
  </form>
</section>
  );
}
