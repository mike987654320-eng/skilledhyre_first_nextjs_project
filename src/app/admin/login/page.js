"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // If user is already logged in, redirect to admin
    if (localStorage.getItem("isUserLogin") === "true") {
      router.push("/admin/blogs");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === "1234") {
      localStorage.setItem("isUserLogin", "true");
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/blogs");
      }, 500); // 0.5s delay for animation/feedback
    } else {
      setError("Incorrect PIN");
      setPin("");
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    //   <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-sm">
    //     <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
    //       Admin Login
    //     </h1>

    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label
    //           htmlFor="pin"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Enter PIN (4 digits)
    //         </label>
    //         <input
    //           type="password"
    //           id="pin"
    //           maxLength={4}
    //           value={pin}
    //           onChange={(e) => {
    //             const val = e.target.value.replace(/\D/g, ""); // Only numbers
    //             if (val.length <= 4) setPin(val);
    //             setError("");
    //           }}
    //           className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-xl tracking-widest"
    //           placeholder="••••"
    //           required
    //         />
    //       </div>

    //       {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    //       {success && (
    //         <p className="text-green-500 text-sm text-center">
    //           Login successful!
    //         </p>
    //       )}

    //       <button
    //         type="submit"
    //         className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
    //         disabled={pin.length < 4}
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="pin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter PIN (4 digits)
            </label>
            <input
              type="password"
              id="pin"
              maxLength={4}
              value={pin}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ""); // Only numbers
                if (val.length <= 4) setPin(val);
                setError("");
              }}
              placeholder="••••"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-xl tracking-widest transition text-black"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm text-center">{success}</p>
          )}

          <button
            type="submit"
            disabled={pin.length < 4}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
