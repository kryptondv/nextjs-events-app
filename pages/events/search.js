import Link from 'next/link'
import { useRouter } from 'next/router';
import qs from 'qs';
import { Layout, EventItem } from '/components';
import { API_URL } from '/config/index';

export default function SearchPage({ events }) {
  const router = useRouter();

  return (
    <Layout title="Search results">
      <Link href='/events'>Go back</Link>
      <h2>Search results for: {router.query.term}</h2>
      {events.length === 0 ? (
        <h3>No events to show</h3>
      ) : (
        events.map(evt => <EventItem key={evt.id} evt={evt}></EventItem>)
      )}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { venue_contains: term },
        { performers_contains: term },
        { description_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
