import React, { useState } from 'react'
 
import PageTitle from '../components/PageTitle'
//dudu 22

const Pesquisa = () => {
    /*
        const form = {
            Nome: 'aaa',
            Email:'bbb',
            Whatsapp: 'ccc'
         }*/
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 1
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async () => {
    try {


            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            // console.log(data)
            setSuccess(true)
            setRetorno(data)
        } catch (err) {

        }
    }
    /*pegar tudo do formulario antigo e coipiar (...old) */
    /* Como o evento e sintetico nós precissamos fazer um cache antes   (cache ->) const value = evt.target.value
    ----errado
        setForm(old => ({
            ...old,
            Nome: evt.target.value
        }))
    
    ---certo
    */

    /*temos 2 tipos de formulario 
    o controlado e o não controlado 
    
    o controlado o dados do formulario vao fica dentro do estado do compomente 
    não controlado -> o estado do fica no proprio formulario
    */
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

let num =  new Date()
num.getMilliseconds()
console.log(num)
    return (
        
        <div className='pt-6'>
           <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-4 text-2x1'>Críticas e sugestões</h1>
            <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor sues clientes.<br />
                Por isso , estmos sempre abertos a uvir a sua opinião.</p>
            {!sucess && <div className='w-2/5 mx-auto'>
                <label className='font-bold'>Seu Nome:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                <label className='font-bold'>Seu Email:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                <label className='font-bold'>Seu Whatsapp:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                <label className='font-bold'>Sua Nota:</label>
                <div className='flex py-5'>
                {notas.map((nota) => {
                    return (
                        <label className='block w-1/6'>
                           {nota}<br />
                            <input type='radio' name='Nota' value={nota} onChange={onChange} />
                        </label>
                    )
                })}
                </div>
                <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                 {/*<pre>{JSON.stringify(form,null,2)}</pre>*/}
            </div>}
            {sucess && <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py3'>Obrigador por contribuir com sua sugestão ou crítica.</p>
                {
                    retorno.showCoupom && <div className='text-center border p-4 mb-4'>
                        Seu cupom: <br />
                        <span className='font-bold'>{retorno.Cupom}</span>
                    </div>
                }
                {/*cupon: {JSON.stringify(retorno)}*/}
                {
                    retorno.showCoupom && <div className='text-center border p-4 mb-4'>
                     <span className='font-bold block mb-2'>{retorno.Promo}</span>
                     <br />
                     <span className='italic'>Tire um print ou foto desta tela e apresente ao graçom.</span>
                    </div>
                }

            </div>}
        </div>
    )
}

export default Pesquisa