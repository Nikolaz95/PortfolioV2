// Turns a styled <button> into a link when there is an `href`.
// `external` links open in a new tab.
export default function linkProps(href, external = false) {
  if (!href) return { type: 'button' }

  return {
    as: 'a',
    href,
    ...(external && { target: '_blank', rel: 'noreferrer' }),
  }
}
