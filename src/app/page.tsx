import Image from "next/image";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <div className="absolute -z-10 -inset-0">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={homeImg}
          alt="car factory"
        />
      </div>
      HomePage
    </div>
  );
}
