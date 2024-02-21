"use client"

import Header from "@/Component/Header/Header";
import SignUpForm from "../../Component/SignUpForm/SignUpForm";
import HomeBox from "@/Component/HomeBox/HomeBox";
import bg from "@/images/bg.jpg";

export default function Home() {
  return (
    <div
    style={{
      backgroundImage: ` url(${bg.src})`,
    }}
    >
      <Header />
      <HomeBox />
    </ div>

  );
}
