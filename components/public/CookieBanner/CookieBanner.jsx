"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.scss";

const STORAGE_KEY = "sva0cc";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem(STORAGE_KEY);

      if (!storedConsent) {
        setShowBanner(true);
        return;
      }

      const parsed = JSON.parse(storedConsent);

      if (!parsed?.decision) {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (decision) => {
    const consentData = {
      decision,
      date: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner} aria-live="polite">
      <p className={styles.text}>
        Usamos cookies para asegurarnos de que tengas la mejor experiencia
        posible. <Link href="/legal/cookie-policy">Más información.</Link>
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.acceptButton}
          onClick={() => saveConsent("accepted")}
        >
          Aceptar todas
        </button>

        <button
          type="button"
          className={styles.declineButton}
          onClick={() => saveConsent("declined")}
        >
          Rechazar todas
        </button>
      </div>
    </div>
  );
}
