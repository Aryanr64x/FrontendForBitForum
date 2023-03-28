import '../styles/globals.css'
import AuthContextWrapper from '../contexts/AuthContextWrapper'
import PosstContextWrapper from '../contexts/PostsContextWrapper'

function MyApp({ Component, pageProps }) {
  return <AuthContextWrapper>
    <PosstContextWrapper>
      <Component {...pageProps} />
    </PosstContextWrapper>
  </AuthContextWrapper>
}

export default MyApp
