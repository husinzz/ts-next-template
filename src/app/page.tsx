export default function Home() {
  return (
    <div className="flex h-full flex-col">
      {/* Some header */}
      <div className="flex  flex-grow items-center justify-center">
        <div className="text-center">
          <p className="text-3xl font-bold">The template works</p>
          <p>Unless its not bold and huge</p>
        </div>
      </div>
      <p className="text-center">
        This template is intended for fullstack apps
      </p>
      {/* Some footer */}
    </div>
  );
}
