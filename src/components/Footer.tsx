import React, { useState } from 'react'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="bg-[#fafafa] pt-[60px] px-10 pb-10 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-[60px] max-md:grid-cols-2 max-md:gap-10 max-sm:grid-cols-1 max-sm:gap-10">
        {/* Newsletter Column */}
        <div className="flex flex-col">
          <h3 className="text-xs font-semibold tracking-[1.5px] uppercase text-[#333] mb-5 font-['Arial','Helvetica',sans-serif]">NEWSLETTER</h3>
          <p className="text-sm leading-relaxed text-[#666] mb-5 font-['Arial','Helvetica',sans-serif]">
            Subscribe to receive updates, access to exclusive sales, and more.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 border border-[#d0d0d0] bg-white text-sm font-['Arial','Helvetica',sans-serif] text-[#333] outline-none transition-colors duration-200 ease-in-out focus:border-black placeholder:text-[#999]"
              required
            />
            <button type="submit" className="py-3 px-6 bg-black text-white border-none text-xs font-semibold tracking-[1.5px] uppercase cursor-pointer font-['Arial','Helvetica',sans-serif] transition-all duration-200 ease-in-out hover:bg-[#333] active:opacity-80">
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Information Column */}
        <div className="flex flex-col">
          <h3 className="text-xs font-semibold tracking-[1.5px] uppercase text-[#333] mb-5 font-['Arial','Helvetica',sans-serif]">INFORMATION</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li className="m-0"><a href="/shipping-returns" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Shipping & Returns</a></li>
            <li className="m-0"><a href="/size-guide" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Size Guide</a></li>
            <li className="m-0"><a href="/faq" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">FAQ</a></li>
            <li className="m-0"><a href="/terms-conditions" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Terms & Conditions</a></li>
            <li className="m-0"><a href="/cookies-policy" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Cookies Policy</a></li>
            <li className="m-0"><a href="/privacy-policy" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Privacy Policy</a></li>
            <li className="m-0"><a href="/terms-of-service" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Terms of Service</a></li>
            <li className="m-0"><a href="/refund-policy" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Refund policy</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="flex flex-col">
          <h3 className="text-xs font-semibold tracking-[1.5px] uppercase text-[#333] mb-5 font-['Arial','Helvetica',sans-serif]">ABOUT</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li className="m-0"><a href="/about" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">About Yedder</a></li>
            <li className="m-0"><a href="/contact" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Contact</a></li>
            <li className="m-0"><a href="/stockists" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Stockists</a></li>
            <li className="m-0"><a href="/careers" className="text-sm text-[#666] no-underline font-['Arial','Helvetica',sans-serif] transition-colors duration-200 ease-in-out hover:text-black">Careers</a></li>
          </ul>
          <div className="flex gap-4 mt-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#999] transition-colors duration-200 ease-in-out hover:text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="block">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-[#999] transition-colors duration-200 ease-in-out hover:text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="block">
                <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.084 0 9.426-3.163 11.174-7.637-.15-.785-.896-4.193.178-5.95.97-1.44 2.334-2.01 3.78-1.36.41.19.78.44 1.088.75.31.31.56.68.75 1.09.65 1.446.08 2.81-1.36 3.78-1.757 1.074-5.165.328-5.95.178C15.163 21.426 12 17.084 12 12c0-5.628 5.372-12 12-12S36 6.372 36 12c0 5.084-3.163 9.426-7.637 11.174-.785-.15-4.193.896-5.95-.178-1.44-.97-2.01-2.334-1.36-3.78.19-.41.44-.78.75-1.088.31-.31.68-.56 1.09-.75 1.446-.65 2.81-.08 3.78 1.36 1.074 1.757.328 5.165.178 5.95C21.426 15.163 17.084 12 12 12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <h3 className="text-xs font-semibold tracking-[1.5px] uppercase text-[#333] mb-5 font-['Arial','Helvetica',sans-serif]">CONTACT</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#666] m-0 font-['Arial','Helvetica',sans-serif] leading-relaxed">150 Royal College Street,</p>
            <p className="text-sm text-[#666] m-0 font-['Arial','Helvetica',sans-serif] leading-relaxed">London</p>
            <p className="text-sm text-[#666] m-0 font-['Arial','Helvetica',sans-serif] leading-relaxed">NW1 0TA</p>
            <p className="text-sm text-[#666] m-0 font-['Arial','Helvetica',sans-serif] leading-relaxed">
              <a href="tel:+442072261061" className="text-[#666] underline transition-colors duration-200 ease-in-out hover:text-black">
                +44 (0)20 7226 1061
              </a>
            </p>
            <p className="text-sm text-[#666] m-0 font-['Arial','Helvetica',sans-serif] leading-relaxed">
              <a href="mailto:sales@yedder.com" className="text-[#666] underline transition-colors duration-200 ease-in-out hover:text-black">
                sales@yedder.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

