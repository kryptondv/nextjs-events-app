import Head from 'next/head';
import { Header } from '/components';
import styles from './layout.module.scss';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>Club Events | {title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Your best party guide',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, club, dj, events',
};
