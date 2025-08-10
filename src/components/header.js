export default function Header() {
  return (
    <header className="flex justify-center mt-3">
      <div className="mx-6 flex h-14 w-full items-center justify-between gap-2 rounded-full border border-border bg-neutral-800 px-6 backdrop-blur sm:w-fit">
        <a className="flex w-32 flex-none justify-center">
          <span className="font-bold text-neutral-200">Kaizer Quek</span>
        </a>
        <a
          className="flex w-24 flex-auto justify-center transition-colors hover:bg-neutral-700 text-neutral-300 hover:text-neutral-50 transition-colors"
          href=""
        >
          Experience
        </a>
        <a
          className="flex w-24 flex-auto justify-center transition-colors hover:bg-neutral-700 text-neutral-300 hover:text-neutral-50 transition-colors"
          href=""
        >
          Projects
        </a>
      </div>
    </header>
  );
}
