import Image from "next/image";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { name, bio, avatar } from "../../lib/info";

export default function About() {
  return (
    <section
      id="about"
      className="md:flex items-stretch pt-28 pb-5 px-5 bg-teal-500"
    >
      <div className="content-center">
        <div className="container flex justify-center md:mt-8 md:flex-row">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={200}
            priority
          />
        </div>
        <div className="container flex justify-center my-2">
          <div className="px-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kabcouwer"
              className="flex gap-2"
            >
              <AiOutlineGithub size={28} />
            </a>
          </div>
          <div className="px-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kim-abcouwer?trk=profile-badge"
              className="flex gap-2"
            >
              <AiFillLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <p className="my-1 max-w-[460px]">Hi, I&apos;m</p>
        <h1 className="text-white font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[460px]">{bio()}</p>
      </div>
    </section>
  );
}
