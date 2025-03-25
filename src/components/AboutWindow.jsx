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
          <p>
            I&apos;m a creative technologist based in Brooklyn, NYC. I&apos;m
            passionate about building products that are both functional and
            aesthetically pleasing.
          </p>
          <p>
            You will most likely find me at thrift stores 🛒, the gym 🏋🏼‍♂️, or in
            the kitchen 🧑‍🍳.
          </p>
        </div>
      </div>
    </div>
  </Window>
);

export default AboutWindow;
