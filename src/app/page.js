
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React from 'react';

// export default function Home() {
//   return (
//     <div className="fundo">
//       <main>
//         <p>eu sou a pagina inicial</p>
//       </main>
//     </div>
//   );
// }



const dados = [
  {
    titulo: "técnicas de relaxamento",
    imagem: "relaxamento.png",
    style: "card1",
    introducao: "Encontre alguns exemplos de técnicas de relaxamento, tanto muscular quanto mental, para realizar em casa.",
    link: "/tecnicas-de-relaxamento"
  },
  {
    titulo: "rotina leve",
    imagem: "rotina.png",
    style: "card2",
    introducao: "Conte com um planejamento da rotina de faculdade e trabalho alinhado ao seu tempo de lazer!",
    link: "/rotina-leve"
  },
  {
    titulo: "permita-se sentir",
    imagem: "sentimento.png",
    style: "card3",
    introducao: "Responda nosso quiz diário e garanta sugestões de jogos de acordo com seus sentimentos!",
    link: "/permita-se-sentir"
  }
]

export default function Home() {
  return (
    <div>
      <div className='container'>
        <h2>O que é Gamerguardian? </h2>
        <div className='introduction'>
          <p>
            É uma plataforma que auxilia gamers universitários para dar aquele boost necessário e tankar as tarefas do dia a dia sem deixar aquela jogatina de lado! A partir de recursos para garantir um planejamento entre deveres e lazer, além de técnicas de relaxamento musculares e mentais, para ter um dia mais tranquilo e organizado!
          </p>
        </div>

        <h2>Ferramentas </h2>
        <div className='cardGroup'>
          {dados.map(item => <HomeCard {...item} />)}
        </div>
      </div>
    </div>

  );
}

function HomeCard({ titulo, imagem, style, introducao, link }) {
  return (
    <Link href={link} className="link">
      <div className={"card " + style}>
        <img src={imagem} alt={titulo} className={'imagem ' + style} />
        <div className='nimbus'>
          <h3 className='titulo-card'>{titulo}</h3>
          <p>{introducao}</p>
        </div>
      </div>
    </Link>
  )
}

