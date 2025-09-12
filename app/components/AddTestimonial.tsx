"use client"
import { useState } from "react"
import { db } from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"


function AddTestimonial() {
  const [form, setForm] = useState({
    name:"",
    company:"",
    companyPhoto:"",
    feedback:""
  });
  const [message, setMessage] = useState("");

  const DEFAULT_PHOTO = "/images/default-review.png";

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      companyPhoto: form.companyPhoto || DEFAULT_PHOTO
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "testimonials"), form);;
      setMessage("Feedback submitted!");
      setForm({name:"", company:"", companyPhoto:"", feedback:""})

    }catch(err){
      console.error("Error adding document: ", err);
      setMessage("Error, try again.")
    }
  }

  return (
     <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        onChange={handleChange}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="file"
        name="photo"
        placeholder="Add photo (Optional)"
        onChange={handleChange}
        className="border p-2 w-full rounded"
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
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p className="mt-2 bg-black text-white">{message}</p>}
    </form>
  )
}
export default AddTestimonial