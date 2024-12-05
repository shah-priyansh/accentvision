import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../animation.css";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  // const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card"); // Get all card elements
    const lastCardIndex = cards.length - 1;

    // Create ScrollTriggers for first and last cards
    // const firstCardST = ScrollTrigger.create({
    //   trigger: cards[0],
    //   start: "center center",
    // });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[lastCardIndex],
      start: "center center",
      markers: false,
    });

    // Iterate through cards and create animations
    cards.forEach((card, index) => {
      const scale = index === lastCardIndex ? 1 : 0.9;
      const opacity = index === lastCardIndex ? 1 : 0.7;

      const scaleAndFade = gsap.to(card, {
        scale: scale,
        opacity: opacity,
        duration: 0.5,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        ease: "none",
        markers: false,
        animation: scaleAndFade,
        toggleActions: "restart none none reverse",
        onEnter: () => gsap.to(card, { opacity: 1 }), // Ensure the current card is fully visible
        onLeaveBack: () => gsap.to(card, { opacity: 1 }), // Fade out previous cards
      });
    });

    return () => {
      // Cleanup ScrollTriggers when the component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        style={{ height: "100vh", width: "100%", backgroundColor: "#d9ecff" }}
      ></section>
      <section
        style={{ height: "100vh", width: "100%", backgroundColor: "#929292" }}
      ></section>
      <section class="scroll-container">
        <div class="card">
          <div class="card-image">
            <img
              src="assets/images/pexels-nitin-creative-46710.jpg"
              alt="Card 1"
            />
          </div>
          <div class="card-content">
            <p class="title-number">01</p>
            <div class="dec-text">
              <p class="categories-title">Technology</p>
              <h2>First Card Title</h2>
              <p>
                Explore the beauty of innovative design and seamless user
                experience in this captivating first card.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <h1>Image 2</h1>
          </div>
          <div class="card-content">
            <p class="title-number">02</p>
            <div class="dec-text">
              <p class="categories-title">Technology</p>
              <h2>Second Card Title</h2>
              <p>
                Dive deeper into the world of creativity and discover the magic
                behind our second compelling card.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            {/* <img
              src="assets/images/pexels-nitin-creative-46710.jpg"
              alt="Card 3"
            /> */}
            <h1>Image 3</h1>
          </div>
          <div class="card-content">
            <p class="title-number">03</p>
            <div class="dec-text">
              <p class="categories-title">Technology</p>
              <h2>Third Card Title</h2>
              <p>
                Experience the ultimate storytelling through this third card
                that brings innovation to life.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="assets/images/pexels-nitin-creative-46710.jpg"
              alt="Card 4"
            />
          </div>
          <div class="card-content">
            <p class="title-number">04</p>
            <div class="dec-text">
              <p class="categories-title">Technology</p>
              <h2>Fourth Card Title</h2>
              <p>
                Experience the ultimate storytelling through this third card
                that brings innovation to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ height: "100vh", width: "100%", backgroundColor: "#d9ecff" }}
      ></section>
      <section
        style={{ height: "100vh", width: "100%", backgroundColor: "#929292" }}
      ></section>
    </>
  );
};

export default Animation;
