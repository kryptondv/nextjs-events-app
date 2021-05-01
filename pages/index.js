import Link from 'next/link';
import { Layout, EventItem } from '/components';
import { API_URL } from '/config/index';

export default function Home({ events }) {
  return (
    <Layout>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <h3>No events to show</h3>
      ) : (
        <div>
          {events.map(evt => (
            <EventItem key={evt.id} evt={evt}></EventItem>
          ))}
          <Link href="/events">
            <a className="btn-secondary">View all events</a>
          </Link>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}
