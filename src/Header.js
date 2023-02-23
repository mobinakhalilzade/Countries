import { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="w-full h-16 flex justify-between py-4 px-10 shadow-lg">
      <h3 className="text-base md:text-lg pt-1">Where in the world?</h3>
      <button className="text-base md:text-lg p-0" onClick={toggleTheme}>{(theme === "light" ? "dark" : "light")} Mode</button>
    </div>
  );
}

export default Header;
