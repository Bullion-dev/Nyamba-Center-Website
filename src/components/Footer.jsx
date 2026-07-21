// src/components/Footer.jsx
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#16221A] text-[#F3E9D4] pt-16 pb-8 px-6 md:px-12 mt-auto border-t border-[#C3601E]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          {/* Organization Title */}
          <div className="md:col-span-6 lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#F3E9D4] leading-tight max-w-md">
              Nyamba Centre for Women and Community Empowerment
            </h2>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E]">
              Contact
            </span>
            <div className="flex flex-col gap-2 text-sm text-[#F3E9D4]/80">
              <a href="mailto:info@ncfwce.org" className="hover:text-[#C3601E] transition-colors">
                info@ncfwce.org
              </a>
              <p>Northern Region, Ghana</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E]">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2 text-sm text-[#F3E9D4]/80">
              <Link to="/aboutall" className="hover:text-[#C3601E] transition-colors">
                About Us
              </Link>
              <Link to="/allprograms" className="hover:text-[#C3601E] transition-colors">
                Programs
              </Link>
              <Link to="/privacy" className="hover:text-[#C3601E] transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

        </div>

        {/* Bottom Copyright Sub-bar */}
        <div className="border-t border-[#F3E9D4]/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F3E9D4]/60 tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} Nyamba Centre For Women and Community Empowerment. All rights reserved.
          </p>
          <p className="font-medium opacity-80">
            Northern Region &middot; Ghana
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;