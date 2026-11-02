"use client";

import { useState, useEffect, FormEvent } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialScope = "",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectScope: initialScope ? `Regarding ${initialScope}: ` : "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [emailUrls, setEmailUrls] = useState({ mailto: "", gmail: "" });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const targetEmail = "vanialucysyntya42@gmail.com";
    const subject = `Project Inquiry from ${formData.name.trim()}`;
    const bodyContent = `Hi Vania,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nProject Scope & Details:\n${formData.projectScope.trim()}\n\n---\nSent from Portfolio Website`;

    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    setEmailUrls({ mailto: mailtoLink, gmail: gmailLink });

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch(() => null);

      // Trigger email client directly
      window.location.href = mailtoLink;

      setStatus("success");
    } catch (err: unknown) {
      window.location.href = mailtoLink;
      setStatus("success");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    setEmailUrls({ mailto: "", gmail: "" });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >

      <div className="absolute inset-0" onClick={handleReset} />

      <div className="relative z-10 bg-white text-neutral-900 w-full max-w-lg rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl p-6 sm:p-8">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-headline text-xl font-bold text-neutral-900 mb-2">
              Pesan Siap Dikirim!
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              Pesan Anda telah disiapkan untuk dikirim ke <span className="font-semibold text-neutral-900">vanialucysyntya42@gmail.com</span>. Jika aplikasi email tidak terbuka otomatis, silakan pilih salah satu opsi berikut:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-5">
              <a
                href={emailUrls.mailto}
                className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full font-medium text-xs tracking-wide shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Buka Aplikasi Email</span>
              </a>
              <a
                href={emailUrls.gmail}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 px-5 py-2.5 rounded-full font-medium text-xs tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                <span>Kirim via Gmail Web</span>
              </a>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-neutral-500 hover:text-neutral-800 underline cursor-pointer"
            >
              Selesai &amp; Tutup
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1 block">
                Connect With Vania
              </span>
              <h3 id="modal-title" className="font-headline text-2xl font-bold text-neutral-900">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Pesan akan langsung diarahkan ke email <span className="text-neutral-800 font-medium">vanialucysyntya42@gmail.com</span>.
              </p>
            </div>

            {status === "error" && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === "submitting"}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="company@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === "submitting"}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1.5">
                  Project Scope &amp; Details
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your product requirements, timeline, or idea..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  disabled={status === "submitting"}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm tracking-wide shadow-md mt-2 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-95"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Mengarahkan ke Email...</span>
                  </>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Kirim Pesan ke Vania</span>
                  </span>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
