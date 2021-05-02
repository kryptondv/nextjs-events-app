import Link from 'next/link';
import { Search } from '/components';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      
      {/* title */}
      <div className={styles.logo}>
        <Link href="/">
          <a>Club Events</a>
        </Link>
      </div>

      {/* search bar */}
      <Search />
      
      {/* navigation */}
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
