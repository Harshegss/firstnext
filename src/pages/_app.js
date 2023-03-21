import '@/styles/globals.css'
import Headers from '@/layouts/header'
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {
  return(<>
  <Headers/>
  <Component {...pageProps} />
  </>
  )
}
