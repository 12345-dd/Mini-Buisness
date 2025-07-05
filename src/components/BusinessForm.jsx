import { useForm } from "react-hook-form";
import React from "react";

export default function BusinessForm({ onSubmit }) {
  const {register,handleSubmit,formState: { errors },reset} = useForm();

  const submit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          {...register("name", { required: "Business name is required" })}
          className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., Cake & Co"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          {...register("location", { required: "Location is required" })}
          className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., Mumbai"
        />
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

