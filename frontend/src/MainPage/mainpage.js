import React from "react";
import NavBar from "./NavBar.js";
import pottery from "./assets/img/pottery.jpg";
import dance from "./assets/img/dance.jpg";
import cooking from "./assets/img/cooking.jpg";
import dhoni from "./assets/img/Dhoni.jpeg";
import gallery1 from "./assets/img/gallery/gallery-1.jpg";
import gallery2 from "./assets/img/gallery/gallery-2.jpg";
import gallery3 from "./assets/img/gallery/gallery-3.jpg";
import gallery4 from "./assets/img/gallery/gallery-4.jpg";
import gallery5 from "./assets/img/gallery/gallery-5.jpg";
import gallery6 from "./assets/img/gallery/gallery-6.jpg";
import gallery7 from "./assets/img/gallery/gallery-7.jpg";
import gallery8 from "./assets/img/gallery/gallery-8.jpg";
import navin from "./assets/img/testimonials/Navin.jpeg";
import atharva from "./assets/img/testimonials/Atharva.jpeg";
import meenal from "./assets/img/testimonials/Meenal.jpg";
import ruchi from "./assets/img/testimonials/Ruchi.jpg";
import charmi from "./assets/img/testimonials/Charmi.jpg";
import dance1 from "./assets/img/Dance1.jpg";
import pottery1 from "./assets/img/Pottery1.png";
import cooking1 from "./assets/img/cooking1.jpg";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";

import "./assets/css/style.css";
import "boxicons/css/boxicons.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";

SwiperCore.use([Navigation, Pagination]);

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            data-bs-interval="5000"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>
            <div className="carousel-inner" role="listbox">
              {/* Slide 1 */}
              <div
                className="carousel-item active"
                style={{ backgroundImage: `url(${dance})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      <span>Your skills are your </span> SuperPower
                    </h2>
                    <div className="btn-group" role="group">
                      <a href="#menu">
                        <button type="button" className="c_button">
                          Try it Today
                        </button>
                      </a>
                      <span> &nbsp; &nbsp; &nbsp; </span>
                      <a href="#contact">
                        <button type="button" className="c_button">
                          Enquire Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${pottery})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Skill up for FUN...
                    </h2>
                    <div className="btn-group" role="group">
                      <a href="#menu">
                        <button type="button" className="c_button">
                          Try it Today
                        </button>
                      </a>
                      <span> &nbsp; &nbsp; &nbsp;</span>
                      <a href="#contact">
                        <button type="button" className="c_button">
                          Enquire Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${cooking})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Own your Skills
                    </h2>
                    <div className="btn-group" role="group">
                      <a href="#menu">
                        <button type="button" className="c_button">
                          Try it Today
                        </button>
                      </a>
                      <span>&nbsp; &nbsp; &nbsp;</span>
                      <a href="#contact">
                        <button type="button" className="c_button">
                          Enquire Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-5 align-items-stretch video-box"
                style={{ backgroundImage: `url(${dhoni})` }}
              >
                {/* <a href="https://www.youtube.com/watch?v=b4OH3vBANa4" className="venobox play-btn mb-4" data-vbtype="video"
                                    data-autoplay="true"></a> */}
              </div>
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                <div className="content">
                  <h3>About Us</h3>
                  <p>
                    Skill spark is a leading fitness and wellness platform that
                    provides access to thousands of classes, gyms, and studios
                    around the world. Our mission is to make it easy and
                    enjoyable for people to live an active and healthy
                    lifestyle. With ClassPass, you can discover new workouts,
                    challenge yourself with different fitness modalities, and
                    connect with like-minded individuals who share your passion
                    for wellness. Our platform offers a wide range of classes,
                    from yoga and Pilates to strength training and cardio, and
                    everything in between. Whether you're a beginner or an
                    experienced athlete, we have something for everyone. With
                    flexible membership options, you can choose the plan that
                    works best for your schedule and budget. Join the ClassPass
                    community today and start your journey to a healthier,
                    happier you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="section-title">
              <h2>
                Why choose <span>Skill Spark</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <span>01</span>
                  <h4>Variety</h4>
                  <p>
                    A diverse range of classes and activities. This variety can
                    help you find new and interesting workshops to keep you
                    motivated and engaged, including yoga, Pilates, strength
                    training, dance, and more.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <span>02</span>
                  <h4>Flexibility</h4>
                  <p>
                    Book classes at different studios in your city, giving you
                    the flexibility to create a routine that fits your schedule
                    and preferences.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <span>03</span>
                  <h4>Cost-effective</h4>
                  <p>
                    Cost-effective option for people who want to try different
                    types of workshops without committing to a long-term
                    membership for individual classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="events" className="events">
          <div className="container">
            <div className="section-title">
              <h2>
                Explore Our <span>TOP CLASSES</span> In Boston
              </h2>
            </div>
            <div className="events-slider swiper">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="testimonial-item">
                    <div className="row event-item">
                      <div className="col-lg-6">
                        <img src={dance1} className="img-fluid" alt="" />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Arthur Murray Dance Studio</h3>
                        <div className="price">
                          <p>
                            <span style={{ color: "white" }}>$49.99</span>
                          </p>
                        </div>
                        <p className="fst-italic">
                          Experience learning social dancing, wedding dance or
                          competitive dancing at our Boston ballroom dance
                          studio
                        </p>
                        <ul>
                          <li>
                            <i className="bx bx-check-circle"></i> Overcome Your
                            Shyness.
                          </li>
                          <li>
                            <i className="bx bx-check-circle"></i> Make New
                            Friends.
                          </li>
                          <li>
                            <i className="bx bx-check-circle"></i> Improve
                            Physical Fitness.
                          </li>
                        </ul>
                        <p>
                          Give yourself the gift of confidence, the joy of
                          meeting new friends, overcoming shyness and lowering
                          the risks of depression while learning ballroom
                          dancing, wedding dance or competitive dancing at our
                          Arthur Murray Dance Studio
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src={cooking1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Selfup Cooking Classes</h3>
                      <div className="price">
                        <p>
                          <span style={{ color: "white" }}>$99.99</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Our cooking classes are really the best way to boost
                        your team's motivation and cultivate connections through
                        team building activities, that will last far beyond the
                        cooking className event
                      </p>
                      <ul>
                        <li>
                          <i className="bx bx-check-circle"></i> Couples
                          Cooking.
                        </li>
                        <li>
                          <i className="bx bx-check-circle"></i> Corporate
                          Cooking.
                        </li>
                        <li>
                          <i className="bx bx-check-circle"></i> Mixology
                          Cooking.
                        </li>
                      </ul>
                      <p>
                        Our cooking classes are better than most team building
                        exercises because there is a fun project to complete,
                        where the reward is a delicious meal you can all share
                        together
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src={pottery1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Clay Lounge</h3>
                      <div className="price">
                        <p>
                          <span style={{ color: "white" }}>$29.99</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Clay Lounge is a community driven pottery studio and
                        gallery located in SoWa Arts District in the South End
                        of Boston
                      </p>
                      <ul>
                        <li>
                          <i className="bx bx-check-circle"></i> Creative
                          Outlet.
                        </li>
                        <li>
                          <i className="bx bx-check-circle"></i> Mindfulness and
                          Relaxation.
                        </li>
                        <li>
                          <i className="bx bx-check-circle"></i> Development of
                          Motor Skills.
                        </li>
                      </ul>
                      <p>
                        Clay Lounge is a creative space welcoming beginners and
                        experienced potters to journey into clay. Come take a
                        className and join the community!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="section-title">
              <h2>
                Some photos from <span>Our Classes</span>
              </h2>
            </div>

            <div className="row g-0">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery1} className="gallery-lightbox">
                    <img src={gallery1} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery2} className="gallery-lightbox">
                    <img src={gallery2} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery3} className="gallery-lightbox">
                    <img src={gallery3} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery4} className="gallery-lightbox">
                    <img src={gallery4} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery5} className="gallery-lightbox">
                    <img src={gallery5} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery6} className="gallery-lightbox">
                    <img src={gallery6} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery7} className="gallery-lightbox">
                    <img src={gallery7} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href={gallery8} className="gallery-lightbox">
                    <img src={gallery8} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={navin} className="testimonial-img" alt="" />
                <h3>Navin Sharma</h3>
                <h4>Founder</h4>
                <div className="stars">
                  <i className="bx bx-star-fill"></i>
                  <i className="bx bx-star-fill"></i>
                  <i className="bx bx-star-fill"></i>
                  <i className="bx bx-star-fill"></i>
                  <i className="bx bx-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>I
                  recently participated in a cricket course that was an
                  absolutely wonderful experience! The course covered an
                  extensive range of skills, including batting, bowling, and
                  fielding, and I felt like I learned a tremendous amount in a
                  short amount of time. One of the things I appreciated the most
                  about the course was the perfect balance between individual
                  attention and group work, enabling me to sharpen my skills and
                  collaborate effectively with my fellow learners. Overall, I
                  would highly recommend this cricket course to anyone seeking
                  to elevate their game as it left me feeling more confident and
                  competent on the cricket field.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={ruchi} className="testimonial-img" alt="" />
                <h3>Ruchi Kapadiwala</h3>
                <h4>Designer</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Attending Sarah's healthy cooking class was an exceptional
                  experience. Her passion for cooking and healthy living was
                  evident throughout the course, which struck a perfect balance
                  between instruction and hands-on practice. Not only did it
                  enhance my cooking skills and boost my confidence in the
                  kitchen, but the emphasis on whole, nutrient-rich ingredients
                  in the recipes shared by Sarah also made them incredibly
                  healthy and delicious. I highly recommend this course to
                  anyone seeking to improve their cooking skills and embrace a
                  healthier lifestyle.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={charmi} className="testimonial-img" alt="" />
                <h3>Charmi Parmar</h3>
                <h4>Freelancer</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>I had
                  a fantastic experience attending Scarlet's salsa class. She is
                  an incredible dance teacher with an infectious passion for the
                  art of salsa. Scarlet's teaching style was challenging yet
                  supportive, allowing us to try new steps and enhance our
                  technique with ease. Her ability to break down complex dance
                  moves into simple and easy-to-follow instructions made it
                  enjoyable for everyone. Overall, I highly recommend Scarlet's
                  salsa class to anyone looking to learn a new dance or enhance
                  their salsa skills, as it was an incredible opportunity to
                  improve my dance skills while having fun.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={meenal} className="testimonial-img" alt="" />
                <h3>Meenal Sarwaiya</h3>
                <h4>Entrepreneur</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Attending Alexandria's pilates class was an amazing experience
                  that left me feeling refreshed and invigorated. Her vast
                  knowledge of the practice shone through as she provided clear
                  instructions and individual feedback throughout the class,
                  making it challenging yet nurturing. I felt energized
                  throughout the class, and I highly recommend it to anyone
                  looking to enhance their strength and flexibility in a
                  supportive environment. Overall, it was an excellent
                  opportunity to improve my physical health and wellbeing while
                  being guided by an outstanding pilates coach.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={atharva} className="testimonial-img" alt="" />
                <h3>Atharva Danke</h3>
                <h4>Co-founder</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Participating in the hiking class was a fantastic experience
                  for me. The hands-on approach and supportive environment
                  allowed me to practice and enhance my hiking skills
                  effectively. I was awe-struck by the stunning hiking trails
                  and was fascinated to learn more about the local flora and
                  fauna. Overall, I highly recommend this hiking class to anyone
                  looking to improve their hiking skills and learn more about
                  the great outdoors. It was an excellent opportunity to explore
                  the beauty of nature and gain knowledge while being guided by
                  experts.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>
                <span>Contact</span> Us
              </h2>
            </div>
          </div>

          <div className="map">
            <iframe
              style={{ border: `0`, width: `100%`, height: `350px` }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1274194639486!2d-71.0913603849059!3d42.3398066791882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern%20University!5e0!3m2!1sen!2sus!4v1676429761623!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="container mt-5">
            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6 info">
                  <i className="bx bx-map"></i>
                  <h4>Location:</h4>
                  <p>
                    Northeastern University
                    <br />
                    Boston, MA 02115
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                  <i className="bx bx-time"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Saturday:
                    <br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                  <i className="bx bx-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    <a
                      className="contactdetails"
                      href="mailto:skillspark@gmail.com"
                    >
                      skillspark@gmail.com
                    </a>
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                  <i className="bx bx-phone"></i>
                  <h4>Call:</h4>
                  <p>
                    <a className="contactdetails" href="tel:+1 857 857 8585">
                      +1 857 857 8585
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary text-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Send Message"
                  onclick="alerttext()"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div class="container">
          <h3>Skill Spark</h3>
          <p>Experience the freedom of variety with Skill Spark</p>
          <div class="social-links">
            <a href="#" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="google-plus">
              <i class="bx bxl-skype"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span style={{ color: "#ffb03b" }}>Skill Spark</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}
