import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("https://readingsu.co.uk/student-opportunities/view/garps");
  return (
    <>
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p>
        The page you were looking for might not exist yet, as this website is
        still under construction.
      </p>
    </>
  );
}
