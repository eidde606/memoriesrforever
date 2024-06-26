import React from "react";
import {
  FaBirthdayCake,
  FaMagic,
  FaTheaterMasks,
  FaUserSecret,
} from "react-icons/fa";
import ZoomIn from "../animations/zoomIn";
import Title from "../ui/title";

const servicesList = [
  {
    id: 1,
    icon: <FaBirthdayCake size={65} />,
    service_name: "Costumed Character Parties",
    service_description:
      "Celebrate birthdays with our unique service offering movie character costumes and themed party planning to create memorable experiences for children and families.",
  },
  {
    id: 2,
    icon: <FaMagic size={65} />,
    service_name: "Themed Event Planning",
    service_description:
      "Let us design and execute themed birthday parties with movie character costumes, ensuring every detail is tailored to create magical moments for kids and guests.",
  },
  {
    id: 3,
    icon: <FaUserSecret size={65} />,
    service_name: "Customized Costume Design",
    service_description:
      "Create custom costumes of movie characters for birthday parties and special events, ensuring each child's favorite character comes to life with high-quality designs.",
  },
  {
    id: 4,
    icon: <FaTheaterMasks size={65} />,
    service_name: "Character Performances",
    service_description:
      "Enjoy interactive character performances where our employees dress up, dance with kids, and capture memorable moments at birthday parties.",
  },
];
const Services = () => {
  return (
    <section id="services" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Services</p>
              <h2>Quality Services</h2>
            </Title>
          </div>
        </div>
        <div className="row">
          {servicesList.map(
            ({ icon, id, service_description, service_name }) => {
              return (
                <div key={id} className="col-lg-3 col-md-6">
                  <ZoomIn id={id}>
                    <div className="service-item">
                      {icon}
                      <h4>{service_name}</h4>
                      <p>{service_description}</p>
                    </div>
                  </ZoomIn>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
