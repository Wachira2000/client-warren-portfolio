import ProgressBar from "./ProgressBar";

const skills = [
  { iconPath: "/asana.svg", title: "Asana", percentage: 99 },
  { iconPath: "/trello.png", title: "Trello", percentage: 98 },
  {
    iconPath: "/microsoft-word.png",
    title: "Microsoft Word",
    percentage: 100,
  },
  {
    iconPath: "/microsoft-excel.png",
    title: "Microsoft Excel",
    percentage: 100,
  },
  {
    iconPath: "/powerpoint.png",
    title: "PowerPoint",
    percentage: 100,
  },
  { iconPath: "/outlook.png", title: "Outlook", percentage: 99 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-fit py-20 relative bg-gray-100"
    >
      <div className="flex justify-center">
        <span className="bg-yellow-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5">
          Skills
        </span>
      </div>
      <div className="max-w-[1400px] w-[91%] mx-auto grid md:grid-cols-2 md:gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <ProgressBar {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
