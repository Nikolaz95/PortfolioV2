// Official-looking brand logos in their real colors.
// They size with the font size (1em), just like react-icons, so they work inside <IconButton>.

export function LinkedInLogo(props) {
  return (
    <svg viewBox="0 0 72 72" width="1em" height="1em" aria-hidden="true" {...props}>
      <rect width="72" height="72" rx="10" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M13.1 27.7h9.5V58h-9.5zM17.8 12.6a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M28.5 27.7h9.1v4.2h.1c1.3-2.4 4.4-4.9 8.9-4.9 9.6 0 11.4 6.3 11.4 14.5V58h-9.5V43.2c0-3.5-.1-8.1-4.9-8.1-4.9 0-5.7 3.9-5.7 7.8V58h-9.4z"
      />
    </svg>
  )
}

export function GmailLogo(props) {
  return (
    <svg viewBox="52 42 88 66" width="1em" height="1em" aria-hidden="true" {...props}>
      <path fill="#4285F4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34A853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#FBBC04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#EA4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#C5221F" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  )
}
