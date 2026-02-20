/**CORE LIBRARY IMPORTS */
import React, {useState} from "react";
import { motion } from "framer-motion";



/**COMPONENTS IMPORT */
import Hero from "../Components/Hero";

/**IMAGE IMPORTS */
import leftBlur from "../Images/left-blur.png";
import rightBlur from "../Images/right-blur.png";

/**DATA IMPORTS */
import { serviceList} from "../Data";

const Home=()=>{
   const [activeTab, setActiveTab] = useState(1);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };




    return(
        <>
        <section className="hero-wrapper">
      <div className="hero-container">
        <Hero />
      </div>
    </section>

    <section className="section2-wrapper">
      {/* Background blurs */}
      <img src={leftBlur} alt="" className="blur-left" />
      <img src={rightBlur} alt="" className="blur-right" />

      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section2-title" variants={fadeUp}>
            Your Web Design & Marketing Partner
          </motion.h2>
          <motion.p className="section2-text" variants={fadeUp}>
            DigiCore delivers professional, results-driven solutions tailored
            to your business goals. We blend creative design with strategic
            marketing to build impactful websites that attract, engage, and
            convert. From intuitive user experiences to targeted digital
            campaigns, we ensure your online presence is powerful and
            consistent. Partner with us to elevate your brand, enhance
            visibility, and drive long-term success.
          </motion.p>
          <motion.div className="section2-buttons" variants={fadeUp}>
            <a href="/about" className="btn btn-home">
              <span>Learn More</span>
            </a>
           <a href="/contact-us" className="btn btn-home">
  <span className="btn-text">Contact Us</span>
  <span className="btn-arr">&gt;</span>
</a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/**SERVICE CARDS SECTION */}
<section className="wrapper service-section">
  <div className="container">
    {/* HEADER */}
    <div className="service-header">
      <h2 className="section-title">Your Vision, Our Expertise</h2>
      <p className="section-subtitle">
        Transforming Ideas into Exceptional Digital Experiences
      </p>
    </div>

    <div className="service-tabs">
      <div className="service-tabs-row">
        {serviceList.map((service) => {
          const isActive = activeTab === service.id;

          return (
            <div
              key={service.id}
              className={`service-tab ${isActive ? "active" : ""}`}
              style={{
                flex: isActive ? 1 : 0.08,
                backgroundColor: isActive ? "#000" : service.bgColor
              }}
              onClick={() => setActiveTab(service.id)}
            >
              {isActive ? (
                <div className="service-tab-content">
                  {/* LEFT INDEX BAR */}
                  <div className="service-tab-index">
                    <span className="index">
                      {String(service.id).padStart(2, "0")}
                    </span>
                    <span className="label">{service.label}</span>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="service-tab-main">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>

                    <img
                      src={service.imageSrc}
                      alt={service.title}
                    />
                  </div>
                </div>
              ) : (
                <div className="service-tab-collapsed">
                  <span className="index">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  <h3>{service.label}</h3>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Home;