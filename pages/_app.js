import App from 'next/app';
import Head from 'next/head';
import Cookies from 'universal-cookie';
import consts from 'consts';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.SiteReadCookie) ?? '';

  // Define 30 different passwords
  const validPasswords = [
    'password1', 'password2', 'password3', 'password4', 'password5',
    'password6', 'password7', 'password8', 'password9', 'password10',
    'password11', 'password12', 'password13', 'password14', 'password15',
    'password16', 'password17', 'password18', 'password19', 'password20',
    'password21', 'password22', 'password23', 'password24', 'password25',
    'password26', 'password27', 'password28', 'password29', 'password30'
  ];
  
  // Check if the password is one of the valid passwords
  if (validPasswords.includes(password)) {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp;
