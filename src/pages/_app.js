import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import 'remixicon/fonts/remixicon.css'
export default function App({ Component, pageProps }) {
  return (
        <div className={styles.main}>
           <Component {...pageProps} />
        </div>
  )
}
