"use client";

import { useEffect, useMemo, useState } from "react";

import { readCookieConsent, writeCookieConsent } from "../lib/cookieConsent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const nowIso = useMemo(() => new Date().toISOString(), []);

  useEffect(() => {
    const existing = readCookieConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      return;
    }
    setVisible(true);
  }, []);

  if (!visible) return null;

  function acceptAll() {
    writeCookieConsent({ status: "accepted", analytics: true, timestamp: nowIso });
    setVisible(false);
  }

  function openManage() {
    setManageOpen(true);
  }

  function closeManage() {
    setManageOpen(false);
  }

  function savePreferences() {
    writeCookieConsent({ status: "custom", analytics, timestamp: nowIso });
    setVisible(false);
  }

  return (
    <>
      <div className="cookieBanner" role="dialog" aria-live="polite" aria-label="Cookie consent">
        <p className="cookieBannerText">
          GuideAtlas uses essential storage and optional analytics cookies.
        </p>
        <div className="cookieBannerActions">
          <button className="cookieBtn cookieBtnPrimary" type="button" onClick={acceptAll}>
            Accept all
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
                understand traffic and improve the experience.
              </p>

              <div className="cookiePref">
                <div>
                  <h3>Essential</h3>
                  <p>Required for the website to function and remember your cookie choice.</p>
                </div>
                <div className="cookiePill" aria-label="Essential cookies are always on">
                  Always on
                </div>
              </div>

              <label className="cookiePref cookiePrefToggle">
                <div>
                  <h3>Analytics</h3>
                  <p>Google Analytics helps us understand usage and improve the product.</p>
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
