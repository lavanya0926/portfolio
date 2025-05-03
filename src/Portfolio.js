import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiMysql } from 'react-icons/si';
import './index.css';
import portfoliopic from '../src/assets/portfoliopic.jpeg';
import aboutmee from '../src/assets/aboutmee.jpeg'





export default function Portfolio() {


  return (
    <div>
      <div className="sticky-top bg-white w-100" style={{ zIndex: 1000 }}>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-info" style={{}}>
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ms-5"
          >
            {/* Logo Image */}
            <img
              src="https://t4.ftcdn.net/jpg/03/81/25/65/360_F_381256598_7AR0TznuBfh1BLQVkfJE6JIK3nvLCMB9.jpg"
              alt="logo"
              style={{ height: '30px', width: '30px' }}
            />
            <h1 className="fs-4 m-0 ms-1 ms-3">Ramireddy Lavanya </h1>
          </a>

          <ul className="nav nav-pills me-5">
            
            <li className="nav-item">
              <h5 >
                <a href="#home" className="nav-link text-dark" aria-current="page">
                  Home
                </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
              <a href="#About" className="nav-link text-dark">
                About
              </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
              <a href="#Experience" className="nav-link text-dark">
                Internships
              </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
              <a href="#Skills" className="nav-link text-dark">
                Skills
              </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
              <a href="#Projects" className="nav-link text-dark">
                Projects
              </a>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
              <a href="#Education" className="nav-link text-dark">
                Education
              </a>
              </h5>
            </li>
            {/* <li className="nav-item">
              <a href="#Resume" className="nav-link text-dark">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link text-dark">
                Contact
              </a>
            </li> */}
          </ul>
        </header>
      </div>

      <section
        id="home"
        style={{
          backgroundSize: 'cover',
          backgroundColor: "#f0f8ff",
          backgroundPosition: 'center',
          padding: '40px 20px',  // reduced from 80px
          fontFamily: "'Poppins', sans-serif",
          color: 'white',
          maxWidth: '1350px',           // limits width
          margin: '0 auto',             // centers section
          borderRadius: '12px',
        }}
      >
        <div className="container">
          <div className="row">
            {/* Text Content */}
            <div className="col-md-8 d-flex flex-column justify-content-center align-items-start">
              <h1 style={{ fontSize: '3rem', fontWeight: '700', marginLeft: '100px', color: 'black' }}>Hello,</h1>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'black', marginLeft: '100px' }}>
                I'm Ramireddy Lavanya
              </h2>
              <h4
                style={{
                  fontWeight: '600',
                  fontSize: '20px',
                  marginBottom: '20px',
                  background: 'linear-gradient(90deg, black)',
                  color: '#f39c12',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginLeft: '100px',
                  marginTop: '10px',
                }}
              >
                Web Developer
              </h4>

              {/* Social Icons */}
              <div className="d-flex gap-4 align-items-center mt-3">
                <a
                  href="https://www.linkedin.com/in/ramireddy-lavanya-7b4990252"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0a66c2', marginLeft: '100px' }}
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  href="https://github.com/lavanya0926/project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'grey' }}
                >
                  <FaGithub size={40} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={aboutmee}
                alt="profile"
                style={{
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  marginTop: '10px',
                  border: '4px solid white',
                  marginRight: "30px"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>
      </section>





      {/* About Me Section */}
      <section
        className="container-fluid my-5"
        id="About"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '20px 20px',  // Reduced padding for a more compact section
          height: '400px',  // Adjusted height
          borderRadius: '12px',
        }}
      >
        {/* Heading */}
        <div className="container mb-4 text-start">
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'black',
              color: 'white',
              padding: '8px 20px',  // Slightly smaller padding
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '22px',
              marginLeft: '20px'
            }}
          >
            About Me
          </div>
        </div>

        {/* Two-column layout */}
        <div className="container row align-items-center">
          {/* Left: Image */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/free-photo/celebration-labour-day-with-3d-cartoon-portrait-working-woman_23-2151306545.jpg"
              alt="About Me"
              style={{
                width: '100%',
                height:'200px',
                maxWidth: '200px',  // Reduced image size
                borderRadius: '15px',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
                marginLeft: '80px'
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="col-md-8">
            <div
              style={{
                fontSize: '16px',  // Slightly smaller text
                lineHeight: '1.6',  // Reduced line height
                color: '#333',
                textAlign: 'justify',
                marginTop: '10px',  // Reduced top margin
              }}
            >
              <p>
                I'm a recent <span style={{ color: '#e67e22', fontWeight: '600' }}>Computer Science graduate</span> with a deep passion for software development. I'm proficient in <strong>MERN Stack</strong> and have a solid foundation in <strong>HTML, CSS, JavaScript, Bootstrap</strong>, and <strong>React.js</strong>.
              </p>
              <p>
          I have hands-on experience building and deploying web applications through personal and academic projects. I thrive in dynamic team environments, bring a <span style={{ fontWeight: '600' }}>quick learning mindset</span>, and love exploring new technologies. I’m particularly passionate about solving real-world problems through code.
        </p>
              <p>
                I’m open to <span style={{ color: '#3498db', fontWeight: '600' }}>job opportunities</span> that align with my skills and ambition.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Experience Section */}
     
      <section id="Experience" style={{ padding: '40px', backgroundColor: 'white', color: '#fff', marginTop: "-50px" }}>
        {/* Heading */}
        <div style={{ width: '100%', textAlign: 'left', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                fontWeight: 'bold',
                fontSize: '24px',
                display: 'inline-block',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
             Internships
            </div>

            {/* Horizontal line */}
            <div
              style={{
                flex: 1,
                height: '2px',
                backgroundColor: 'black',
                marginLeft: '0px',
              }}
            />
          </div>
        </div>


        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4" >
            <div
              className="card border-0  p-3 text-center text-light bg-info"
              style={{
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                backgroundColor: "gray",
                boxShadow: "2px 2px 14px lightblue",

              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src="https://sangamuniversity.ac.in/wp-content/uploads/2023/03/nptel.jpg"
                alt="Company 1"
                className="mx-auto mb-3"
                style={{ borderRadius: '10px', width: "50px", height: "50px" }}
              />
              <h5 className="fw-bold" style={{ color: 'black' }}>Privacy and Security in Online Social Media.</h5>
              <p className="m-0" style={{ color: 'black' }}><strong>Duration:</strong> Jan 2023 – Apr 2023</p>
              <p className="m-0" style={{ color: 'black' }}><strong>Role:</strong>Security Intern</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 mb-4">
            <div
              className="card border-0  p-3 text-center text-white"
              style={{
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                backgroundColor: "aqua",
                boxShadow: "2px 2px 14px aquamarine",
                
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src="https://economictimes.indiatimes.com/photo/70342699.cms"
                alt="Company 2"
                className="mx-auto mb-3"
                style={{ borderRadius: '10px', width: "200px", height: "50px" }}
              />
              <h5 className="fw-bold" style={{ color: 'black' }}>Financial Risk Analysis using ML & IBM Watson.</h5>
              <p className="m-0" style={{ color: 'black' }}><strong>Duration:</strong> Jul 2022 – Aug 2022</p>
              <p className="m-0" style={{ color: 'black' }}><strong>Role:</strong> Machine Learning-Intern</p>
            </div>
          </div>
        </div>
      </section>


      
      <section id="Skills" style={{ padding: '40px', backgroundColor: 'white', color: '#fff', marginTop: "-50px" }}>
        {/* Heading */}
        <div style={{ width: '100%', textAlign: 'left', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                fontWeight: 'bold',
                fontSize: '24px',
                display: 'inline-block',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
             Skills
            </div>

            {/* Horizontal line */}
            <div
              style={{
                flex: 1,
                height: '2px',
                backgroundColor: 'black',
                marginLeft: '0px',
              }}
            />
          </div>
        </div>


        {/* Marquee Wrapper */}
        <div className="skill-marquee-wrapper overflow-hidden" style={{ height: '170px' }}>
          <div className="marquee-track d-flex">
            {Array(2).fill([
              { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
              { name: 'ReactJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Java', img: 'https://external-preview.redd.it/java-22-launch-event-v0-VKfyXB99AEiHiPvIbK-vLRHcejGsT7-_XARIBlJwh38.jpg?auto=webp&s=0839fef377ec7e8428306c5b174bbab8ed470b4a' },
              { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              // { name: 'MongoBD', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'SQL', img: 'https://c8.alamy.com/comp/JMCJ7J/sql-database-icon-logo-design-ui-or-ux-app-gold-inscription-on-dark-JMCJ7J.jpg' }
            ]).flat().map((skill, index) => (
              <div
                key={index}
                className="skill-box mx-3"
                style={{
                  width: '130px',
                  height: '130px',
                  padding: '10px',
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '12px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '5px 3px 3px lightgrey',
                  transition: 'transform 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.parentElement.style.animationPlayState = 'paused';
                  e.currentTarget.classList.add('hover-animate');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.parentElement.style.animationPlayState = 'running';
                  e.currentTarget.classList.remove('hover-animate');
                }}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  style={{ width: '45px', height: '45px', marginBottom: '8px' }}
                />
                <div style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Styles */}
        <style>
          {`
        .marquee-track {
            animation: scroll-left 15s linear infinite;
        }

        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .hover-animate {
            transform: scale(1.15) rotate(3deg);
        }
        `}
        </style>
      </section>

      <section id="Projects" style={{ padding: '40px', backgroundColor: 'white', color: '#fff', marginTop: "-50px" }}>
        {/* Heading */}
        <div style={{ width: '100%', textAlign: 'left', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                fontWeight: 'bold',
                fontSize: '24px',
                display: 'inline-block',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              Projects
            </div>

            {/* Horizontal line */}
            <div
              style={{
                flex: 1,
                height: '2px',
                backgroundColor: 'black',
                marginLeft: '0px',
              }}
            />
          </div>
        </div>



        {/* Project Cards */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {[
            {
              title: 'Tech Shop E-commerce',
              description: 'TechShop is a responsive e-commerce front-end website designed using HTML and CSS to showcase electronic gadgets and tech accessories.',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmJpGRwsSww3prRdlgQOPJ4Ol9QKZKkNq3A&s',
              github: 'https://github.com/lavanya0926/project.git',
              UI: 'https://lavanya0926.github.io/Tech-shop-E-commerce/'
            },
            {
              title: 'Weather App',
              description: 'Developed a responsive web app using HTML,CSS and JavaScript to search weather by city with real-time data integration using open weather APIs.',
              image: 'https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg',
              github: 'https://github.com/lavanya0926/weatherApp.git',
              UI: 'https://lavanya0926.github.io/weatherApp/'
            },
            {
              title: 'Mart E-comerce',
              description: 'Mart is a dynamic and responsive e-commerce website built using HTML, CSS, JavaScript, and React. The platform enables users to browse and purchase products, manage their shopping cart, and explore product categories.',
              image: 'https://images.prismic.io/edhandha/08215342-ecc4-4fb6-b859-eb9cdbdbe1b4_Why+Ecommerce+for+Furniture.jpg?auto=compress%2Cformat&rect=0%2C0%2C1920%2C1079&w=756&h=425',
              github: 'https://github.com/lavanya0926/Mart-E-commerce.git',
              UI: 'https://mart-e-commerce.vercel.app'
            },
            {
              
              title: 'Tour App',
              description: 'The Tour Booking App is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore various tour packages and book tours online.',
              
              image: 'https://www.shutterstock.com/shutterstock/photos/1475076707/display_1500/stock-vector-tour-and-travel-background-design-design-for-app-and-home-page-vector-illustration-1475076707.jpg',
              github: 'https://github.com/lavanya0926/Tour.git',
              UI: 'https://tour-wheat-pi.vercel.app/'
            }
          ].map((project, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '300px',
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 0 15px grey',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'translateY(-10px)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Orange Border Animation */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                  pointerEvents: 'none',
                  zIndex: 0,
                  animation: 'glowBorder 3s linear infinite',
                }}
              ></div>

              {/* Project Image */}
         
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  zIndex: 1,
                }}
              />
             

              {/* Title */}
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{project.title}</h3>

              {/* Description */}
              <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{project.description}</p>
             
              {/* GitHub Button */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginLeft: '40px' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: '10px',
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: 'orange',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    zIndex: 1,
                  }}
                >
                  GitHub
                </a>
                <a
                  href={project.UI}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: '10px',
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: 'orange',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    zIndex: 1,
                  }}
                >
                  UI
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Animation Keyframes */}
        <style>
          {`
      @keyframes glowBorder {
        0% {
          border-color: transparent;
          box-shadow: 0 0 5px orange;
        }
        50% {
          border-color: orange;
          box-shadow: 0 0 15px orange, 0 0 30px orange;
        }
        100% {
          border-color: transparent;
          box-shadow: 0 0 5px orange;
        }
      }
    `}
        </style>
      </section>


      <section id="Education" style={{ padding: '40px', backgroundColor: 'white', color: 'white' }}>
        {/* Heading */}
        <div style={{ width: '100%', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                fontWeight: 'bold',
                fontSize: '24px',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              Education
            </div>

            {/* Custom Black Line */}
            <div
              style={{
                flex: 1,
                height: '2px',
                backgroundColor: 'black',
                marginLeft: '0px',
              }}
            />
          </div>
        </div>


        {/* Content */}
        <div style={{ display: 'flex', gap: '90px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Left Image */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-on-a-project-4217498-3518346.png"
              alt="Education"
              style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', height: "350px" }}
            />
          </div>

          {/* Right Side with Cards */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            {/* Row with Two Cards */}
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              {[0, 1].map((index) => (
                <div
                  key={index}
                  style={{
                    background: '#1e1e1e',
                    border: '2px solid orange',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 0 10px blueviolet',
                    minWidth: '260px',
                    flexShrink: 0,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 20px orange';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 10px blueviolet';
                  }}
                >
                  {/* Duration */}
                  <div
                    style={{
                      textAlign: 'center',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      color: 'orange',
                    }}
                  >
                    {index === 0 ? '2021 - 2024' : '2018 - 2021'}
                  </div>

                  {/* Card Content */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Left - Text Info */}
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        {index === 0 ? 'B.Tech in CSE' : 'Diploma in CME'}
                      </div>
                      <div style={{ fontSize: '14px', color: '#ccc' }}>
                        {index === 0 ? 'AITS,Rajampet' : 'Govt.Polytechnic College,Proddatur'}
                      </div>
                      <div style={{ fontSize: '14px', marginTop: '5px' }}>
                        CGPA: {index === 0 ? '8.90' : '8.8'}
                      </div>
                    </div>

                    {/* Right - Icon */}
                    <img
                      src={
                        index === 0
                          ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVPt6zdjIfluerAhPkrTRtYPChhjHxtl2lQ&s'
                          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabWh0UEZA7P8gL_Yt3cL3RNn4RHgraroXSQ&s'
                      }
                      alt="icon"
                      style={{ width: '60px', height: '60px' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Centered Third Card */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <div
                style={{
                  background: '#1e1e1e',
                  border: '2px solid orange',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 0 10px blueviolet',
                  minWidth: '260px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 20px orange';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 10px blueviolet';
                }}
              >
                {/* Duration */}
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: 'orange',
                  }}
                >
                  2017 - 2018
                </div>

                {/* Card Content */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {/* Left - Text Info */}
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>SSC</div>
                    <div style={{ fontSize: '14px', color: '#ccc' }}>ZPGHS,Yerraguntla</div>
                    <div style={{ fontSize: '14px', marginTop: '5px' }}>CGPA: 8.3</div>
                  </div>

                  {/* Right - Icon */}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj7_5SFrm-uWcMAjA6-RfTPbdBDkZE71ZpSGMvZnWkIBb7sW1BmU9xLxJUpLHjLI-dv0&usqp=CAU"
                    alt="icon"
                    style={{ width: '60px', height: '60px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="Resume" style={{ padding: '40px', backgroundColor: 'white', color: 'white' }}>
        {/* Heading */}
        <div style={{ width: '100%', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                fontWeight: 'bold',
                fontSize: '24px',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              Resume
            </div>

            {/* Black horizontal line */}
            <div
              style={{
                flex: 1,
                height: '2px',
                backgroundColor: 'black',
                marginLeft: '0px',
              }}
            />
          </div>
        </div>


        {/* Content Box */}
        <div
          style={{
            background: "black",
            border: '4px solid orange',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 0 20px grey',
            textAlign: 'center',
            maxWidth: '600px',
            margin: 'auto',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated Border Effect */}
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              width: 'calc(100% + 4px)',
              height: 'calc(100% + 4px)',
              animation: 'glow 4s linear infinite',
              zIndex: 0,
              filter: 'blur(8px)',
              borderRadius: '15px',
              opacity: 0.5,
            }}
          ></div>

          {/* Resume Icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
            alt="Resume Icon"
            style={{ width: '80px', marginBottom: '20px', zIndex: 1, position: 'relative' }}
          />

          {/* Description */}
          <p style={{ fontSize: '16px', marginBottom: '25px', zIndex: 1, position: 'relative' }}>
            Download my updated resume to know more about my skills, education, and professional journey.
          </p>

          {/* Download Button */}
          <a
            href="/Ramireddy-Lavanya_Resume.pdf" // Change to your actual resume path
            download="file:///C:/Users/Lenovo/Downloads/Ramireddy-Lavanya-FlowCV-Resume-20250417%20(3).pdf"
            style={{
              display: 'inline-block',
              padding: '12px 25px',
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              border: '2px solid orange',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 0 10px blueviolet',
              transition: 'all 0.3s ease',
              zIndex: 1,
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'orange';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.boxShadow = '0 0 20px orange';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = '0 0 10px blueviolet';
            }}
          >
            📄 Download Resume
          </a>
        </div>

        {/* Keyframes - Add inside your index.html or <style> tag globally if needed */}
        <style>
          {`
      @keyframes glow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
        </style>
      </section>


    

      
      <section id="contact" style={{ padding: '40px', backgroundColor: 'white', color: '#121212' }}>
  {/* Heading */}
  <div style={{ width: '100%', textAlign: 'left', marginBottom: '30px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
          fontWeight: 'bold',
          fontSize: '24px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
        }}
      >
        Contact Me
      </div>
      <div
        style={{
          flex: 1,
          height: '2px',
          backgroundColor: 'black',
          marginLeft: '0px',
        }}
      />
    </div>
  </div>

  {/* Two Column Layout */}
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '40px',
    }}
  >
    {/* Contact Form */}
    <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          backgroundColor: 'black',
          padding: '30px',
          borderRadius: '12px',
          border: '2px solid orange',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#121212',
            fontSize: '18px',
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: '14px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#121212',
            fontSize: '18px',
          }}
        />
        <textarea
          placeholder="Your Message"
          required
          rows={3}
          style={{
            padding: '14px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#121212',
            fontSize: '18px',
            // resize: 'none',
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '3px',
            backgroundColor: 'orange',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Info */}
    <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
      <div
        style={{
          backgroundColor: 'black',
          border: '2px solid orange',
          borderRadius: '12px',
          padding: '30px',
          color: 'white',
          fontSize: '18px',
          boxShadow: '0 0 15px rgba(255,165,0,0.3)',
          height: '340px',
         
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent:'center', marginBottom: '20px',marginTop:'80px' }}>
          <i className="fas fa-envelope" style={{ fontSize: '24px', color: 'orange' }}></i>
          <span>lavanyaramireddy08@email.com</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent:'center', marginBottom: '20px' }}>
          <i className="fas fa-phone" style={{ fontSize: '24px', color: 'orange' }}></i>
          <span>+91 8121741676</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap: '15px' }}>
          <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', color: 'orange' }}></i>
          <span>Hyderabad, India</span>
        </div>
      </div>

      {/* Social Media Icons */}
     
    </div>
  </div>
</section>



      <footer
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '15px 20px',
          textAlign: 'center',
          fontSize: '16px',
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Footer Content */}
        <div style={{ marginBottom: '20px' }}>
          <p>© Developer Portfolio by <span style={{ color: "orange" }}>Ramireddy Lavanya</span></p>
        </div>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '30px', fontSize: '24px' }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'orange')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'orange')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* <a
            href="lavanyaramireddy08@gmail.com"
            style={{ color: '#fff', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'orange')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <i className="fas fa-envelope"></i>
          </a> */}
        </div>

        {/* Additional Links */}
        <div style={{ marginTop: '20px' }}>
          <a
            href="#top"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'orange')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            Back to Top
          </a>
        </div>
      </footer>





    </div>
  );
}