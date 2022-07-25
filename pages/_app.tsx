import '../styles/global.css'
// only way global styles can be used
export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}