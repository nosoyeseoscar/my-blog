import '../styles/globals.css'
import '../styles/prism-vsc-dark-plus.css'

import { Layout } from '../components/Layout'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
