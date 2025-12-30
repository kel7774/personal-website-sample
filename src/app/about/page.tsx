import Image from "next/image";

export const metadata = {
  title: "About | Kel Landry",
  description: "Learn more about Kel Landry - Project Manager and Scrum Master",
};

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About <span className="text-blue-600">Me</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700">
              <Image
                src="/about-photo.jpg"
                alt="Kel Landry"
                width={256}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="lg:w-2/3 space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Kel Landry, a dedicated Project Manager and Certified Scrum Master with a passion for leading cross-functional teams to deliver exceptional results. With years of experience in agile methodologies and project delivery, I've had the privilege of working on diverse projects that have sharpened my skills in strategic planning, stakeholder management, and team collaboration.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in project management began with a curiosity for understanding how teams work best together. This curiosity evolved into a career focused on removing obstacles, fostering communication, and creating environments where creativity and productivity thrive. I believe that the best projects are built on a foundation of trust, transparency, and a shared vision.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Looking ahead, my career goals center on continuing to grow as a leader in the agile space, mentoring the next generation of project managers, and contributing to organizations that value innovation and continuous improvement. I'm always eager to take on new challenges that push the boundaries of what's possible and create meaningful impact for both teams and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
