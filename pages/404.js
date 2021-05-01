import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Layout } from '/components';
import styles from '/styles/pages/404.module.scss';

export default function NotFoundPage() {
  return (
    <Layout title="Page nout found">
      <div className={styles.error}>
        <FaExclamationTriangle className={styles.icon} />
        <h2>404</h2>
        <p>Sorry, there is nothing here</p>
        <Link href="/">Home</Link>
      </div>
    </Layout>
  );
}
