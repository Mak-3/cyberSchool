import { useState } from "react";
import learningWoman from "../../assets/images/woman-learning.jpg";
import image1 from "../../assets/images/carouselImage1.jpg";

export default function CertifiedCyberExpert() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const benefits = [
    {
      title: "Industry-recognized Certification",
      description: "Earn credentials respected across industries and validate your cybersecurity expertise globally."
    },
    {
      title: "Hands-on Learning",
      description: "Engage in real-world simulations, virtual labs, and practical assignments guided by industry professionals."
    },
    {
      title: "Flexible Learning Paths",
      description: "Self-paced learning modules designed to fit into your personal and professional schedule."
    },
    {
      title: "Mentorship & Career Guidance",
      description: "Get direct access to mentors and career coaches to help navigate your cybersecurity journey."
    },
    {
      title: "Alumni Network",
      description: "Join a growing community of cybersecurity professionals for collaboration and career opportunities."
    },
  ];

  return (
    <section className="px-6 py-12 bg-white text-gray-800 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="min-h-[90vh] grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#001c54] mb-4">
            Certified Cyber Expert Program
          </h1>
          <p className="text-lg text-[#001c54]">
            Master essential cybersecurity skills and earn an industry-validated certificate.
          </p>
        </div>
        <div className="h-full w-full">
          <img src={learningWoman} alt="Learning cybersecurity" className="w-full h-full object-cover rounded" />
        </div>
      </div>

      {/* Overview Section */}
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mt-12 mb-4">
        PROGRAM OVERVIEW
      </h2>
      <p className="text-base text-gray-700 leading-relaxed mb-8">
        Our Certified Cyber Expert Program is designed to equip learners with the latest knowledge in information security,
        ethical hacking, and network defense. The program blends theory with practice, preparing participants for both 
        certification exams and real-world challenges in cybersecurity.
      </p>

      {/* Curriculum & Format Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <img src={image1} alt="Cybersecurity lab" className="rounded shadow-md w-full h-auto" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#001c54] mb-2">Duration & Learning Format</h3>
          <p className="text-gray-700 mb-2">⏱️ Duration: 6 Months (Self-paced)</p>
          <p className="text-gray-700 mb-2">📍 Format: Online, with optional weekend live sessions</p>
          <p className="text-gray-700">
            Weekly projects and assessments help reinforce your understanding, while a capstone project showcases your skills.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">BENEFITS</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-4 bg-gray-50 border-l-4 border-[#001c54] rounded shadow-sm">
            <h4 className="font-bold text-[#001c54]">{benefit.title}</h4>
            <p className="text-gray-700 mt-1">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Eligibility Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">ELIGIBILITY</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Basic understanding of computer networks and operating systems</li>
          <li>No prior experience in cybersecurity required</li>
          <li>Professionals from IT, Networking, or Software background preferred</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-[#001c54] text-white py-10 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Ready to become a Certified Cyber Expert?</h2>
        <p className="mb-4">Enroll now and kickstart your journey into the world of cybersecurity.</p>
        <button className="bg-white text-[#001c54] font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Apply Now
        </button>
      </div>
    </section>
  );
}