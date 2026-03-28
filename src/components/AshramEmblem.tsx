import logoUrl from '../assets/soundarya_lahari_logo.jpg';

interface AshramEmblemProps {
    size?: number;
    className?: string;
}

/**
 * Soundarya Lahari Creations emblem (replaces original SVG).
 */
export function AshramEmblem({ size = 56, className = '' }: AshramEmblemProps) {
    return (
        <img
            src={logoUrl}
            alt="Soundarya Lahari Creations Logo"
            width={size}
            height={size}
            className={`object-contain rounded-full shadow-md ${className}`}
            style={{ 
                width: size, 
                height: size, 
                // Subtle border to pop against the background
                border: '1px solid rgba(212,168,83,0.15)'
            }}
            draggable={false}
        />
    );
}
