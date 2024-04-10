"use client"
import Image from "next/image";
import React from "react";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import Hero from "./(components)/hero";

export default function Home() {
  return (
    <Hero />
  );
}
