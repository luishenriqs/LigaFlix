import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormFild from '../../../components/FormField';

function CadastroCategoria () {
    
    const valoresIniciais = {
        nome: '',
        descricao:'',
        cor: '  ',
    }
    
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handlerChange(infosDoEvento) {
        
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value);

            console.log(infosDoEvento.target.getAttribute('name'));
            console.log(infosDoEvento.target.value);
    }

    // function handlerChange(infosDoEvento) {
    //     const { getAttribute, value } = infosDoEvento.target;
    //     setValue(
    //         getAttribute('name'),
    //         value
    //     );
    //     console.log(getAttribute('name'));
    //     console.log(value);
    // }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={function handlerSubmit (infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormFild
                    label='Nome da Categoria: ' 
                    type='text'
                    value={values.nome}
                    name='nome'
                    onChange={handlerChange} 
                />

                <FormFild
                    label='Descrição: '
                    type='textarea' 
                    value={values.descrição}
                    name='descricao'
                    onChange={handlerChange} 
                />

                <FormFild
                    label='Cor: '
                    type='color' 
                    value={values.descrição}
                    name='cor'
                    onChange={handlerChange} 
                />

                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
                {categorias.map((categoria, indice ) => {
                    return (                    
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir pra home
            </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;