import Window from "./Window";
import profilePicture from "../assets/profile-picture.jpg";

const AboutWindow = ({ isOpen, onClose }) => (
  <Window title="Notepad - About Me" isOpen={isOpen} onClose={onClose}>
    <div className="bg-white max-w-2xl p-4">
      <p className="text-right">Da Lat, Vietnam. Oct 2024</p>
      <div className="flex flex-col gap-4">
        <div className="border w-full h-[350px] overflow-hidden relative">
          <div className="absolute inset-0 mx-auto">
            <img
              src={profilePicture}
              alt="Profile"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
        <div className="bg-win-white font-sans text-win-black p-6 overflow-y-auto max-h-[400px]">
          <h2 className="text-xl mb-2 font-bold">Hi, I&apos;m Bach Le. 👋🏼</h2>
          <p className="text-base leading-relaxed mb-4">
            As Director of Operations and Engineering at OHOS Media, I sit at
            the intersection of strategy, technology, and creativity. My journey
            from engineering to strategic leadership reflects my passion for
            solving complex problems and driving brand innovation through
            data-driven insights.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Leading cross-functional teams across engineering, design, and
            business development has taught me the power of borderless
            creativity - how diverse perspectives and collaborative
            problem-solving can transform challenges into opportunities. At
            OHOS, I&apos;ve helped bridge cultural and technological gaps while
            working with clients like Mastercard and American Express,
            developing strategies that resonate across different markets and
            platforms.
          </p>
          <p className="text-base leading-relaxed mb-4">
            My background uniquely positions me to understand both the technical
            feasibility and strategic impact of innovative solutions. I&apos;m
            driven by curiosity to explore how emerging technologies and
            cultural insights can create meaningful brand experiences. This
            curiosity, combined with my analytical mindset and collaborative
            approach, fuels my passion for consulting and strategy development.
          </p>
          <p className="text-base leading-relaxed">
            I&apos;m excited about the opportunity to bring this perspective to
            Ogilvy's Strategy Track, where I can contribute to creating
            culture-changing, value-driving ideas that make a lasting impact.
          </p>
        </div>
      </div>
    </div>
  </Window>
);

export default AboutWindow;
