import logoGitHub from '../../assets/logoGitBlog.svg'
import effectLeft from '../../assets/effectLeft.svg'
import effectRight from '../../assets/effectRight.svg'
import { Effect, HeaderContainer, LogoImage } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <Effect src={effectLeft} alt="" />
      <LogoImage src={logoGitHub} alt="" />
      <Effect src={effectRight} alt="" />
    </HeaderContainer>
  )
}
