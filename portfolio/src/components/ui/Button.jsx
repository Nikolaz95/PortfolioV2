import linkProps from './linkProps'
import { StyledButton } from './Button.styles'

/**
 * Reusable button. Becomes a link (<a>) when you give it an `href`.
 *
 *   <Button href="#projects">View my work</Button>
 *   <Button href="https://github.com/..." external variant="outline" icon={FaGithub}>Code</Button>
 *   <Button type="submit" icon={FaPaperPlane} disabled={isSending}>Send</Button>
 *
 * variant: 'primary' (gradient, default) | 'outline'
 * size:    'md' (default) | 'sm'
 */
export default function Button({ href, external, icon: Icon, variant = 'primary', size = 'md', children, ...rest }) {
  return (
    <StyledButton $variant={variant} $size={size} {...linkProps(href, external)} {...rest}>
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </StyledButton>
  )
}
