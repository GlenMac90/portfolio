import Hero from "./components/Hero";
import MySkills from "./components/MySkills";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center bg-white800 dark:bg-black300">
      <Hero />
      <MySkills />
    </main>
  );
}
