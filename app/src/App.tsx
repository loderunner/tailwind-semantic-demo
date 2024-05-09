import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

function App() {
  const [scheme, setScheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    if (scheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [scheme]);
  const Icon = useMemo(
    () => (scheme === "dark" ? MoonIcon : SunIcon),
    [scheme]
  );

  return (
    <div className="m-0 p-8 container flex items-center flex-col gap-8">
      <button
        className={clsx(
          "p-1",
          "rounded-full",
          "bg-neutral-60",
          "text-neutral-700",
          "hover:bg-neutral-700",
          "hover:text-neutral-60",
          "dark:bg-neutral-500",
          "dark:text-neutral-40",
          "dark:hover:bg-neutral-40",
          "dark:hover:text-neutral-500"
        )}
        onClick={() => setScheme(scheme === "light" ? "dark" : "light")}
      >
        <Icon className="w-6 h-6" />
      </button>
      <div className="card">
        <h1 className="text-2xl">Card with custom component class</h1>
      </div>
      <a className="card" href="https://circleci.com" target="_blank">
        <h1 className="text-2xl">This card is a link</h1>
      </a>
    </div>
  );
}

export default App;
