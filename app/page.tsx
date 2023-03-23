import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <div>
        I am the homepage
      </div>
      <div>
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/kabcouwer"
            className="flex items-center gap-2"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
      <div>
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kim-abcouwer?trk=profile-badge"
            className="flex items-center gap-2"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}
