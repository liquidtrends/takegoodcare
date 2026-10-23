"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export default function ScrollZoomHero({
  booking,
}: {
  booking: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);

  const filter = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["blur(0px)", "blur(0px)", "blur(5px)"]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [1, 1, 0.25]
  );

  // Keep the copy and booking button readable throughout.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      ref={sectionRef}
      className="scroll-zoom-hero"
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="hero hero-sticky">
        <motion.img
          className="hero-image"
          src="/images/mountain-lake.webp"
          alt="Rocky mountain peaks reflected in a still lake"
          fetchPriority="high"
          style={{
            scale: reduceMotion ? 1 : scale,
            filter: reduceMotion ? "none" : filter,
            opacity: reduceMotion ? 1 : imageOpacity,
          }}
        />

        <div className="hero-shade" aria-hidden="true" />

        <motion.div
          className="hero-content wrap"
          style={{ y: reduceMotion ? 0 : contentY }}
        >
          <h1 id="hero-heading">
            Strategic support 
            <br />
            for <em>lasting change.</em>
          </h1>

          <p className="hero-description">
            Relationship-based consulting for non-profit, Indigenous
            and community-led organizations, and social impact
            projects across Canada.
          </p>

          <a className="button" href={booking}>
            Book a free discovery session
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}