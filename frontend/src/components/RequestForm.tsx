import { useState } from "react";
import axios from "axios";

const RequestForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    phoneNumber: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/request-feature`,
        form
      );
      setStatus("✅ Feature request sent!");
      setForm({ title: "", description: "", phoneNumber: "" });
    } catch (err: any) {
      setStatus(`❌ ${err.response?.data?.message || "Something went wrong"}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Feature Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Feature Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number (optional)"
        value={form.phoneNumber}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default RequestForm;
