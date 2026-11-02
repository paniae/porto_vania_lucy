export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 py-10 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <div>
          <p className="text-sm font-medium text-white tracking-wide">
            Vania Lucy Syntya
          </p>
          <p className="text-xs text-neutral-400 mt-1">
            Full Stack &amp; Web Developer &bull; Informatics Graduate
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-neutral-400">
            &copy; {currentYear} Vania Lucy Syntya. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Top</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
