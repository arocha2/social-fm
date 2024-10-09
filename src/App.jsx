import { socialPeople } from "../src/data/data.json";
import { SocialCard } from "./componentes/SocialCard";

export const App = () => {
  return (
    <main className=" px-6 bg-zinc-900 w-full h-[100vh] flex gap-4 flex-wrap justify-center items-center">
      <div className="flex gap-4 flex-wrap  justify-center">
        {socialPeople.map((social) => (
          <SocialCard key={social.id} {...social} />
        ))}
      </div>
    </main>
  );
};
