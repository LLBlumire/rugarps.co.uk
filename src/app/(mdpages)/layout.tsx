export default function Layout({ children }: { children: React.ReactNode }) {
  return <article className="prose max-w-none mt-4">{children}</article>;
}
