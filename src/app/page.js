"use client"
import Image from "next/image";
import React from "react";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import Hero from "./(components)/hero";
import HeaderContainer from "./(components)/headercontainer";
import StickyCircle from "./(components)/stickycircle";

export default function Home() {
  return (
    <>
    <Hero />
    <HeaderContainer />
    <StickyCircle />
    <div className="min-h-screen w-full">

    </div>
    </>
  );
}
