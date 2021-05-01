import { Layout, EventItem } from '/components';
import { API_URL } from '/config/index';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h2>Events</h2>
      {events.length === 0 ? (
        <h3>No events to show</h3>
      ) : (
        events.map(evt => <EventItem key={evt.id} evt={evt}></EventItem>)
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}
