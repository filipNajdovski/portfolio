"use client"
import { useState } from "react"
import { db } from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

function AddTestimonial() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    companyPhoto: "",
    feedback: "",
    rating: 0, 
  });
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");

  const DEFAULT_PHOTO = "/images/default-review.png";

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      companyPhoto: form.companyPhoto || DEFAULT_PHOTO,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "testimonials"), form);
      setMessage("Feedback submitted!");
      setForm({ name: "", company: "", companyPhoto: "", feedback: "", rating: 0 });
    } catch (err) {
      console.error("Error adding document: ", err);
      setMessage("Error, try again.");
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
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="file"
        name="photo"
        onChange={handleChange}
        className="border p-2 w-full text-white text-xs lg:text-sm text-start bg-slate-900/[0.6] shadow-md mb-5 rounded-md"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <textarea
        name="feedback"
        placeholder="Your feedback"
        value={form.feedback}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />

      {/* ⭐ Star Rating */}
      <div className="flex space-x-1 justify-start">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
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

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>

      {message && <p className="mt-2 text-white text-xs lg:text-sm w-fit text-start bg-slate-900/[0.6] shadow-md p-1 mb-5 rounded-md">{message}</p>}
    </form>
  );
}

export default AddTestimonial;
