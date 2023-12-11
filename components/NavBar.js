'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <Link legacyBehavior href="/">
        <a
          className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        >
          Home
        </a>
      </Link>
      <Link legacyBehavior href="/about">
        <a
          className={`${styles.link} ${
            pathname === '/about' ? styles.active : ''
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
