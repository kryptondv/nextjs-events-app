import { Layout } from '/components';
import { API_URL } from '/config/index';

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h2>{evt.name}</h2>
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
