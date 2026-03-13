import { HeroBanner } from "./HeroBanner";

export default function HomePage() {
  return (
    <div className="w-full h-500 flex flex-col">
      <section className="w-full">
        <HeroBanner />
      </section>
    </div>
  );
}
