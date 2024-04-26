// import Products from "./ui/Products/Products";
import Categories from "./ui/Categories/Categories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-16">
      {/* <Products /> */}
      <Categories />
    </main>
  );
}
