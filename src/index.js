import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import all assets
import Photo from "./assets/Photo2.jpg";
import ParkingSystem from "./assets/parkingthumbnail.png";
import ParkingSystem2 from "./assets/parking-system2.jpg";
import Signup from "./assets/Signup.jpg";
import Signin from "./assets/Signin.jpg";
import Car from "./assets/Thumbnail2.png";
import Netflix from "./assets/Thumbnail3.png";
import Car1 from "./assets/Carrentify1.jpg";
import Car2 from "./assets/Carrentify2.jpg";
import Car3 from "./assets/Carrentify3.jpg";
import Car4 from "./assets/Carrentify4.jpg";
import Car5 from "./assets/Carrentify5.jpg";
import Car6 from "./assets/Carrentify6.jpg";
import Resume from "./assets/resume.pdf";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Smart Parking Lot System",
      description:
        "An IoT-based solution that helps drivers find available parking spots in real-time using sensors and machine learning. This project reduced parking search time by 40% in simulations.",
      detailedDescription: [
        "Developed a computer vision system to detect parking space occupancy",
        "Integrated IoT sensors for redundancy and improved accuracy",
        "Created a dashboard showing real-time parking availability",
        "Implemented REST APIs for mobile app integration",
      ],
      screenshots: [ParkingSystem, ParkingSystem2],
      technologies: ["Python", "OpenCV"],
      features: [
        "Real-time parking availability updates",
        "License plate recognition",
        "Mobile app integration",
        "Cloud-based data processing",
      ],

      githubLink:
        "https://github.com/Sureshbabu1732/Smart-Parking-Lot-System.git",
      category: "Machine Learning",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "A feature-rich streaming platform replica with user profiles, watch history, and personalized recommendations. Implemented responsive design for all device sizes.",
      detailedDescription: [
        "Frontend built with HTML, CSS, and JavaScript",
        "Responsive design for all screen sizes",
      ],
      screenshots: [Netflix, Signup, Signin],
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Content categorization",
        "Watchlist functionality",
        "Responsive UI components",
      ],
      demoLink: "https://netify-clonlix-bonbon-4c2742.netlify.app/",
      githubLink: "https://github.com/Sureshbabu1732/Netflix-Clone.git",
    },
    {
      id: 3,
      title: "CarRentify",
      description:
        "A complete Figma prototype for a car rental service with interactive components and responsive design principles. Created user flows for the entire rental process.",
      detailedDescription: [
        "Figma prototype implementing responsive design principles",
        "Interactive components for better user experience",
        "User flows for entire rental process",
        "Design system with consistent components",
      ],
      screenshots: [Car, Car1, Car2, Car3, Car4, Car5, Car6],
      technologies: ["Figma", "Prototyping"],
      features: [
        "Interactive components",
        "Mobile-first design",
        "User testing reports",
        "Design system",
      ],
      demoLink: "https://carrental-capable-bd1dec.netlify.app/",
      githubLink: "https://github.com/Sureshbabu1732/CarRental.git",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % selectedProject.screenshots.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.screenshots.length) %
        selectedProject.screenshots.length
    );
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <header className="header">
        <h1 className="logo">Sureshbabu S</h1>
        <nav className="nav">
          <button
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className={`nav-link ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <img src={Photo} alt="Sureshbabu" className="profile-image" />
          <div className="hero-text">
            <h1>
              Hey there, I'm <span className="highlight">Sureshbabu</span> 👋
            </h1>
            <h2>
              A passionate <span className="highlight">IT Engineer</span>
            </h2>
            <p className="hero-description">
              Motivated IT graduate with strong foundation in software
              development and problem-solving.
            </p>
            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <a
                href={Resume}
                download="Sureshbabu_Resume.pdf"
                className="secondary-button"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              I'm a passionate IT Graduate specializing in Python, Java, and
              full-stack web development. I have a strong interest in solving
              complex problems through clean, maintainable code and scalable
              architecture. Whether working independently or as part of a team,
              I strive to deliver high-quality solutions that drive real-world
              impact.
            </p>
            <div className="skills-container">
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-grid">
                {[
                  "HTML/CSS",
                  "JavaScript",
                  "React.js",
                  "Java",
                  "MySQL",
                  "Python",
                  "C/C++",
                  "Git",
                ].map((skill) => (
                  <div key={skill} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section dark-section" id="experience">
        <div className="section-content">
          <h2 className="section-title">Education & Experience</h2>
          <ul className="timeline">
            <li className="timeline-item">
              <h3 className="timeline-period">
                Bachelor Of Technology (2019-2023)
              </h3>
              <p className="timeline-institution">
                Rajalakshmi Engineering College - Information Technology
              </p>
            </li>

            <li className="timeline-item">
              <h3 className="timeline-period">HSC (2018-2019)</h3>
              <p className="timeline-institution">
                Wisdom Vidhyashram Matrix Hr. Sec. School - 52%
              </p>
            </li>
            <li className="timeline-item">
              <h3 className="timeline-period">SSLC (2016-2017)</h3>
              <p className="timeline-institution">
                Wisdom Vidhyashram Matrix Hr. Sec. School - 77.6%
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <div className="section-content">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Click on any project to view details and screenshots
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openProjectModal(project)}
              >
                <div className="project-image-container">
                  <img
                    src={project.screenshots[0]}
                    alt={project.title}
                    className="project-thumbnail"
                  />
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                  <div className="tech-tags">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span>+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="project-links">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-button"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-button"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="screenshot-container">
              {selectedProject.screenshots.length > 1 && (
                <button
                  className="nav-arrow left-arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  &lt;
                </button>
              )}

              <img
                src={selectedProject.screenshots[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${
                  currentImageIndex + 1
                }`}
                className="project-screenshot"
              />

              {selectedProject.screenshots.length > 1 && (
                <button
                  className="nav-arrow right-arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  &gt;
                </button>
              )}

              {selectedProject.screenshots.length > 1 && (
                <div className="screenshot-counter">
                  {currentImageIndex + 1}/{selectedProject.screenshots.length}
                </div>
              )}
            </div>

            <div className="project-details">
              <div className="details-section">
                <h3>Project Description</h3>
                <p>{selectedProject.description}</p>
              </div>

              <div className="details-section">
                <h3>Detailed Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="details-section">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="section dark-section" id="contact">
        <div className="section-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            Looking for opportunities to contribute my skills!
          </p>
          <div className="contact-info">
            <a
              href="mailto:sureshbabu.s1732@gmail.com"
              className="contact-link"
            >
              sureshbabu.s1732@gmail.com
            </a>
            <a href="tel:+918667000792" className="contact-link">
              +91 8667000792
            </a>
            <a
              href="https://linkedin.com/in/sureshbabu02"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/sureshbabu02
            </a>
            <a
              href="https://github.com/Sureshbabu1732"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/Sureshbabu1732
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
