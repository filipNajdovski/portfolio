"use client"
import { useState } from "react"
import { db } from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

// Kept in step with firestore.rules — the rules reject anything outside these
// bounds, so validating here turns a permission-denied into a useful message.
const LIMITS = {
  name: { min: 2, max: 60 },
  company: { max: 80 },
  feedback: { min: 10, max: 1000 },
};

const DEFAULT_PHOTO = "/images/default-review.png";

function AddTestimonial() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    feedback: "",
    rating: 0,
  });
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const name = form.name.trim();
    const feedback = form.feedback.trim();
    if (name.length < LIMITS.name.min) return "Please enter your name.";
    if (name.length > LIMITS.name.max) return `Name must be under ${LIMITS.name.max} characters.`;
    if (form.company.trim().length > LIMITS.company.max)
      return `Company must be under ${LIMITS.company.max} characters.`;
    if (feedback.length < LIMITS.feedback.min)
      return `Please write at least ${LIMITS.feedback.min} characters of feedback.`;
    if (feedback.length > LIMITS.feedback.max)
      return `Feedback must be under ${LIMITS.feedback.max} characters.`;
    // the rules require 1-5, so a star-less submission would be rejected
    if (form.rating < 1 || form.rating > 5) return "Please choose a star rating.";
    return null;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const problem = validate();
    if (problem) {
      setMessage(problem);
      return;
    }

    setSending(true);
    try {
      // built explicitly: the rules use hasOnly, so stray keys are rejected
      await addDoc(collection(db, "testimonials"), {
        name: form.name.trim(),
        company: form.company.trim(),
        companyPhoto: DEFAULT_PHOTO,
        feedback: form.feedback.trim(),
        rating: form.rating,
      });
      setMessage("Feedback submitted, thank you!");
      setForm({ name: "", company: "", feedback: "", rating: 0 });
    } catch (err) {
      console.error("Error adding document: ", err);
      setMessage("Error, try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        maxLength={LIMITS.name.max}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        maxLength={LIMITS.company.max}
        className="border p-2 w-full rounded"
      />
      <textarea
        name="feedback"
        placeholder="Your feedback"
        value={form.feedback}
        onChange={handleChange}
        maxLength={LIMITS.feedback.max}
        className="border p-2 w-full rounded"
        required
      />

      {/* ⭐ Star Rating */}
      <div className="flex space-x-1 justify-start">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            aria-label={`Rate ${star} out of 5`}
            onClick={() => setForm({ ...form, rating: star })}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`text-3xl transition-colors ${
              star <= (hover || form.rating) ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <div className="text-white text-xs lg:text-sm w-fit text-start bg-slate-900/[0.6] shadow-md p-1 mb-5 rounded-md">Selected rating: {form.rating}</div>

      <button
        type="submit"
        disabled={sending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
      >
        {sending ? "Sending…" : "Submit"}
      </button>

      {message && <p className="mt-2 text-white text-xs lg:text-sm w-fit text-start bg-slate-900/[0.6] shadow-md p-1 mb-5 rounded-md">{message}</p>}
    </form>
  );
}

export default AddTestimonial;
