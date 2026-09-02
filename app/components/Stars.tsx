interface StarsProps {
  /** Rating out of `total`. Fractional values render a partially filled star. */
  value: number;
  total?: number;
  /** Pixel size of a single star. */
  size?: number;
  className?: string;
  /** Accessible label; falls back to "3.5 out of 5". */
  label?: string;
}

// Solid five-point star. The project's images/icons/star.svg is Font Awesome's
// *regular* star, whose second subpath cuts the interior hollow — so a filled
// rating rendered from it reads as empty. This path is the solid variant.
const STAR_PATH =
  'M12 1.6l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77l-6.18 3.25L7 14.15l-5-4.87 6.91-1z';

const FILLED = '#e5bb89';
const EMPTY = 'rgba(229, 187, 137, 0.28)';

const Stars = ({ value, total = 5, size = 15, className, label }: StarsProps) => {
  const clamped = Math.max(0, Math.min(total, Number.isFinite(value) ? value : 0));

  return (
    <span
      className={`inline-flex items-center gap-[2px] ${className ?? ''}`}
      role="img"
      aria-label={label ?? `${clamped} out of ${total}`}
    >
      {Array.from({ length: total }, (_, i) => {
        // fraction of star i that should be filled
        const fill = Math.max(0, Math.min(1, clamped - i));
        // unique per instance so multiple ratings on a page don't collide
        const gradientId = `star-${i}-${Math.round(fill * 100)}-${total}-${size}`;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            {fill > 0 && fill < 1 && (
              <defs>
                <linearGradient id={gradientId}>
                  <stop offset={`${fill * 100}%`} stopColor={FILLED} />
                  <stop offset={`${fill * 100}%`} stopColor={EMPTY} />
                </linearGradient>
              </defs>
            )}
            <path
              d={STAR_PATH}
              fill={fill >= 1 ? FILLED : fill <= 0 ? EMPTY : `url(#${gradientId})`}
            />
          </svg>
        );
      })}
    </span>
  );
};

export default Stars;
