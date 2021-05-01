import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header, Footer, Showcase } from '/components';
import styles from './layout.module.scss';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Club Events | {title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Your best party guide',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, club, dj, events',
};
