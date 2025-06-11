import { useState } from "react";
import learningWoman from "../../assets/images/woman-learning.jpg";
import image1 from "../../assets/images/carouselImage1.jpg";

export default function CyberExpert() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const benefits = [
    {
      title: "Learning tailored to you",
      description:
        "Work with a programme consultant to co-design a comprehensive curriculum with a bespoke combination of courses which meet your needs, aspirations and professional goals.",
    },
    {
      title: "Flexibility to fit your life",
      description:
        "Complete your certificate at your own pace over a period of 24 months, and fit your course choices around your schedule.",
    },
    {
      title: "Support to maximise impact",
      description:
        "Create a roadmap for professional development with the help of an executive coach, and embed your learning for maximum impact in your career. Benefit from four one-to-one coaching sessions at your convenience throughout your learning journey.",
    },
    {
      title: "Benefits to your organisation",
      description:
        "Bring the impact of your highly tailored learning back to your organisation, with improved skills, experience and knowledge.",
    },
    {
      title: "Executive education alumni status",
      description:
        "Join our elite, international network of over 17,000 professionals from diverse industries in business.",
    },
    {
      title: "A blend of online and face-to-face learning",
      description:
        "Our extensive range of in-person and online programmes makes for a truly flexible learning experience. Choose from a range of topics and formats, including our short live-online and self-paced flexible online learning courses.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white text-gray-800 max-w-7xl mx-auto">
        <div className="min-h-[90vh] grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-7xl font-bold text-[#001c54] leading-snug mb-4">
              Applied AI for Cybersecurity Professionals
            </h1>
            <p className="text-lg text-[#001c54]">
              70% of strategies fail to deliver. Be in the 30% that succeed.
            </p>
          </div>

          <div className="h-full w-full">
            <img
              src={learningWoman}
              alt="Business strategy discussion"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-6">
          PROGRAM OVERVIEW
        </h2>

        <p className="font-semibold text-lg leading-relaxed mb-8">
          The Executive MBA experience at MBSC is uniquely designed for students
          who want to study business while developing an entrepreneurial
          mindset. Inspired by Babson College’s Entrepreneurial Thought and
          Action<sup>®</sup> (ET&A™), our program breaks down barriers between
          the various management and entrepreneurial disciplines, and provides
          students with dynamic, innovative education.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={image1}
                alt="MBSC building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-base leading-relaxed">
            <p>
              The MBSC Executive MBA was developed in collaboration with Babson
              Global, a wholly-owned subsidiary of Babson College, ranked #1 for
              its undergraduate and MBA entrepreneurship programs (U.S. News &
              World Report) for over two decades, and with Babson’s singular
              philosophy of ET&A™ at their core, our academic program gives you
              the essential knowledge for creating economic and social
              value—anywhere, and everywhere.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-700 text-base leading-relaxed">
            <p>
              MBSC’s Executive MBA in Saudi Arabia adopts Babson College’s
              unique approach to entrepreneurial education which does not rely
              on passively listening to classroom lectures but focuses on
              hands-on experiential learning that is practical and pragmatic.
              The curriculum includes a set of signature experiential courses
              that require students to apply their learning to real-world
              scenarios.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
            <img
              src={image1}
              alt="MBSC intro video"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#001c54]">
            Course Details
          </h1>
          <div
            className={`border-b ${
              activeSection === "overview"
                ? "bg-white shadow-lg rounded-lg p-6"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection("overview")}
              className="flex justify-between w-full py-4 font-medium text-lg text-left"
            >
              Course Overview
              <span>{activeSection === "overview" ? "−" : "+"}</span>
            </button>
            {activeSection === "overview" && (
              <div className="pb-4 text-gray-700 space-y-3">
                <p>
                  This course provides students with a foundational
                  understanding of the subject matter. It bridges the gap
                  between theoretical knowledge and real-world application.
                </p>
                <p>
                  Through interactive lessons and practical projects, learners
                  are exposed to diverse learning methodologies that enhance
                  engagement and retention.
                </p>
                <p>
                  Ideal for beginners and intermediate learners, the course also
                  introduces advanced concepts to prepare students for future
                  specialization.
                </p>
              </div>
            )}
          </div>

          <div
            className={`border-b ${
              activeSection === "syllabus"
                ? "bg-white shadow-lg rounded-lg p-6"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection("syllabus")}
              className="flex justify-between w-full py-4 font-medium text-lg text-left"
            >
              Syllabus
              <span>{activeSection === "syllabus" ? "−" : "+"}</span>
            </button>
            {activeSection === "syllabus" && (
              <div className="pb-4 text-gray-700 space-y-3">
                <p>
                  <strong>Week 1–2:</strong> Introduction to Subject
                </p>
                <p>
                  <strong>Week 3–6:</strong> Core Modules with Case Studies
                </p>
                <p>
                  <strong>Week 7–9:</strong> Hands-on Projects and Group Work
                </p>
                <p>
                  <strong>Week 10:</strong> Final Exam Review and Mock Tests
                </p>
              </div>
            )}
          </div>

          <div
            className={`border-b ${
              activeSection === "curriculum"
                ? "bg-white shadow-lg rounded-lg p-6"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection("curriculum")}
              className="flex justify-between w-full py-4 font-medium text-lg text-left"
            >
              Curriculum
              <span>{activeSection === "curriculum" ? "−" : "+"}</span>
            </button>
            {activeSection === "curriculum" && (
              <div className="pb-4 text-gray-700 space-y-3">
                <p>
                  The curriculum follows CBSE standards and includes modules
                  such as Science, Math, and Social Studies with a project-based
                  approach.
                </p>
                <p>
                  Students work on real-life simulations and case studies to
                  enhance their critical thinking.
                </p>
                <p>
                  Regular interactive sessions and presentations foster a
                  collaborative environment.
                </p>
              </div>
            )}
          </div>

          <div
            className={`border-b ${
              activeSection === "faculty"
                ? "bg-white shadow-lg rounded-lg p-6"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection("faculty")}
              className="flex justify-between w-full py-4 font-medium text-lg text-left"
            >
              Instructor Information
              <span>{activeSection === "faculty" ? "−" : "+"}</span>
            </button>
            {activeSection === "faculty" && (
              <div className="pb-4 text-gray-700 space-y-3">
                <p>
                  Our faculty consists of highly experienced educators with
                  industry and academic exposure.
                </p>
                <p>
                  Lead Instructor: <strong>Mr. John Doe (M.Sc, B.Ed)</strong>,
                  with 12+ years of experience in teaching and mentoring
                  students across various boards.
                </p>
                <p>
                  Guest lectures and mentorship sessions by alumni and industry
                  professionals are also part of the program.
                </p>
              </div>
            )}
          </div>

          <div
            className={`border-b ${
              activeSection === "assessment"
                ? "bg-white shadow-lg rounded-lg p-6"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection("assessment")}
              className="flex justify-between w-full py-4 font-medium text-lg text-left"
            >
              Assessment & Evaluation
              <span>{activeSection === "assessment" ? "−" : "+"}</span>
            </button>
            {activeSection === "assessment" && (
              <div className="pb-4 text-gray-700 space-y-3">
                <p>Students are evaluated through:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Weekly quizzes based on recent lessons</li>
                  <li>Assignments and collaborative projects</li>
                  <li>Mid-term exams and final assessments</li>
                  <li>Practical demonstrations and peer reviews</li>
                </ul>
                <p>
                  Feedback is provided regularly to help students track their
                  progress and improve continuously.
                </p>
              </div>
            )}
          </div>
        </div>
      <section className="bg-white py-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          How you benefit
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">⭕</span>
                <h3 className="text-lg font-semibold text-blue-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
