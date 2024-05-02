import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
        <Icon />
      </button>
      <div
        className={clsx(
          "w-card",
          "h-card",
          "p-card",
          "bg-card",
          "dark:bg-card-dark",
          "text-card",
          "dark:text-card-dark",
          "rounded-card",
          "border",
          "border-card",
          "dark:border-card-dark"
        )}
      >
        <h1 className="text-4xl">Card with semantic color names</h1>
      </div>
      <div className="card">
        <h1 className="text-4xl">Card with custom component class</h1>
      </div>
    </div>
  );
}

export default App;
