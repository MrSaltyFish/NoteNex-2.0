import { useState } from "react";
import axios, { AxiosError } from "axios";

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

      if (res.status == 201) {
        setStatus("✅ Feature request sent!");
      } else {
        setStatus("Server error: " + res.status);
      }

      setForm({ title: "", description: "", phoneNumber: "" });
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setStatus(
        `❌ ${error.response?.data?.message || "Something went wrong"}`
      );
    }
  };
  return (
    <div className="flex justify-center items-start min-h-[calc(100vh-64px)] pl-[60px] pt-[64px]">
      <div className="w-full max-w-xl px-6">
        <h1 className="text-[64px] font-bold text-[#1F0033] mb-12">
          Request Feature
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className={`font-medium ${
                status ? "text-gray-900" : "text-[#1F0033]"
              }`}
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              required
              className={`px-3 py-2 w-full border-2 ${
                status
                  ? "text-gray-900 border-gray-900"
                  : "text-[#1F0033] border-[#1F0033]"
              } focus:outline-none focus:ring-4 hover:ring-2 ring-inset focus:ring-[#1F0033]/50 hover:ring-[#1F0033]/30`}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className={`font-medium ${
                status ? "text-gray-900" : "text-[#1F0033]"
              }`}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={form.description}
              onChange={handleChange}
              required
              className={`px-3 py-2 w-full border-2 resize-none ${
                status
                  ? "text-gray-900 border-gray-900"
                  : "text-[#1F0033] border-[#1F0033]"
              } focus:outline-none focus:ring-4 hover:ring-2 ring-inset focus:ring-[#1F0033]/50 hover:ring-[#1F0033]/30`}
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phoneNumber"
              className={`font-medium ${
                status ? "text-gray-900" : "text-[#1F0033]"
              }`}
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="+91 XXXXX XXXXX"
              value={form.phoneNumber}
              onChange={handleChange}
              className={`px-3 py-2 w-full border-2 ${
                status
                  ? "text-gray-900 border-gray-900"
                  : "text-[#1F0033] border-[#1F0033]"
              } focus:outline-none focus:ring-4 hover:ring-2 ring-inset focus:ring-[#1F0033]/50 hover:ring-[#1F0033]/30`}
            />
          </div>

          {/* Status Message */}
          {status && (
            <div
              className="
                border-2 border-[#1F0033]
                bg-[#1F0033]/20
                text-[#1F0033]
                px-6 py-3
                text-sm
                transition-all duration-500 ease-in-out
                animate-fade-in
              "
            >
              {status}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className={`px-6 py-2 border-none ${
                status ? "bg-gray-900" : "bg-[#1F0033]"
              } text-white`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
