/**
 * Ticker — a seamless infinite-scroll announcement bar.
 * Uses a pure CSS animation (no JS scroll) so it's smooth and accessible.
 * The text is repeated twice side-by-side so the loop is seamless.
 */
export function Ticker() {
    const text =
        'OUR LORD GOD ALONE IS HOLY! HOLY! HOLY! — HE LIVETH FOREVER — HE HAS REDEEMED US BY THE LOVE OF HIS SUPREME SACRIFICE — PRAISE HIM, FOR HE IS GOOD AND HIS MERCY ENDURETH FOREVER — BLESSED IS HE THAT COMETH IN THE NAME OF THE LORD — AS THE LIGHTNING COMETH OUT OF THE EAST, AND SHINETH EVEN UNTO THE WEST; SO SHALL ALSO THE COMING OF THE SON OF MAN BE — MATTHEW 24:27 \u00a0\u00a0\u2605\u00a0\u00a0';

    return (
        <>
            {/* Inject keyframe once via a <style> tag */}
            <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 55s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

            <div
                className="w-full overflow-hidden bg-brass/90 text-charcoal py-2"
                role="marquee"
                aria-label="Ashram proclamation"
            >
                <div className="ticker-track">
                    {/* Two copies = seamless loop */}
                    {[0, 1].map((i) => (
                        <span
                            key={i}
                            className="whitespace-nowrap font-sans text-[10px] font-semibold uppercase tracking-[0.22em] px-12"
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
