import WeekProducts from "./ui/WeekProducts/WeekProducts";
import Categories from "./ui/Categories/Categories";
import Welcome from "./ui/Home/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Welcome />
      <Categories />
      <WeekProducts />
    </main>
  );
}
