import Nav from 'components/Nav'
import Container from 'components/Container'
import Footer from 'components/Footer';

export default function Layout({ children }) {
  return <>
    <Nav />

    <Container>
      {children}
    </Container>

    <Footer />
  </>;
}