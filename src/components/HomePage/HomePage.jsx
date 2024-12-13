import React from "react";
import "./HomePage.css";
import { HeroHome } from "./HeroHome/HeroHome";
import { BentoHome } from "./BentoHome/BentoHome";

export const HomePage = () => {
  return (
    <div className="home">
        <HeroHome />
        <BentoHome />
    </div>
  );
};