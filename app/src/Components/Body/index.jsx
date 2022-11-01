
import { useState } from 'react';

import './bodyStyle.css';

import SelectCarro from './SelectCarro';
import SelectParcela from './SelectParcelas';

const Body = (props) => {

    const [carro, setCarro] = useState('');

    const [faltaPagar, setFaltaPagar] = useState();

    const [entradaAceita, setEntradaAceita] = useState(false);

    const [entrada, setEntrada] = useState('');

    const parcelas = []

    const [parcelaSelecionada, setParcelaSelecionada] = useState('');

    const [pagamentoAprovado, setPagamentoAprovado] = useState(false);

    const porcentagemCarro = parseInt(carro) / 100;

    const carrosDisponiveis = [
    {
        modelo: 'Fiesta',
        valor: 30000,
        ano: '2014'
    },
    {
        modelo: 'Corolla',
        valor: 69000,
        ano: '2016'
    },
    {
        modelo: 'Civic',
        valor: 80000,
        ano: '2020'
    },
    {
        modelo: 'Uno Fire',
        valor: 10000,
        ano: '2006'
    },
    {
        modelo: 'Palio',
        valor: 18000,
        ano: '2012'
    },
    ];
    
    const validarCondicoesDeEntrada = (e) => {

        e.preventDefault();

        const percentualCarro = parseInt(carro) / 100;

        if(30 < entrada && 90 > entrada){
            setEntradaAceita(true);
        }else if(percentualCarro * 30 > entrada){
            alert(`A entrada deve ser acima de 30%` );
        }else{
            alert(`A entrada deve ser menor que 90%` );
        };
    };

    if(faltaPagar > 0 && entradaAceita === true){
        for(let i = 1; i <= 24; i++){
            parcelas.push(parseFloat(faltaPagar / i));
        };
    };

    const concluirOrcamento = (e) => {
        e.preventDefault();
        setPagamentoAprovado(true)
    };

    return(
        <div className='containerBody d-flex justify-content-center'>
            <div className='containerForm'>
                <form 
                className='d-flex justify-content-center'
                autoComplete='off'
                onSubmit={(e) => concluirOrcamento(e)}
                >
                    <div className='formularioBody'>
                        <div className='d-flex justify-content-center'>
                            <h1 className='fs-3 text-uppercase'>Orçamentos</h1>
                        </div>
                        <div className='p-2'>
                            <SelectCarro 
                            txtLabel='• Veículos:'
                            funcao={setCarro}
                            txtOption='Selecione seu veículo:'
                            array={carrosDisponiveis}
                            />
                        </div>
                        {carro && (
                            <div className='p-2'>
                                <label>• Entrada (%): </label>
                                <input 
                                    onChange={(e) => {
                                        const entrada = parseInt(e.target.value)
                                        setEntrada(entrada)
                                        setFaltaPagar(parseInt(carro) - (entrada * porcentagemCarro))
                                    }}
                                type="number" />
                                {entradaAceita === false ? 
                                <div className='pt-2'>
                                    <button 
                                    className='btn btn-outline-dark'
                                    onClick={(e) => validarCondicoesDeEntrada(e)}
                                    > 
                                    Avaliar Entrada
                                    </button> 
                                </div>
                                :
                                ''
                                }
                                {entradaAceita && (
                                    <>
                                        <SelectParcela 
                                        txtLabel='• Parcelas: '
                                        funcao={setParcelaSelecionada}
                                        txtOption='Selecione as parcelas'
                                        array={parcelas}
                                        parcelasMinimas={3}
                                        />                                        
                                        {parcelaSelecionada && (
                                            <div className='pt-2'>
                                            <button
                                            type='submit'
                                            className='btn btn-outline-dark'
                                            >Concluir Orçamento</button>
                                            </div>
                                        )}
                                        {pagamentoAprovado === true && (
                                            <>
                                                <br />
                                                <p> Suas condições de compra são válidas: Entrada - R${parseFloat(entrada * porcentagemCarro).toFixed(2)} | Parcelas - R${parseFloat(parcelaSelecionada).toFixed(2)}</p>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )

};

export default Body;
