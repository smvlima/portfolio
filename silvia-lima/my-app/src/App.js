import "./App.css";
import Nav from './component/nav/nav';
import Hero from "./component/hero/hero";
import Features from "./component/features/features";
import Content from "./component/content/content";

function App() {
  return (
    <main>
    <div>
      <Nav />
      <Hero />
      <Features />
      <Content src="https://picsum.photos/200/300" variant="image-first" title="Pagar com MBWay" description="Pagar com MB WAY é fácil, prático e seguro. Descubra os três métodos para Pagar com MB WAY: Em lojas físicas, através de QR Code ou NFC; Em lojas on-line, com o seu número de telemóvel. SAIBA MAIS" />
      <Content theme="dark" src="https://picsum.photos/200/300" title="Pagar com MBWay" description="Pagar com MB WAY é fácil, prático e seguro. Descubra os três métodos para Pagar com MB WAY: Em lojas físicas, através de QR Code ou NFC; Em lojas on-line, com o seu número de telemóvel. SAIBA MAIS" />
      <Content  title="Pagar com MBWay"  description="Pagar com MB WAY é fácil, prático e seguro. Descubra os três métodos para Pagar com MB WAY: Em lojas físicas, através de QR Code ou NFC; Em lojas on-line, com o seu número de telemóvel. SAIBA MAIS" />
    </div>
    </main>
  );
}

export default App;
