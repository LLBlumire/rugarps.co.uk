export function Taster({
  name,
  gm,
  pronouns,
  system,
  low,
  high,
  children,
}: {
  name: string;
  gm: string;
  pronouns: string;
  system: string;
  low: number;
  high: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <hr />
      <div className="not-prose">
        <h4 className="text-xl font-bold">{name}</h4>
        <div className="flex gap-2">
          <div>
            Run by: {gm} ({pronouns})
          </div>
          <div className="flex-grow"></div>
          <div>System: {system};</div>
          <div>
            Players: {low}&ndash;{high}
          </div>
        </div>
        <div className="mt-1 prose max-w-none">{children}</div>
      </div>
    </>
  );
}
