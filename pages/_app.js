import '../styles/reset.css'
import '../styles/globals.scss'
import { Provider } from "react-redux"
import { store } from '../store/store'
import NotificationsModal from '../components/NotificationsModal'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div className='column-center'>
      <Provider store={store}>
        <Component {...pageProps} />
        <div id="notifications">
          <NotificationsModal />
        </div>
        <div id="modal"></div>
      <Footer />
      </Provider>
    </div>
  )
}

export default MyApp;
