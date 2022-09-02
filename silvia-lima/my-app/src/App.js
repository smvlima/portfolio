
import "./App.css";

function Nav() {
  return (
    <header>
      <img src="https://picsum.photos/50/50" alt="principal"></img>
      <ul>
        <li>
          <a href="#utilizadores">Utilizadores</a>
        </li>
        <li>
          <a href="#empresas">Empresas</a>
        </li>
        <li>
          <a href="#seguranca">Segurança</a>
        </li>
        <li>
          <a href="#challenge">Challenge</a>
        </li>
        <li>
          <a href="#novidades">Novidades</a>
        </li>
        <li>
          <a href="#onde-estamos">Faqs</a>
        </li>
      </ul>
    </header>
  );
}

function Hero() {
  return (
    <div>
      <h1>conheça o nft ser solidário mbway</h1>
      <p>
        A partir de 16 de maio, ao doar através do Ser Solidário no MB WAY vai
        ajudar as Instituições de Solidariedade Social a ter à sua disposição um
        NFT Ser Solidário.{" "}
      </p>
      <a href="saber-mais">Saber Mais</a>
    </div>
  );
}

function Features() {
  return (
    <div>
      <h2>explore as funcionalidades mb way</h2>
      <ul>
        <li>
          <a href="#pagar-com-mbway">Pagar com MBWay</a>
        </li>
        <li>
          <a href="#enviar-dinheiro">Enviar Dinheiro</a>
        </li>
        <li>
          <a href="#cartoes-mb-net">Cartões MB NET</a>
        </li>
        <li>
          <a href="#pedir-dinheiro">Pedir Dinheiro</a>
        </li>
        <li>
          <a href="#dividir-conta">Dividir Conta</a>
        </li>
      </ul>
    </div>
  );
}

function Content() {
  return (
  <div>
    <img src="https://picsum.photos/200/300" alt="content"></img>
    <h2>Pagar com MBWay</h2>
    <p>Pagar com MB WAY é fácil, prático e seguro. Descubra os três métodos para Pagar com MB WAY: Em lojas físicas, através de QR Code ou NFC; Em lojas on-line, com o seu número de telemóvel. SAIBA MAIS</p>
  </div>
);
}

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Content />
    </div>
  );
}

export default App;
