import React from 'react';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from the free brands package
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#12141e] pt-12 pb-8">
      {/* Footer Links */}
      <div className="container mx-auto px-6 lg:px-12 mt-12 border-t border-gray-700 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#about" className="hover:text-primaryColor transition">
                Who we are
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primaryColor transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primaryColor transition">
                Meet the Team
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#faq" className="hover:text-primaryColor transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-primaryColor transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-primaryColor transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: rayapputhanusiyan25062000@gmail.com</li>
            <li>Phone: +94-758050289</li>
            <li>Address: Ponnalai Junction, jaffna ,Sri Lanka</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primaryColor text-xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primaryColor text-xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primaryColor text-xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primaryColor text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} R.Thanusiyan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
