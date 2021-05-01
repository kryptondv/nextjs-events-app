import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Club Events {new Date().getFullYear()} </p>
      <Link href="/about">About this project</Link>
    </footer>
  );
}
