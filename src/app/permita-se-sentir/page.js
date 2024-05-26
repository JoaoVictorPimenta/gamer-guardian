'use client'
import Link from "next/link";

export default function Sentir() {
    return (
        <>
            <Link href="/" className="link linkColor"> <div className="botaoVoltar"> <img className="imagemArrow" src="https://img.icons8.com/ios/250/000000/home.png" />  <p>Home</p> </div></Link>
            <h2 className="nomePag pag3">Permita-se Sentir</h2>

            <h3>Introdução</h3>
            <p className= "textinho">
                É uma plataforma que auxilia jovens gamers a buscar auxilio para suas questões de saúde mental sem tratar como um tabu. A partir de recursos para garantir um planejamento entre deveres e lazer, além de técnicas de relaxamento e serviço de apoio psicológico, o indivíduo apresenta um cotidiano mais leve e acolhedor.
            </p>
            <div>
                <section className="cardGroup">
                    <Card></Card>
                </section>
            </div>
        </>
    )
}

function Card() {
    return (
        <article className="alinhaVert card">
            <div>
                <div>
                    <h3 className="nimbus-sentimento">Qual seu sentimento de hoje?</h3>
                    <div className="emojis">
                        <input type="radio" id="excited" name="emoji" class="emoji-input" />
                        <label for="excited" class="emoji-label"> <img src="excited.png" alt="Excited" /></label>

                        <input type="radio" id="happy" name="emoji" class="emoji-input" />
                        <label for="happy" class="emoji-label"> <img src="happy.png" alt="Happy" /></label>

                        <input type="radio" id="neutral" name="emoji" class="emoji-input" />
                        <label for="neutral" class="emoji-label"> <img src="neutral.png" alt="Neutral" /></label>

                        <input type="radio" id="sad" name="emoji" class="emoji-input" />
                        <label for="sad" class="emoji-label"> <img src="sad.png" alt="Sad" /></label>

                        <input type="radio" id="depression" name="emoji" class="emoji-input" />
                        <label for="depression" class="emoji-label"> <img src="depression.png" alt="Depression" /></label>
                    </div>

                </div>

                <div className="card-content">
                    <h3 className="nimbus-sentimento">Que plataforma você gostaria de jogar? </h3>

                    <div className="checkboxes">
                        <div className="checkbox">
                            <input type="checkbox" class="checkbox-round"></input>
                            <label>PlayStation</label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" class="checkbox-round"></input>
                            <label>PC</label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" class="checkbox-round"></input>
                            <label>Switch</label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" class="checkbox-round"></input>
                            <label>XBox</label>
                        </div>
                    </div>

                </div>

                {/* <div>
                    <h3 className="nimbus-sentimento">Qual gênero gostaria de jogar hoje? </h3>
                    <div className="selecao">
                        <select name="select">
                            <option>FPS</option>
                            <option>RPG</option>
                            <option>Battle Royale</option>
                            <option selected>Selecione.. </option>
                        </select>
                    </div>
                </div> */}

                <div className="link-resultado">
                    <Link className="botao-resultado nimbus" href="/permita-se-sentir/indica-jogo">Ver resultados</Link>
                </div>
            </div>
        </article>
    );
}
