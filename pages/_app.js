import App from 'next/app';
import { AuthProvider } from 'hooks/useAuth';
import { wrapper } from '../redux/store'
import '../styles/globals.css'

class WrappedApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps: pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}



export default wrapper.withRedux(WrappedApp)
