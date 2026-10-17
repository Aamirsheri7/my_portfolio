import React, { useState } from 'react';
import { Smartphone, ExternalLink, ShoppingBag, Share2, Activity, Zap, Check, Shield, Wifi, Battery, RefreshCw, QrCode } from 'lucide-react';
import { interactiveSimulators } from '../data/portfolioData';

export default function AppSimulator() {
  const [selectedAppId, setSelectedAppId] = useState(interactiveSimulators[0].id);
  const [interactiveState, setInteractiveState] = useState({
    cartCount: 3,
    addedNotice: '',
    qrGenerated: false,
    miningRefreshed: false,
    cryptoTick: 0,
  });

  const activeApp = interactiveSimulators.find((a) => a.id === selectedAppId) || interactiveSimulators[0];

  const handleSimulateAction = () => {
    if (activeApp.id === 'annalaxmi') {
      setInteractiveState((prev) => ({
        ...prev,
        cartCount: prev.cartCount + 1,
        addedNotice: '⚡ Instant local cart incremented (0ms UI latency)!',
      }));
      setTimeout(() => {
        setInteractiveState((prev) => ({ ...prev, addedNotice: '' }));
      }, 2500);
    } else if (activeApp.id === 'vicard') {
      setInteractiveState((prev) => ({
        ...prev,
        qrGenerated: !prev.qrGenerated,
      }));
    } else if (activeApp.id === 'orlla') {
      setInteractiveState((prev) => ({
        ...prev,
        miningRefreshed: true,
      }));
      setTimeout(() => {
        setInteractiveState((prev) => ({ ...prev, miningRefreshed: false }));
      }, 2000);
    } else if (activeApp.id === 'cryptowater') {
      setInteractiveState((prev) => ({
        ...prev,
        cryptoTick: prev.cryptoTick + 1,
      }));
    }
  };

  return (
    <section
      id="simulator"
      style={{
        padding: '5.5rem 0',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(13, 18, 31, 0.9) 50%, var(--bg-primary) 100%)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interactive Production Showcase</span>
          <h2 className="section-title">
            Test-Drive My <span className="gradient-text">React Native</span> Apps
          </h2>
          <p className="section-desc">
            Interact with the simulated mobile device below to experience real architectural features:
            optimistic state updates, QR scanning, real-time WebSockets, and Play Store deployed apps.
          </p>
        </div>

        {/* Simulator Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 380px',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="simulator-layout"
        >
          {/* Left Column: App Selector & Technical Deep Dive */}
          <div>
            {/* App Selection Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              {interactiveSimulators.map((app) => {
                const isActive = app.id === selectedAppId;
                return (
                  <button
                    key={app.id}
                    onClick={() => setSelectedAppId(app.id)}
                    style={{
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: isActive
                        ? 'rgba(6, 182, 212, 0.15)'
                        : 'rgba(255, 255, 255, 0.04)',
                      border: isActive
                        ? '1px solid var(--accent-cyan)'
                        : '1px solid var(--border-subtle)',
                      color: isActive ? '#fff' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontWeight: '700',
                      fontSize: '0.92rem',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <Smartphone
                      size={18}
                      style={{ color: isActive ? 'var(--accent-cyan)' : 'var(--text-dim)' }}
                    />
                    <span>{app.appName}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '99px',
                        background: isActive ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.08)',
                        color: isActive ? '#041018' : 'var(--text-dim)',
                        fontWeight: '800',
                      }}
                    >
                      {app.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active App Technical Overview Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'rgba(18, 24, 38, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge badge-emerald">
                  <Shield size={14} />
                  {activeApp.badge}
                </span>
                {activeApp.playStoreUrl && (
                  <a
                    href={activeApp.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span>Open in Google Play</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: '#fff' }}>
                {activeApp.appName} — {activeApp.category}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {activeApp.id === 'annalaxmi' &&
                  'A full-scale ecosystem comprising 3 dedicated mobile applications for Customers, Delivery Drivers, and Stores. Engineered with sub-80ms API response time and optimistic local cart operations.'}
                {activeApp.id === 'vicard' &&
                  'Production-deployed digital business card networking app with over 10,000+ organic Google Play Store downloads. Features fast dynamic QR generation, offline contacts sync, and analytics.'}
                {activeApp.id === 'orlla' &&
                  'Fintech blockchain mining reward platform featuring real-time token tracking, cryptographic session validation, and state caching built with Zustand and RTK Query.'}
                {activeApp.id === 'cryptowater' &&
                  'High-frequency cryptocurrency trading mobile application with zero-latency live WebSocket tickers, memoized FlatLists, and instantaneous price alerts.'}
              </p>

              {/* Architecture highlights list */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="highlight-grid">
                {activeApp.id === 'annalaxmi' && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Zap size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span>Optimistic UI updates</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Activity size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span>~80ms API response</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <ShoppingBag size={16} style={{ color: 'var(--accent-amber)' }} />
                      <span>3 Connected apps</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <ExternalLink size={16} style={{ color: 'var(--accent-purple)' }} />
                      <span>Live Play Store link</span>
                    </div>
                  </>
                )}

                {activeApp.id === 'vicard' && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Zap size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span>10K+ Play Store Installs</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <QrCode size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span>Dynamic QR generation</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Share2 size={16} style={{ color: 'var(--accent-purple)' }} />
                      <span>Instant vCard sharing</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Shield size={16} style={{ color: 'var(--accent-amber)' }} />
                      <span>Offline-first cache</span>
                    </div>
                  </>
                )}

                {activeApp.id === 'orlla' && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Zap size={16} style={{ color: 'var(--accent-purple)' }} />
                      <span>Zustand client state</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <RefreshCw size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span>RTK Query server cache</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Shield size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span>Biometric auth token</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Activity size={16} style={{ color: 'var(--accent-amber)' }} />
                      <span>Real-time token sync</span>
                    </div>
                  </>
                )}

                {activeApp.id === 'cryptowater' && (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Zap size={16} style={{ color: 'var(--accent-amber)' }} />
                      <span>WebSockets stream</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Activity size={16} style={{ color: 'var(--accent-cyan)' }} />
                      <span>Memoized FlatLists</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Shield size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span>HTTP interceptors</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <RefreshCw size={16} style={{ color: 'var(--accent-purple)' }} />
                      <span>Zero frame drops</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Interactive Trigger Button */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={handleSimulateAction}
                className="btn btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${activeApp.accentColor}, #06b6d4)`,
                }}
              >
                {activeApp.id === 'annalaxmi' && '⚡ Simulate Optimistic Cart Add'}
                {activeApp.id === 'vicard' && (interactiveState.qrGenerated ? 'Hide QR Code' : '⚡ Simulate Generate QR')}
                {activeApp.id === 'orlla' && (interactiveState.miningRefreshed ? 'Syncing...' : '⚡ Sync Mining Rewards')}
                {activeApp.id === 'cryptowater' && '⚡ Stream WebSocket Tickers'}
              </button>
            </div>
          </div>

          {/* Right Column: The Phone Mockup */}
          <div className="phone-mockup-wrapper">
            <div className="phone-mockup">
              {/* Notch */}
              <div className="phone-notch">
                <div className="notch-camera"></div>
              </div>

              {/* Screen */}
              <div className="phone-screen">
                {/* Status Bar */}
                <div className="phone-status-bar">
                  <span>9:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{activeApp.signal}</span>
                    <Wifi size={12} />
                    <Battery size={13} />
                  </div>
                </div>

                {/* Simulated Screen Content: AnnaLaxmi */}
                {activeApp.id === 'annalaxmi' && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                      <div>
                        <div style={{ fontWeight: '800', fontSize: '1rem', color: '#fff' }}>AnnaLaxmi</div>
                        <div style={{ fontSize: '0.72rem', color: '#10b981' }}>Express Grocery (15m)</div>
                      </div>
                      <div
                        style={{
                          background: 'rgba(16, 185, 129, 0.2)',
                          padding: '0.35rem 0.65rem',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: '#34d399',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <ShoppingBag size={12} />
                        <span>Cart: {interactiveState.cartCount}</span>
                      </div>
                    </div>

                    {/* Notification message */}
                    {interactiveState.addedNotice && (
                      <div
                        style={{
                          background: 'rgba(16, 185, 129, 0.25)',
                          border: '1px solid #10b981',
                          padding: '0.45rem',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          color: '#6ee7b7',
                          marginBottom: '0.65rem',
                          textAlign: 'center',
                          fontWeight: '600',
                        }}
                      >
                        {interactiveState.addedNotice}
                      </div>
                    )}

                    {/* Cart Items list */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {activeApp.screenData.items.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: '10px',
                            padding: '0.65rem 0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#f1f5f9' }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                              {item.qty} • <span style={{ color: '#10b981' }}>{item.tag}</span>
                            </div>
                          </div>
                          <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#fff' }}>
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Checkout Bar */}
                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Estimated Total</span>
                        <span style={{ fontWeight: '800', color: '#fff' }}>{activeApp.screenData.totalAmount}</span>
                      </div>
                      <div
                        style={{
                          background: '#10b981',
                          borderRadius: '10px',
                          padding: '0.65rem',
                          textAlign: 'center',
                          fontWeight: '700',
                          fontSize: '0.85rem',
                          color: '#062818',
                        }}
                      >
                        Proceed to Checkout
                      </div>
                      <div style={{ fontSize: '0.68rem', textAlign: 'center', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                        {activeApp.screenData.statusMessage}
                      </div>
                    </div>
                  </div>
                )}

                {/* Simulated Screen Content: Vicard */}
                {activeApp.id === 'vicard' && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan-light)', fontWeight: '700' }}>
                        VICARD DIGITAL PROFILE
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>10,000+ Active Installs</div>
                    </div>

                    {/* Card Preview */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
                        borderRadius: '16px',
                        padding: '1.2rem',
                        color: '#fff',
                        marginBottom: '1rem',
                        boxShadow: '0 8px 20px rgba(6, 182, 212, 0.3)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ fontWeight: '900', fontSize: '1.1rem' }}>Mohammad Aamir</div>
                        <Shield size={16} />
                      </div>
                      <div style={{ fontSize: '0.78rem', opacity: 0.9 }}>React Native & React.js Developer</div>
                      <div style={{ fontSize: '0.72rem', opacity: 0.8, marginTop: '0.2rem' }}>moaamir845@gmail.com</div>
                    </div>

                    {/* QR Code toggle or Actions */}
                    {interactiveState.qrGenerated ? (
                      <div
                        style={{
                          background: '#fff',
                          borderRadius: '14px',
                          padding: '1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#000',
                          marginBottom: '1rem',
                        }}
                      >
                        <QrCode size={110} />
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', marginTop: '0.35rem' }}>
                          Scan to Save Contact
                        </span>
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
                        {activeApp.screenData.quickActions.map((act, i) => (
                          <div
                            key={i}
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              borderRadius: '8px',
                              padding: '0.6rem 0.5rem',
                              textAlign: 'center',
                              fontSize: '0.74rem',
                              fontWeight: '600',
                              color: '#cbd5e1',
                            }}
                          >
                            {act}
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                      {activeApp.screenData.statsSummary}
                    </div>
                  </div>
                )}

                {/* Simulated Screen Content: Orlla */}
                {activeApp.id === 'orlla' && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontWeight: '800', color: '#c084fc', fontSize: '0.95rem' }}>ORLLA REWARDS</span>
                      <span style={{ fontSize: '0.7rem', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                        Zustand + RTK
                      </span>
                    </div>

                    <div
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(76, 29, 149, 0.3))',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Mining Balance</div>
                      <div style={{ fontSize: '1.65rem', fontWeight: '800', color: '#fff', margin: '0.2rem 0' }}>
                        {activeApp.screenData.tokenBalance}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#a78bfa' }}>{activeApp.screenData.fiatEquivalent}</div>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '0.85rem', marginBottom: '0.65rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Daily Hash Yield:</span>
                        <span style={{ color: '#10b981', fontWeight: '700' }}>{activeApp.screenData.rewardsToday}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Latest Synced:</span>
                        <span style={{ color: '#cbd5e1' }}>{activeApp.screenData.recentMiningBlock}</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                      {activeApp.screenData.statusMessage}
                    </div>
                  </div>
                )}

                {/* Simulated Screen Content: CryptoWater */}
                {activeApp.id === 'cryptowater' && (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <span style={{ fontWeight: '800', color: '#f59e0b', fontSize: '0.95rem' }}>CRYPTO WATER</span>
                      <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span className="pulse-dot"></span> WS Live
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1 }}>
                      {activeApp.screenData.pairs.map((pair, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: '10px',
                            padding: '0.65rem 0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#fff' }}>{pair.symbol}</div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>Tick #{interactiveState.cryptoTick + idx * 5}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#f8fafc' }}>{pair.price}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: '700', color: pair.up ? '#10b981' : '#ef4444' }}>
                              {pair.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.68rem', color: 'var(--text-dim)' }}>
                      {activeApp.screenData.statusMessage}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .simulator-layout {
            grid-template-columns: 1fr !important;
          }
          .phone-mockup-wrapper {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
