import Window from "./Window";
import shoe from "../assets/shoe.png";
import keyboard from "../assets/keyboard.png";
import phin from "../assets/phin.png";

const TimeCapsuleItem = ({ title, description, photo }) => (
  <div className="flex-1 border-4 border-win-border bg-white">
    <div className="w-full h-40 mb-2 mx-auto">
      <img src={photo} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-center text-2xl font-bold mb-2">{title}</h3>
    {/* <p className="text-lg text-gray-700">{description}</p> */}
  </div>
);

const TimeCapsuleWindow = ({ isOpen, onClose }) => {
  const items = [
    {
      title: "Gym Shoes",
      photo: shoe,
      description:
        "Symbol of discipline and consistency. These shoes remind me that success in any field requires showing up daily and putting in the work.",
    },
    {
      title: "Keyboard",
      photo: keyboard,
      description:
        "Interface between ideas and execution. This tool represents my technical foundation and the bridge between creativity and implementation.",
    },
    {
      title: "Vietnamese Phin",
      photo: phin,
      description:
        "Bridge between heritage and innovation. This traditional phin symbolizes my cultural roots and how they inform my unique approach to problem-solving.",
    },
  ];

  return (
    <Window title="Time Capsule" isOpen={isOpen} onClose={onClose}>
      <div className=" flex gap-4 mb-4 bg-white">
        {items.map((item) => (
          <TimeCapsuleItem
            photo={item.photo}
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="bg-win-white font-sans text-win-black p-6 overflow-y-auto max-h-[400px]">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg leading-relaxed mb-4">
            In my time capsule, I would place three objects embodying who I am
            and how I work: gym shoes, a custom mechanical keyboard, and a
            traditional Vietnamese coffee filter (phin).
          </p>

          <div className="mb-6">
            <p className="text-lg leading-relaxed">
              My gym shoes represent more than just physical activity - they
              symbolize my personal and professional growth approach. Like
              training in the gym, success in consulting requires consistency,
              progressive overload, and comfort with discomfort. These shoes
              have carried me through countless workouts, each a reminder that
              meaningful progress comes from showing up daily and pushing
              boundaries incrementally.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-lg leading-relaxed">
              My mechanical keyboard is my primary tool for turning ideas into
              impact. Its customizable nature reflects my belief that systems
              should be optimized for their users. Each keystroke represents the
              interface between strategic thinking and execution, between
              concept and creation. Just as I've modified this keyboard to
              perfection, I constantly refine my approaches to problem-solving.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-lg leading-relaxed">
              The Vietnamese coffee phin is my bridge between heritage and
              innovation. This traditional brewing method requires patience -
              the slow drip of coffee through the filter can't be rushed, much
              like how the best solutions often need time to percolate. It
              represents my cultural perspective that enriches my
              problem-solving approach. The ritual of preparing coffee this way
              grounds me daily, reminding me that sometimes the most impactful
              solutions come from blending traditional wisdom with modern
              thinking.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            Together, these objects tell the story of someone who values
            discipline, craftsmanship, and cultural perspective - essential
            qualities for a consultant working at the intersection of strategy
            and innovation.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default TimeCapsuleWindow;
