import { RiInstagramFill } from "@remixicon/react";
import Team from "../../assets/images/projects/team.svg";
import SlideUp from "../animations/slideUp";
const About = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/*  START ABOUT IMAGE DESIGN AREA  */}
          <div className="col-lg-5">
            <SlideUp>
              <div className="about-image-part">
                <img src={Team} alt="About Me" />
                <h2>Team</h2>
                <div className="about-btn btn-one text-center">
                  <h6>Available for Work</h6>
                  <div className="circle pulse color-pulse"></div>
                </div>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/memoriesrforever_ent/">
                        <i>
                          <RiInstagramFill size={20} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/*  END ABOUT IMAGE DESIGN AREA  */}
          {/*  START ABOUT TEXT DESIGN AREA  */}
          <div className="col-lg-7">
            <div className="about-content-part">
              <SlideUp>
                <h4>
                  Our passion for working with people, especially kids, and
                  celebrating life's special moments has fueled our company for
                  13 years. Founded in July 2011, Orlando's Biggest Mascot Party
                  Company offers the best quality characters. Initially
                  specializing in kids parties, we now cater to a variety of
                  events. Serving over 1,000 events annually across Central
                  Florida, including Orlando, Kissimmee, and Saint Cloud, our
                  clients repeatedly choose us for our reliable service and
                  high-quality costumes. We pride ourselves on delivering the
                  best entertainment at the best price, creating memories that
                  last forever.
                </h4>
              </SlideUp>
            </div>
          </div>
          {/*  END ABOUT TEXT DESIGN AREA  */}
        </div>
      </div>
    </section>
  );
};

export default About;
