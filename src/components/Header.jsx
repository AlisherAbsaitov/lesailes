import { useEffect, useRef, useState } from "react";

// Nurbek

/**
 * Les Ailes — sayt header'i (bitta fayl, qo'shimcha fayl kerak emas)
 * - Sahifalar orasida almashish (nav)
 * - Ochiladigan qidiruv paneli
 * - Dark / Light mode almashtirgich (localStorage'da saqlanadi)
 *
 * Ishlatilishi:
 * <Header
 *   pages={[
 *     { label: "Bosh sahifa", href: "/" },
 *     { label: "Menyu", href: "/menu" },
 *     { label: "Biz haqimizda", href: "/about" },
 *     { label: "Bog'lanish", href: "/contact" },
 *   ]}
 *   activeHref="/"
 *   onSearch={(query) => console.log(query)}
 * />
 *
 * Talab: tailwind.config.js ichida  darkMode: "class"  bo'lishi kerak.
 */
export default function Header({
  pages = [
    { label: "Bosh sahifa", href: "/" },
    { label: "Menyu", href: "/menu" },
    { label: "Biz haqimizda", href: "/about" },
    { label: "Bog'lanish", href: "/contact" },
  ],
  activeHref = "/",
  onSearch,
}) {
  // ---- Dark mode holati (avval alohida hook edi, endi shu yerda) ----
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  // ---- Qidiruv va mobil menyu holati ----
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E7DCC9] bg-[#FBF7F0]/90 backdrop-blur
                 dark:border-[#3A322A] dark:bg-[#1F1B16]/90"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 text-[#2B2420] dark:text-[#F5EEE2]"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path d="M4 26C10 14 18 8 24 8C22 16 18 22 4 26Z" fill="#C08A2E" />
            <path
              d="M44 26C38 14 30 8 24 8C26 16 30 22 44 26Z"
              fill="#C08A2E"
              opacity="0.85"
            />
            <circle cx="24" cy="30" r="4" fill="#C08A2E" />
          </svg>
          <span
            className="font-serif text-xl tracking-wide"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Les Ailes
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {pages.map((page) => {
            const active = page.href === activeHref;
            return (
              <a
                key={page.href}
                href={page.href}
                className={`group relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? "text-[#2B2420] dark:text-[#F5EEE2]"
                    : "text-[#6B6053] hover:text-[#2B2420] dark:text-[#A99E8D] dark:hover:text-[#F5EEE2]"
                }`}
              >
                {page.label}
                <svg
                  className={`absolute -bottom-0.5 left-0 h-1.5 w-full transition-all duration-300 ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 -3 100 5" stroke="#C08A2E" strokeWidth="2" fill="none" />
                </svg>
              </a>
            );
          })}
        </nav>

        {/* O'ng tomondagi tugmalar */}
        <div className="flex items-center gap-2">
          {/* Qidiruv */}
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Qidirish..."
              onBlur={() => !query && setSearchOpen(false)}
              className={`h-9 rounded-full border border-[#E7DCC9] bg-white/70 px-4 text-sm text-[#2B2420]
                          placeholder:text-[#A99E8D] outline-none transition-all duration-300 ease-out
                          dark:border-[#3A322A] dark:bg-[#2A241D] dark:text-[#F5EEE2]
                          ${searchOpen ? "w-40 sm:w-56 opacity-100 mr-1" : "w-0 opacity-0 pointer-events-none"}`}
            />
            <button
              type={searchOpen ? "submit" : "button"}
              onClick={() => !searchOpen && setSearchOpen(true)}
              aria-label="Qidirish"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#6B6053]
                         transition-colors hover:bg-[#EFE6D6] hover:text-[#2B2420]
                         dark:text-[#A99E8D] dark:hover:bg-[#2A241D] dark:hover:text-[#F5EEE2]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          {/* Dark mode tugmasi */}
          <button
            onClick={toggleDark}
            aria-label={isDark ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#6B6053]
                       transition-colors hover:bg-[#EFE6D6] hover:text-[#2B2420]
                       dark:text-[#A99E8D] dark:hover:bg-[#2A241D] dark:hover:text-[#F5EEE2]"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                />
              </svg>
            )}
          </button>

          {/* Mobil menyu tugmasi */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menyu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#6B6053]
                       transition-colors hover:bg-[#EFE6D6] hover:text-[#2B2420] md:hidden
                       dark:text-[#A99E8D] dark:hover:bg-[#2A241D] dark:hover:text-[#F5EEE2]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil nav */}
      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-[#E7DCC9] bg-[#FBF7F0] px-4 py-3 md:hidden dark:border-[#3A322A] dark:bg-[#1F1B16]">
          {pages.map((page) => {
            const active = page.href === activeHref;
            return (
              <a
                key={page.href}
                href={page.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-[#EFE6D6] text-[#2B2420] dark:bg-[#2A241D] dark:text-[#F5EEE2]"
                    : "text-[#6B6053] hover:bg-[#EFE6D6] hover:text-[#2B2420] dark:text-[#A99E8D] dark:hover:bg-[#2A241D] dark:hover:text-[#F5EEE2]"
                }`}
              >
                {page.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}