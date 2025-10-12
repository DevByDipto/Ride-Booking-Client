/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<any>({});

  // Simple validation
  const validate = () => {
    const newErrors:any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate submission
    //console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ color: "var(--foreground)" }}>
          Contact Us
        </h2>
        <p className="text-lg mb-12" style={{ color: "var(--muted-foreground)" }}>
          Have questions or suggestions? Fill out the form below and we will get back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg"
              style={{
                background: "var(--input)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg"
              style={{
                background: "var(--input)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 rounded-lg"
              style={{
                background: "var(--input)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="px-6 py-3 font-semibold rounded-full transition"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Submit
          </button>

          {success && (
            <p className="mt-4 text-green-500 font-semibold">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
