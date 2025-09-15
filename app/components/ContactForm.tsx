"use client"
import { useState } from "react";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setMessage("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'filipnajdovski95@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === 'OK') {
        setMessage("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setMessage("Error sending message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending message: ", err);
      setMessage("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Get in Touch</h2>
      
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 w-full rounded text-white text-xs lg:text-sm bg-slate-900/[0.6] shadow-md"
        required
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full rounded text-white text-xs lg:text-sm bg-slate-900/[0.6] shadow-md"
        required
      />
      
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="border p-2 w-full rounded text-white text-xs lg:text-sm bg-slate-900/[0.6] shadow-md"
        required
      />

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:bg-blue-400"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {message && (
        <div className={`text-white text-xs lg:text-sm w-full text-start bg-slate-900/[0.6] shadow-md p-3 rounded-md ${
          message.includes("Error") ? "bg-red-900/[0.6]" : "bg-green-900/[0.6]"
        }`}>
          {message}
        </div>
      )}
    </form>
  );
}