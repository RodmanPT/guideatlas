"use client";

import { useEffect, useMemo, useState } from "react";

type CookieConsent = {
  // accepted = "Accept" button. custom = user saved preferences.
  status: "accepted" | "custom";
  analytics: boolean;
  timestamp: string;
};

const STORAGE_KEY = "guideatlas.cookieConsent.v1";

function readConsent(): CookieConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (!parsed || (parsed.status !== "accepted" && parsed.status !== "custom")) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    if (typeof parsed.timestamp !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(consent: CookieConsent) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const nowIso = useMemo(() => new Date().toISOString(), []);

  useEffect(() => {
    const existing = readConsent();
    if (existing) return;
    setVisible(true);
  }, []);

  if (!visible) return null;

  function acceptAll() {
    writeConsent({ status: "accepted", analytics: true, timestamp: nowIso });
    setVisible(false);
  }

  function openManage() {
    setManageOpen(true);
  }

  function closeManage() {
    setManageOpen(false);
  }

  function savePreferences() {
    writeConsent({ status: "custom", analytics, timestamp: nowIso });
    setVisible(false);
  }

  return (
    <>
      <div className="cookieBanner" role="dialog" aria-live="polite" aria-label="Cookie consent">
        <p className="cookieBannerText">This website uses cookies to improve your experience.</p>
        <div className="cookieBannerActions">
          <button className="cookieBtn cookieBtnPrimary" type="button" onClick={acceptAll}>
            Accept
          </button>
          <button className="cookieBtn cookieBtnGhost" type="button" onClick={openManage}>
            Manage preferences
          </button>
        </div>
      </div>

      {manageOpen ? (
        <div className="cookieModalOverlay" role="presentation" onClick={closeManage}>
          <div
            className="cookieModal"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cookieModalHeader">
              <h2>Cookie preferences</h2>
              <button className="cookieIconBtn" type="button" onClick={closeManage} aria-label="Close">
                ×
              </button>
            </div>

            <div className="cookieModalBody">
              <p>
                GuideAtlas uses essential cookies for basic functionality. Analytics cookies help us
                understand usage and improve the experience (future).
              </p>

              <div className="cookiePref">
                <div>
                  <h3>Essential</h3>
                  <p>Required for the website to function.</p>
                </div>
                <div className="cookiePill" aria-label="Essential cookies are always on">
                  Always on
                </div>
              </div>

              <label className="cookiePref cookiePrefToggle">
                <div>
                  <h3>Analytics (future)</h3>
                  <p>Helps us understand traffic and improve the product.</p>
                </div>
                <span className="cookieToggleWrap">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    aria-label="Enable analytics cookies"
                  />
                  <span className="cookieToggle" aria-hidden="true" />
                </span>
              </label>
            </div>

            <div className="cookieModalActions">
              <button className="cookieBtn cookieBtnPrimary" type="button" onClick={savePreferences}>
                Save preferences
              </button>
              <button
                className="cookieBtn cookieBtnGhost"
                type="button"
                onClick={() => {
                  setAnalytics(true);
                  acceptAll();
                }}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

