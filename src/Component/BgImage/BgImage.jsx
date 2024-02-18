"use client";
import Image from "next/image";
import bgImage from "@/images/bg.jpg";

export default function AppBgImg() {
  return (
    <Image
      src={bgImage}
      placeholder="blur"
      fill
      alt="bg"
      sizes="100%"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
