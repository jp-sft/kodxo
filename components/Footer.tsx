export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-textPrimary/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <span className="text-textPrimary font-bold text-xl">KODXO</span>
          </div>

          <div className="text-textSecondary text-sm text-center md:text-left">
            <p>© {currentYear} KODXO. Tous droits réservés.</p>
            <p className="mt-1">Basé à Yaoundé, Cameroun</p>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social links can be updated with actual URLs when available */}
            <a
              href="#contact"
              className="text-textSecondary hover:text-accent transition-colors"
              aria-label="Contact"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
