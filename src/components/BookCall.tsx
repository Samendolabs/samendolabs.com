"use client";

import { useCallback } from "react";

const CALENDLY_URL = "https://calendly.com/samendolabs/30min";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

function ensureCalendly(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();

    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    if (window.Calendly) return resolve();

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_JS}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_JS;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", () => resolve(), { once: true });
    if (window.Calendly) resolve();
  });
}

export function BookCall({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const onClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    await ensureCalendly();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  }, []);

  return (
    <a href={CALENDLY_URL} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
