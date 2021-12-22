import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'
//dudu 22

const fetcher = (...args) => fetch(...args).then(res => res.json())
//crei uma função que passa todos os argumento separado para o fetch(busca) e quando fecth
//resolve a promessa ele vai retorna o json
const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    //useSWR precissa de uma url para busca os dados  ,como ele vai busca 
    //os dados nesse caso vai usa o fetch(busca) metodo do navegador
   // return(<pre>{JSON.stringify(data)}</pre>)//
    return ( 
        <div>
            <PageTitle title='Seja Bem-vindo' />
            <p className='mt-12  text-center'>
            O restaurante X sempre busca por atender melhor seus clientes.<br />
            Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>   
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
                </Link>
               
            </div>
            {/*essa e a forma de fazer if no react*/}
            {!data && <p>Carregando...</p>} 
            {data && data.showCoupon && 
            <p className='my-12 text-center'>
              {data.message}
            </p>}
        </div>
    )
}

/*
Bem agora nós vamos começa a pega os dados dentro da panilha 
e mostra dentro do palpite box,dentro do sistema aqui agente tem 
algumas maneiras de fazer isso e eu quero trazer para voce e uma das maneiras
só para agente te uma idea aqui para saber como vai funcionar

Uma coisa que é importante que o propio next tem umas formas de trazer esses dados,
então eu posso utulizar serve siterend nele dai eu faço essa ´pagina inteira ser carregada ou
ser processada pelo servido e depois agente traz aqui esses dados ou ainda
agente poder fazer o carregamento dos dados no cliente , quando o ususario carrega o sistrema 
ele faz um requisação para carregadar a mais esses dados

O que acontece nessa pagina aqui  inicial ,agente  vai so carrega essa mensagem aqui 
, se tive desconto, então agente não tem muita vantagens em fazer serve rende nessa pagina 
por que o texto do desconto não  vai ser indexado pleo google

nos podemos usar swr para deixa a mensagem de desconto sempre atualizada o possivel "swr"

vamos usar um hook  do proprio next para carregada esses dados
*/

export default Index