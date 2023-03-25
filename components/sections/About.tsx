import Image from "next/image";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { name, bio, avatar } from "../../lib/info";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center mx-auto pb-20 pt-28 bg-slate-600"
    >
      <div>
        <div className="flex justify-center md:mt-8 md:flex-row">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={200}
            priority
          />
        </div>
      </div>
      <div className="mx-20">
        <p className="text-white my-1 max-w-[460px]">Hi, I&apos;m</p>
        <h1 className="text-white font-bold text-3xl font-serif">{name}</h1>
        <div className="flex justify-left my-2">
          <div className="">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kabcouwer"
              className="flex gap-2"
            >
              <AiOutlineGithub size={28} />
            </a>
          </div>
          <div className="">
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
        <p className="my-5 max-w-[460px]">{bio()}</p>
      </div>
    </section>
  );
}
