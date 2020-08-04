import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/22194984?s=400&u=12ca105ecfe044e8a7b461ab4dd1e07ce51e6f7c&v=4" alt="Teacher" />
                <div>
                    <strong>Lucas</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta dos melhores métodos de ensino.
            <br /> <br />
            Apaixonado por matemática e por mudar a vida das pessoas através da matemática.
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Contato" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;