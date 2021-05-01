import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Layout } from '/components';
import { API_URL } from '/config/index';

import styles from '/styles/pages/Event.module.scss';
const deleteEvent = e => {
  console.log('delete');
};

export default function EventPage({ evt }) {
  return (
    <Layout>
      <div className={styles.event}>
        {/* controls */}
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <button className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </button>
        </div>

        {/* date */}
        <span>
          {evt.date} at {evt.time}
        </span>

        {/* name & image */}
        <h2>{evt.name}</h2>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}

        {/* performers */}
        <p>{evt.performers}</p>

        {/* description & venue*/}
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        {/* back to events */}
        <Link href="/events">
          <a className={styles.back}>{'<'} Go Back to all events</a>
        </Link>
      </div>
    </Layout>
  );
}

// if you want switch to server side rendering uncomment this
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: {
//       evt: events[0],
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map(evt => ({ params: { slug: evt.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
