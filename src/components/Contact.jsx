import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../libs/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all the fields."); // Show error toast
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact/submit`,
        form,
        {
          headers: {
            Authorization: import.meta.env.VITE_AUTH_MESSAGE,
          },
        }
      );

      toast.success("Form Submitted successfully!"); // Show success toast
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to Submit form. Please try again."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse bg-transparent gap-10 overflow-hidden`}>
      <Toaster position="bottom-center" reverseOrder={false} /> {/* Toast container */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-zinc-600 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-300 py-4 px-6 placeholder:text-gray-700 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-gray-300 py-4 px-6 placeholder:text-gray-700 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-gray-300 py-4 px-6 placeholder:text-gray-700 text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

                    <button
            type="submit"
            className="bg-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary hover:bg-gray-400 transition-all"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");