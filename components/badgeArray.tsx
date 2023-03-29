type BadgeArrayProps = {
  skills: {
    text: string;
    color: string;
    bgColor: string;
  }[];
};

export default function BadgeArray({ skills }: BadgeArrayProps) {
  return (
    <div className="flex flex-wrap md:flex-nowrap content-start">
      {skills.map((skill) => {
        return (
          <span key={skill.text} className="pb-2 pr-2">
            <div
              className={`px-2 py-1 text-xs font-bold text-${skill.color} border border-${skill.color} bg-${skill.bgColor} rounded`}
            >
              {skill.text}
            </div>
          </span>
        );
      })}
    </div>
  );
}
