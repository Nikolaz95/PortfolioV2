import styled from 'styled-components'
import linkProps from './linkProps'

/**
 * Button that shows only an icon. Becomes a link (<a>) when you give it an `href`.
 *
 *   <IconButton icon={HiX} label="Close" onClick={close} />
 *   <IconButton icon={FaGithub} label="GitHub" href="https://github.com/..." external />
 *
 * label: read by screen readers and shown as a tooltip (required, because there is no text)
 * shape: 'rounded' (default) | 'circle'
 * size:  width/height in px (default 44)
 * children: optional custom content instead of `icon` (e.g. an animated icon)
 */
export default function IconButton({ icon: Icon, label, href, external, shape = 'rounded', size = 44, children, ...rest }) {
  return (
    <Wrapper aria-label={label} title={label} $shape={shape} $size={size} {...linkProps(href, external)} {...rest}>
      {children ?? <Icon aria-hidden="true" />}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ $shape, $size }) => ($shape === 'circle' ? '50%' : `${Math.round($size * 0.3)}px`)};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ $size }) => Math.round($size * 0.45)}px;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;

  /* Only on devices with a mouse – on touch screens the hover color would "stick" after a tap */
  @media (hover: hover) {
    &:hover {
      border-color: transparent;
      background: ${({ theme }) => theme.gradient};
      color: #fff;
      transform: translateY(-2px);
    }
  }
`
