export default function Home() {
  return <h1>Index</h1>;
}

/*

  SSR (Server Side Rendering)

  FUNÇÃO PRÓPRIA DO NEXTJS
  É FEITA A CHAMADA NA API NA CAMADA DO NEXT,
  PORTANTO RETORNA OS DADOS ANTES DO CARREGAMENTO DA TELA

*/
/*
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
  };
}
*/
/*

  SSG (Static Side Generation) - Funciona somente em produção

  FUNÇÃO PRÓPRIA DO NEXTJS
  É FEITA A CHAMADA NA API NA CAMADA DO NEXT,
  OS DADOS SÃO RETORNADOS E CACHEADOS, FAZENDO UMA NOVA CHAMADA A CADA 8 HORAS
  
*/
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
