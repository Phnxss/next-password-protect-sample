import Head from 'next/head';
import { useRouter } from 'next/router';
import Login from 'components/login';

export default function Protected({ hasReadPermission }) {
  const router = useRouter();

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>Hello, </title>
      </Head>

      <main>This is going to be a blog site at some point</main>
    </div>
  );
}
