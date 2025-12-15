import '@/components/Header.css'
import GitHubDark from '@/assets/GitHub_dark.svg'
import LogoPrompter from '@/assets/logo-prompter.png'

function Header() {
    return (
        <div className="header-box">
            <img className='header-logo' src={LogoPrompter} alt="Logo de Prompter" />
            <h1 className='header-title'>Prompter</h1>
            <div className='nav-bar'>
                <a className='github-link' href="https://github.com/arnaly/Prompter"><img className='github-image' src={GitHubDark} alt="Logo de GitHub" /></a>
            </div>
        </div>
    )
}

export default Header;