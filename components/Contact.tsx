"use client";

interface ContactProps {
  onOpenModal: () => void;
}

export default function Contact({ onOpenModal }: ContactProps) {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-neutral-200/80" id="contact">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
          Get in Touch
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-3">
          Contact Me
        </h2>
        <div className="w-12 h-1 bg-neutral-900 mx-auto mb-6 rounded-full" />

        <p className="text-base sm:text-lg font-medium text-neutral-800 mb-8">
          Have Any Project or Collaboration in Mind?
        </p>

        <button
          onClick={onOpenModal}
          className="bg-black hover:bg-neutral-800 text-white px-8 py-3.5 rounded-full font-medium text-sm sm:text-base tracking-wide shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
        >
          <span>Let&apos;s Chat</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
            <span>Available for new projects</span>
          </div>
          <span>&bull;</span>
          <a
            href="mailto:vanialucysyntya42@gmail.com"
            className="text-neutral-700 hover:text-black font-medium transition-colors underline underline-offset-2"
          >
            vanialucysyntya42@gmail.com
          </a>
          <span>&bull;</span>
          <div>Quick Response within 24 Hours</div>
        </div>
      </div>
    </section>
  );
}
