'use client';

import './styles.css';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className = "header">
            <div className = 'app-name'>
                <Link href ="/"><h1>Valorant Strategy Planner</h1></Link>
            </div>

            <nav className = "navigation">
                <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">HOME</Link>
                <Link className={`${pathname === '/maps' ? 'active' : ''}`} href="/maps">MAPS</Link>
                <Link className={`${pathname === '/agents' ? 'active' : ''}`} href="/agents">AGENTS</Link>
                <Link className={`${pathname === '/strategies' ? 'active' : ''}`} href="/strategies">STRATEGIES</Link>

            </nav>

        </header>
    );
}

export default Header;