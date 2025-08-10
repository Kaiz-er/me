export default function ExperienceSection({ title, period, stack }) {
  return (
    <div className="mb-5 transition duration-300 ease-in-out hover:-translate-x-1">
      <div className="flex justify-between mb-1">
        <p className="text-lg">{title}</p>
        <span className="text-sm text-zinc-400">{period}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((item, index) => {
          return (
            <span key={index} className="text-xs text-zinc-400">
              {item}
              {index < stack.length - 1 && " /"}
            </span>
          );
        })}
      </div>
    </div>
  );
}
