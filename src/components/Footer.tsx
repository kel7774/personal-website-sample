import Link from 'next/link';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Kel Landry. All rights reserved.
          </div>

          {/* Built with Next.js */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            Built with
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <SiNextdotjs size={20} />
              Next.js
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors"
              aria-label="Spotify"
            >
              <FaSpotify size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
