import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da FMG Consulting.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <article>
      <PageHero
        image="/images/hero-contato.jpg"
        compact
        eyebrow="Vigente desde 11/08/2020"
        title="Política de Privacidade"
      />

      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <Reveal delay={0.05}>
        <div className="prose-fmg mt-10 text-[16px]">
          <p>
            O site fmgcons.com.br é de responsabilidade da FMG Consulting e segue a Política de
            Privacidade a seguir descrita:
          </p>

          <h2>1. Informações gerais e definições</h2>
          <p>
            A FMG Consulting valoriza a privacidade de seus usuários e criou esta Política de
            Privacidade para demonstrar seu compromisso em proteger a sua privacidade e seus
            dados pessoais, nos termos da Lei Geral de Proteção de Dados e demais legislações
            sobre o tema, bem como descrever de que forma sua privacidade é protegida pela FMG
            Consulting ao coletar, tratar e armazenar suas informações pessoais.
          </p>
          <p>
            <strong>Usuário:</strong> todas as pessoas físicas que utilizarão ou visitarão o(s)
            site(s) e/ou aplicativo(s), maiores de 18 anos ou emancipadas e totalmente capazes de
            praticar os atos da vida civil, ou os absoluta ou relativamente incapazes devidamente
            representados ou assistidos.
          </p>
          <p>
            <strong>Dados Pessoais:</strong> quaisquer informações fornecidas e/ou coletadas pela
            FMG Consulting e/ou suas afiliadas, por qualquer meio, que identifiquem — ou que,
            combinadas com outras informações, permitam identificar — um indivíduo, em qualquer
            mídia ou formato, incluindo registros eletrônicos ou em papel. Não incluem telefone
            comercial, celular comercial, endereço comercial ou e-mail comercial.
          </p>
          <p>
            <strong>Finalidade:</strong> o objetivo que a FMG Consulting deseja alcançar a partir
            de cada ato de tratamento das informações pessoais.
          </p>
          <p>
            <strong>Necessidade:</strong> justificativa pela qual é estritamente necessário
            coletar dados pessoais para atingir a finalidade, evitando-se a coleta excessiva.
          </p>
          <p>
            <strong>Bases legais:</strong> fundamentações legais que tornam legítimo o tratamento
            de dados pessoais para uma determinada finalidade por parte da FMG Consulting.
          </p>
          <p>
            <strong>Consentimento:</strong> autorização expressa e inequívoca dada pelo usuário
            titular do dado pessoal para que a FMG Consulting trate seus dados pessoais para uma
            finalidade previamente descrita, quando a base legal exigir tal autorização.
          </p>
          <p>
            Esta política se aplica a todos os usuários e potenciais usuários dos serviços
            oferecidos pela FMG Consulting e resume como a empresa poderá coletar, produzir,
            receber, classificar, utilizar, acessar, reproduzir, transmitir, distribuir,
            processar, arquivar, armazenar, eliminar, avaliar ou controlar a informação,
            modificar, comunicar, transferir, difundir ou extrair os dados coletados, de acordo
            com as bases legais aplicáveis e a legislação vigente.
          </p>
          <p>
            Ao acessar e/ou utilizar o site da FMG Consulting, o usuário declara ter no mínimo 18
            anos e capacidade plena para aceitar os termos desta Política de Privacidade e do
            Termo de Consentimento. Caso não se enquadre nessa descrição, ou não concorde, ainda
            que em parte, com os termos aqui contidos, não deverá acessar e/ou utilizar os
            serviços, sites e serviços operados pela FMG Consulting.
          </p>

          <h2>2. Coleta e uso de informações pessoais</h2>
          <p>
            O usuário está ciente de que fornece informações de forma consciente e voluntária por
            meio de formulário, e-mail, mensagem ou pelos sites operados pela FMG Consulting.
            Determinados dados pessoais solicitados em cadastros ou formulários serão mantidos em
            sigilo e utilizados apenas para o propósito que motivou o cadastro.
          </p>
          <p><strong>Como coletamos?</strong></p>
          <ul>
            <li>Fornecimento de dados por meio dos sócios;</li>
            <li>Envio e inserção de dados via site para recebimento de newsletter e demais informações;</li>
            <li>Inscrição em eventos promovidos pela FMG Consulting.</li>
          </ul>
          <p><strong>Utilização dos dados pessoais</strong></p>
          <p>
            A FMG Consulting se torna responsável pelo tratamento dos dados pessoais de seus
            usuários. Os dados coletados serão tratados para prestação de serviços consultivos,
            educacionais, informativos e para divulgação e confirmação de eventos, sempre com base
            no consentimento informado ou em outra base autorizativa legal prevista na LGPD —
            incluindo exercício regular de direitos em processo judicial, administrativo ou
            arbitral (Lei nº 9.307/1996), e pesquisas de satisfação para melhoria dos serviços.
          </p>
          <p>Situações específicas de uso dos dados:</p>
          <ul>
            <li>Prestação de treinamentos e atividades de consultoria em gestão empresarial;</li>
            <li>Cumprimento de obrigações legais, como emissão de guias judiciais, execução do contrato ou de procedimentos preliminares (art. 7º, V, Lei nº 13.709/18);</li>
            <li>Controle interno e manutenção do contrato de prestação de serviços (art. 7º, II);</li>
            <li>Melhoria de processos internos com mensuração da avaliação de clientes (art. 7º, IX);</li>
            <li>Fornecimento de informações sobre serviços, cursos e comunicados institucionais (art. 7º, IX);</li>
            <li>Envio de informações processuais via sistema de controle interno (art. 7º, V);</li>
            <li>Representação da FMG Consulting em demandas administrativas e/ou judiciais (art. 7º, VI).</li>
          </ul>
          <p>
            Nos casos de tratamento fundamentado no legítimo interesse, o usuário poderá sempre
            optar pela exclusão dos seus dados de nossa base.
          </p>

          <h2>3. Compartilhamento e tratamento de informações pessoais</h2>
          <p>
            A FMG Consulting não disponibiliza dados pessoais coletados em seus sites para
            corretores de listas de e-mail sem expresso consentimento. Poderá divulgar dados
            pessoais a terceiros, nos limites exigidos e autorizados por lei, nas seguintes
            situações:
          </p>
          <ul>
            <li>Com clientes e parceiros, quando necessário à prestação de serviços relacionados;</li>
            <li>Com empresas e indivíduos contratados para execução de atividades em nome da FMG Consulting;</li>
            <li>Com empresas do grupo;</li>
            <li>Com fornecedores e parceiros para consecução de serviços contratados (TI, contabilidade, entre outros);</li>
            <li>Para propósitos administrativos: pesquisa, planejamento, desenvolvimento de serviços, segurança e gerenciamento de risco;</li>
            <li>Quando necessário por obrigação legal, determinação de autoridade competente ou decisão judicial.</li>
          </ul>
          <p>
            Nas hipóteses de compartilhamento, todos os terceiros mencionados deverão utilizar os
            dados de maneira consistente com os propósitos para os quais foram coletados e com o
            que determina esta Política e a legislação aplicável.
          </p>

          <h2>4. Motivos legais para a divulgação de seus dados</h2>
          <p>
            Em certas circunstâncias, a FMG Consulting poderá divulgar dados pessoais, na medida
            necessária e apropriada, a órgãos governamentais, consultores e outros terceiros, para:
          </p>
          <ul>
            <li>Cumprir legislação que exija tal divulgação;</li>
            <li>Investigar, impedir ou tomar medidas relacionadas a atividades ilegais suspeitas ou reais, ou cooperar com órgãos públicos, ou proteger a segurança nacional;</li>
            <li>Execução de seus contratos;</li>
            <li>Investigar e se defender contra reivindicações ou alegações de terceiros;</li>
            <li>Proteger a segurança ou integridade dos serviços;</li>
            <li>Exercer ou proteger direitos, propriedade e segurança da FMG Consulting e suas coligadas;</li>
            <li>Proteger direitos e segurança pessoal de funcionários, usuários ou do público;</li>
            <li>Em caso de venda, compra, fusão, reorganização, liquidação ou dissolução da FMG Consulting.</li>
          </ul>
          <p>
            A FMG Consulting cientificará os usuários sobre eventuais demandas legais que
            resultem na divulgação de informações pessoais, salvo se tal cientificação for vedada
            por lei, proibida por mandado judicial ou a requisição for emergencial. Poderá
            contestar demandas que julgar excessivas, vagas ou feitas por autoridades incompetentes.
          </p>

          <h2>5. Segurança de informações pessoais</h2>
          <p>
            Todos os dados pessoais são guardados na base de dados da FMG Consulting ou em bases
            mantidas &ldquo;na nuvem&rdquo; por fornecedores contratados, devidamente adequados à
            legislação vigente. A FMG Consulting e seus fornecedores utilizam procedimentos de
            segurança para proteger a confidencialidade, segurança e integridade dos dados,
            prevenindo danos decorrentes do tratamento.
          </p>

          <h2>6. Retenção de dados</h2>
          <p>
            A FMG Consulting retém os dados fornecidos, inclusive os pessoais, enquanto o
            cadastro do usuário estiver ativo e conforme necessário para a prestação de seus
            serviços. Poderá manter os dados após o pedido de exclusão, ou além dos prazos
            previstos, quando necessário para cumprimento de obrigações legais, resolução de
            disputas, manutenção da segurança, prevenção a fraudes e garantia do cumprimento de
            contratos.
          </p>

          <h2>7. Bases legais para processamento</h2>
          <p>
            A FMG Consulting apenas trata dados pessoais quando autorizada legalmente ou mediante
            consentimento expresso e inequívoco do usuário. As bases legais incluem o
            consentimento (colhido de forma expressa no Termo de Consentimento), contratos e
            procedimentos preliminares contratuais, e interesses legítimos — desde que o
            tratamento não viole direitos e liberdades do titular.
          </p>
          <p>
            O usuário tem o direito de negar ou retirar o consentimento fornecido à FMG
            Consulting, quando esta for a base legal para o tratamento, podendo a empresa encerrar
            a prestação de serviços a este usuário nessa hipótese. Dúvidas sobre as bases legais
            podem ser esclarecidas com o Data Protection Officer pelo e-mail{' '}
            <a href="mailto:dpo@fmgcons.com">dpo@fmgcons.com</a>.
          </p>

          <h2>8. Direito de acessar e controlar seus dados pessoais</h2>
          <p>A FMG Consulting oferece ao usuário diversas opções sobre seus dados pessoais coletados, tratados e armazenados. O usuário pode:</p>
          <ul>
            <li>Excluir dados que não sejam mais necessários para a prestação dos serviços;</li>
            <li>Solicitar atualização, alteração ou correção de dados incorretos ou desatualizados;</li>
            <li>Objetar, limitar ou restringir o uso de seus dados;</li>
            <li>Acessar ou solicitar cópia dos seus dados pessoais, em formato impresso ou eletrônico;</li>
            <li>Obter confirmação da existência de tratamento de dados pessoais;</li>
            <li>Solicitar correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
            <li>Ser informado sobre o compartilhamento de seus dados;</li>
            <li>Solicitar exclusão de dados tratados com consentimento do titular;</li>
            <li>Solicitar portabilidade dos dados a outro prestador de serviços;</li>
            <li>Revogar o consentimento, nos termos do §5º do art. 8º da LGPD.</li>
          </ul>
          <p>
            As solicitações acima podem ser feitas ao nosso Data Protection Officer pelo e-mail{' '}
            <a href="mailto:dpo@fmgcons.com">dpo@fmgcons.com</a> e serão consideradas de acordo com
            as leis aplicáveis.
          </p>

          <h2>9. Revisões à política</h2>
          <p>
            Caso a FMG Consulting modifique esta Política de Privacidade, tais alterações serão
            publicadas de forma visível no site da FMG Consulting. Esta política é válida a partir
            de 11/08/2020. Em caso de dúvidas, entre em contato pelos canais de atendimento do
            Data Protection Officer.
          </p>

          <h2>10. Contato</h2>
          <p>
            A FMG Consulting nomeou Fernando Souza de Moura Goulart como Data Protection Officer
            (&ldquo;DPO&rdquo;). O usuário pode entrar em contato com o DPO através do e-mail{' '}
            <a href="mailto:dpo@fmgcons.com">dpo@fmgcons.com</a>.
          </p>

          <h2>11. Foro de eleição</h2>
          <p>
            Esta política está sujeita à Lei da República Federativa do Brasil, sendo o Foro da
            Comarca de Porto Alegre competente para dirimir qualquer controvérsia com relação a
            ela.
          </p>
        </div>
      </Reveal>
      </div>
    </article>
  );
}
