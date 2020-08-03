import { CreactivistasLayout } from '../components/creactivistas'

function MyApp({ Component, pageProps }) {
  return (
    <CreactivistasLayout>
      <Component {...pageProps} />
    </CreactivistasLayout>
  )
}

export default MyApp;
