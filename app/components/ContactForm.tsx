"use client"
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Field, SubmitButton, StatusMessage } from './FormControls';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = { tone: 'error' | 'success'; text: string } | null;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ tone: 'error', text: "Please fill in all fields" });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ tone: 'error', text: "Please enter a valid email address" });
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
        setStatus({ tone: 'success', text: "Message sent successfully! I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ tone: 'error', text: "Error sending message. Please try again." });
      }
    } catch (err) {
      console.error("Error sending message: ", err);
      setStatus({ tone: 'error', text: "Error sending message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Field name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />

      <Field
        name="email"
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Field
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        required
      />

      <SubmitButton pending={isSubmitting}>Send Message</SubmitButton>

      {status && <StatusMessage tone={status.tone}>{status.text}</StatusMessage>}
    </form>
  );
}