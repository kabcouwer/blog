"use client";

import React, { useState, useCallback, useEffect } from "react";

import PersonalBio from "../../components/content/personal-bio.mdx";
import profilePic from "../../public/images/avatar.jpg";

import AboutDesktopLayout from "../../components/layouts/AboutDesktopLayout";
import AboutMobileLayout from "../../components/layouts/AboutMobileLayout";

const attributes = {
  name: "Kim Abcouwer",
  avatar: profilePic,
  bio: <PersonalBio />,
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const isMobile = useMediaQuery(480);

  return (
    <section id="about">
      <div>
        {isMobile ? (
          <AboutMobileLayout attributes={attributes} />
        ) : (
          <AboutDesktopLayout attributes={attributes} />
        )}
      </div>
    </section>
  );
}
