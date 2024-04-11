import React from 'react';

//primeiro commit
//subindo alterações pro github

const dados = [
  {
    titulo: "técnicas de relaxamento",
    imagem: "relaxamento.png",
    style: "card1",
    introducao: "Encontre alguns exemplos de técnicas de relaxamento, tanto muscular quanto mental, para realizar em casa."
  },
  {
    titulo: "rotina leve",
    imagem: "rotina.png",
    style: "card2",
    introducao: "Conte com um planejamento da rotina de faculdade e trabalho alinhado ao seu tempo de lazer!"
  },
  {
    titulo: "permita-se sentir",
    imagem: "sentimento.png",
    style: "card3",
    introducao: "Responda nosso quiz diário e garanta sugestões de jogos de acordo com seus sentimentos!"
  }
]

export default function Home() {
  return (
   /*  <div>
      <h1>Ola</h1>
        <img src={"Union.png"} alt="My Image" title="Logo" />
    </div> */
    <div>
     <nav className="topnav">
    <button className="btn-mobile">
        <span className="hamburguer"></span>
    </button>
    <ul className="menu">
        <li><a>técnicas de relaxamento</a></li>
        <li><a>rotina leve</a></li>
        <li><a>permita-se sentir</a></li>
    </ul>
    <img src="Union.png" className="logo" />
    </nav>

      <div className='container'>
        <h2>O que é Gamerguardian? </h2>
        <div className='introduction'>
        <p>
        É uma plataforma que auxilia gamers universitários para dar aquele boost necessário e tankar as tarefas do dia a dia sem deixar aquela jogatina de lado! A partir de recursos para garantir um planejamento entre deveres e lazer, além de técnicas de relaxamento musculares e mentais, para ter um dia mais tranquilo e organizado!
        </p>
        </div>

        <hr  className='line'/>
        <h2>Ferramentas </h2>
        <div className='cardGroup'>
          {dados.map(item => <HomeCard {...item}/>)}
        </div>
      </div>

      <footer className='footer'>
        <div>
        <p>técnicas de relaxamento</p>
        <p>Rotina Leve</p>
        <p>Permita-se Sentir</p>
        </div>
        <p style={{bordertop:"5px" }}>© 2024 cavalo_sentado.png</p>
      </footer>

    </div>

  );
}

function HomeCard({titulo, imagem, style, introducao}){
  return(
    <div className={"card " + style }>
      <img src={imagem} alt={titulo} className={'imagem ' + style}/>
      <div className='nimbus'>
      <h3 className='titulo-card'>{titulo}</h3>
      <p>{introducao}</p>
      </div>
    </div>
  )
}