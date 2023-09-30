import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://readingsu.co.uk/student-opportunities/view/garps");
  return (
    <main>
      <h1 className="text-3xl font-bold font-atkinson">GARPS</h1>
      <p>Website under construction.</p>
    </main>
  );
}
