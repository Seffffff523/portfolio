    "use client";

import { useState } from "react";

export default function TestTheme() {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Dark" : "Light"}
    </button>
  );
}
