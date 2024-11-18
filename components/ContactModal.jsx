"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false); // Reset the form submission state after 3 seconds
      onClose(); // Close the modal
    }, 3000); // Display the "Thank You" message for 3 seconds
  };

  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-50 overflow-y-auto"
      open={isOpen}
      onClose={onClose}
    >
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal Content */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8">
            {/* Conditional Rendering for Thank You Message */}
            {formSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-sm text-gray-600">
                  Your submission has been received. We'll get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <>
                <Dialog.Title className="text-lg font-bold mb-4 text-gray-900">
                  Schedule a Consultation
                </Dialog.Title>
                <p className="text-sm text-gray-600 mb-6">
                  Please fill out the form below, and one of our experts will
                  get back to you as soon as possible.
                </p>
                <form onSubmit={handleFormSubmit}>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                      placeholder="Write your message"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-right">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
