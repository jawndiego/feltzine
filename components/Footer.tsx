import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-black);
      a {
        text-decoration: none;
      }
    `}>
      <a target="_blank" href="https://feltzine.us" className="zora-branding"></a>
    </footer>
  )
}
