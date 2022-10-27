import React from 'react';
import gif from '../../assets/giphy.gif';
import './style.css';

function Inicio() {
	return (
		<section>
			<div className="div_inicio">
				<img className="gif" src={gif} alt="GIF" />
			</div>
			<div className="div_inicio">
				<p>
					A evolução de uma câmera saindo de um simples aparelho de gravação de
					vídeos para um equipamento moderno de registro de dados, impactou
					fortemente todo o mercado. Diante a limitação humana de poder estar em
					um lugar de cada vez, as câmeras trazem o poder da onipresença para as
					operações, potencializando todas as atividades que demandem registros.
					A Renova se compromete a trazer eficiência para as empresas que
					utilizam câmeras de segurança em suas atividades, através da
					implementação de sistemas inteligentes de monitoramento, para além de
					um sistema de gravação disponibilizamos ferramentas que garantem a
					disponibilidade dos serviços, segurança e confidencialidade dos
					registros. Somos pautados por valores éticos que norteiam nossos
					servidos através de qualidade, transparência e foco no cliente.
					Ressaltamos a ideia da implementação da tecnologia para trazer
					eficiência e lucratividade para os negocios.
				</p>
			</div>
		</section>
	);
}

export default Inicio;
