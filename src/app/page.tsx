import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Headshot */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
              <Image
                src="/headshot.jpg"
                alt="Kel Landry"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">👋</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600">Kel Landry</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
                Project Manager
              </span>
              <span className="hidden md:block text-gray-400">|</span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-semibold">
                Scrum Master
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
              Delivering exceptional results through agile methodologies and effective team leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/about" className="btn-primary text-center">
                Learn More About Me
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
