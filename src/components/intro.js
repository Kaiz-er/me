import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex justify-center items-center mt-6 sm:mt-0">
      <div>
        <Image src="/avatar.svg" alt="avatar" width="200" height="200" />
      </div>
      <div>
        <h2 className="font-bold">Hi, I'm Kaizer!</h2>
        <h2 className="flex items-center flex-wrap">
          A full-stack software engineer based in Singapore
          <Image
            src="/singapore.svg"
            alt="singapore"
            width={20}
            height={20}
            className="ml-1"
          />
        </h2>

        <div className="pt-2">
          <span className="sm:flex sm:flex-row flex-col">
            <a
              href="https://sg.linkedin.com/in/quek-kaizer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:underline"
            >
              Find me on
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width="20"
                height="20"
                className="mx-1"
              />
            </a>
            /{" "}
            <a
              className="ml-1 hover:underline"
              href="mailto:quekkaizer@gmail.com"
            >
              quekkaizer@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
