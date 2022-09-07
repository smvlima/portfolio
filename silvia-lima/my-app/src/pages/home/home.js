import React from "react";

import "./home.scss";
import Hero from "../../components/hero/hero";
import { heroes } from "../../mocks/heroes";
import Features from "../../components/features/features";
import Content from "../../components/content/content";

function Home() {
  return (
    <div>
      <section className="herolist">
        <Hero key={heroes.id} {...Hero} />
      </section>
      <section>
        <Features id="features" />
      </section>
      <Content
        title="pagar com mb way"
        img="https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/11/Banner_PagarMB-WAY_.png"
      />
      <Content
        variant="image-first"
        title="enviar dinheiro"
        img="https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/11/Banner_FuncEnviarDinheiro1-768x724.jpg"
        description="Transfira dinheiro através da opção “Enviar Dinheiro”. Selecione o contacto a quem vai enviar dinheiro, indique o valor a transferir e valide a operação de forma segura. Por fim, receberá uma confirmação da operação. "
      />
      <Content
        title="pagar com mb way"
        img="https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/11/Banner_PagarMB-WAY_.png"
        description="Pagar com MB WAY é fácil, prático e seguro. Descubra os três métodos para Pagar com MB WAY: Em lojas físicas, através de QR Code ou NFC; Em lojas online, com o seu número de telemóvel. SAIBA MAIS"
      />
      <Content
        variant="image-first"
        title="enviar dinheiro"
        description="Transfira dinheiro através da opção “Enviar Dinheiro”. Selecione o contacto a quem vai enviar dinheiro, indique o valor a transferir e valide a operação de forma segura. Por fim, receberá uma confirmação da operação. "
      />
    </div>
  );
}

export default Home;
