import { FaCertificate, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const metadata = {
  title: "CV | Kel Landry",
  description: "Professional experience and certifications of Kel Landry",
};

export default function CV() {
  const certifications = [
    {
      name: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      date: "2023",
      description: "Demonstrated fundamental knowledge of Scrum framework and ability to apply Scrum in teams.",
    },
    {
      name: "Project Management Professional (PMP)",
      issuer: "Project Management Institute (PMI)",
      date: "2022",
      description: "Globally recognized certification validating expertise in project management methodologies and best practices.",
    },
  ];

  const experience = [
    {
      title: "Senior Project Manager",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      responsibilities: [
        "Lead cross-functional teams of 15+ members across multiple concurrent projects",
        "Implemented agile methodologies resulting in 30% improvement in delivery time",
        "Manage project budgets exceeding $2M annually",
        "Facilitate daily standups, sprint planning, and retrospectives",
      ],
    },
    {
      title: "Scrum Master",
      company: "Digital Innovations LLC",
      period: "2019 - 2021",
      responsibilities: [
        "Coached 3 development teams in Scrum practices and agile principles",
        "Reduced sprint cycle time by 25% through process optimization",
        "Facilitated resolution of impediments and improved team velocity",
        "Collaborated with Product Owners to refine and prioritize backlogs",
      ],
    },
    {
      title: "Project Coordinator",
      company: "Global Systems Corp.",
      period: "2017 - 2019",
      responsibilities: [
        "Coordinated project schedules and resource allocation",
        "Maintained project documentation and status reports",
        "Assisted in risk identification and mitigation planning",
        "Supported senior project managers in stakeholder communications",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Business Administration",
      school: "State University",
      year: "2017",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Curriculum <span className="text-blue-600">Vitae</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          My professional journey and qualifications
        </p>

        {/* Certifications Section - Highlighted */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <FaCertificate className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card border-2 border-yellow-400 dark:border-yellow-600 bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-400 dark:bg-yellow-600 rounded-full">
                    <FaCertificate className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Earned: {cert.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <FaBriefcase className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="card relative pl-8 border-l-4 border-blue-600">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-600 mt-1.5">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <FaGraduationCap className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
