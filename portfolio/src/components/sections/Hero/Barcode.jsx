// Decorative barcode drawn from the letters of `value`.
// The same text always gives the same barcode.
export default function Barcode({ value, height = 34 }) {
  const bars = []
  let x = 0

  for (const char of value) {
    const code = char.charCodeAt(0)
    for (let bit = 0; bit < 4; bit++) {
      const width = ((code >> bit) & 1) + 1 // thin (1) or thick (2) bar
      if (bit % 2 === 0) bars.push({ x, width })
      x += width + 1
    }
  }

  return (
    <svg viewBox={`0 0 ${x} ${height}`} preserveAspectRatio="none" width="100%" height={height} aria-hidden="true">
      {bars.map((bar) => (
        <rect key={bar.x} x={bar.x} width={bar.width} height={height} fill="currentColor" />
      ))}
    </svg>
  )
}
