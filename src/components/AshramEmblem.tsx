import { useId } from 'react';

interface AshramEmblemProps {
    size?: number;
    className?: string;
}

/**
 * Authentic Manujothi Ashram / Prapancha Jyothi emblem.
 *
 * Design reference: the original emblem shows —
 *  • 7 thick concentric rainbow rings (red → orange → yellow → green → teal → blue → violet)
 *  • Dark fill inside the innermost ring
 *  • Blue outlined six-pointed star (hexagram) with semi-transparent body
 *  • Golden glowing sun with radiating rays at the very centre
 */
export function AshramEmblem({ size = 56, className = '' }: AshramEmblemProps) {
    const uid = useId();
    // All geometry is expressed in a 200×200 viewBox — scale to `size` as needed.
    const cx = 100;
    const cy = 100;

    // Ring definitions: [radius, strokeColor, strokeWidth]
    // Going from outermost to innermost, matching rainbow order
    const rings: [number, string, number][] = [
        [93, '#FF3300', 8],    // Red-orange  (outermost)
        [83, '#FF7700', 10],   // Orange
        [72, '#FFD700', 9],    // Yellow
        [62, '#22A020', 9],    // Green
        [52, '#00BFBF', 7],    // Teal
        [44, '#1A7FD4', 8],    // Blue
        [36, '#7B2FBE', 8],    // Violet (innermost)
    ];

    // Hexagram points — two overlapping equilateral triangles
    // Each triangle vertex is on a circle of radius R from centre
    const R = 28;
    const DEG = Math.PI / 180;
    // Triangle 1 — point up:  90°, 210°, 330°
    const t1 = [90, 210, 330].map((d) => [
        cx + R * Math.cos((d - 90) * DEG),
        cy + R * Math.sin((d - 90) * DEG),
    ]);
    // Triangle 2 — point down: 270°, 30°, 150°
    const t2 = [270, 30, 150].map((d) => [
        cx + R * Math.cos((d - 90) * DEG),
        cy + R * Math.sin((d - 90) * DEG),
    ]);

    const tri = (pts: number[][]) =>
        `${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)} ${pts[1][0].toFixed(2)},${pts[1][1].toFixed(2)} ${pts[2][0].toFixed(2)},${pts[2][1].toFixed(2)}`;

    // Sun ray lines: 12 rays at 30° intervals, from radius 7 to 16
    const innerR = 7;
    const outerR = 15;
    const rays = Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * DEG;
        return {
            x1: cx + innerR * Math.cos(angle),
            y1: cy + innerR * Math.sin(angle),
            x2: cx + outerR * Math.cos(angle),
            y2: cy + outerR * Math.sin(angle),
        };
    });

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Manujothi Ashram — Prapancha Jyothi emblem"
        >
            <defs>
                {/* Radial glow for sun core */}
                <radialGradient id={`embSunCore-${uid}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="20%" stopColor="#FFF176" stopOpacity="1" />
                    <stop offset="55%" stopColor="#FFAA00" stopOpacity="1" />
                    <stop offset="85%" stopColor="#FF6600" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF3300" stopOpacity="0" />
                </radialGradient>

                {/* Outer glow halo around sun */}
                <radialGradient id={`embSunHalo-${uid}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE87C" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#FF8800" stopOpacity="0" />
                </radialGradient>

                {/* Blue gradient for the hexagram */}
                <linearGradient id={`embStarGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5BC8FF" />
                    <stop offset="40%" stopColor="#2A8FE8" />
                    <stop offset="100%" stopColor="#1060C0" />
                </linearGradient>

                {/* Clip circle — everything is clipped to the outermost ring boundary */}
                <clipPath id={`embClip-${uid}`}>
                    <circle cx={cx} cy={cy} r="96" />
                </clipPath>

                {/* Filter: soft glow on rays / star edges */}
                <filter id={`embGlow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Bright bloom for sun */}
                <filter id={`embBloom-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* ── Rings (outermost → innermost) ── */}
            {rings.map(([r, color, sw], i) => (
                <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    stroke={color}
                    strokeWidth={sw}
                    fill="none"
                />
            ))}

            {/* Dark interior fill (inside innermost ring, r=36) */}
            <circle cx={cx} cy={cy} r={30} fill="#0D0E12" />

            {/* ── Hexagram — two outlined triangles ── */}
            {/* Triangle 1 (point up) */}
            <polygon
                points={tri(t1)}
                fill={`url(#embStarGrad-${uid})`}
                fillOpacity="0.22"
                stroke={`url(#embStarGrad-${uid})`}
                strokeWidth="2"
                strokeLinejoin="round"
                filter={`url(#embGlow-${uid})`}
            />
            {/* Triangle 2 (point down) */}
            <polygon
                points={tri(t2)}
                fill={`url(#embStarGrad-${uid})`}
                fillOpacity="0.22"
                stroke={`url(#embStarGrad-${uid})`}
                strokeWidth="2"
                strokeLinejoin="round"
                filter={`url(#embGlow-${uid})`}
            />

            {/* ── Sun halo ── */}
            <circle cx={cx} cy={cy} r={18} fill={`url(#embSunHalo-${uid})`} />

            {/* ── Sun rays ── */}
            {rays.map((ray, i) => (
                <line
                    key={i}
                    x1={ray.x1} y1={ray.y1}
                    x2={ray.x2} y2={ray.y2}
                    stroke="#FFD060"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.85"
                    filter={`url(#embGlow-${uid})`}
                />
            ))}

            {/* ── Sun core ── */}
            <circle cx={cx} cy={cy} r={7} fill={`url(#embSunCore-${uid})`} filter={`url(#embBloom-${uid})`} />
            {/* Bright white pinpoint */}
            <circle cx={cx} cy={cy} r={2.5} fill="#FFFFFF" opacity="0.98" />
        </svg>
    );
}
