const SelectParcela = (props) => {
    return (
        <>
             <label>{props.txtLabel}</label> {/* • Parcelas:  */}
            <select
                className="form-select w-100"
                aria-label="Default select example"
                defaultValue={null}
                onChange={(e) => props.funcao(e.target.value)} //setParcelaSelecionada
            >
                <option >{props.txtOption}</option> {/* Selecione as parcelas */}
                {props.array.map((v,i) => (
                    <>
                        {i + 1 >= props.parcelasMinimas && ( // 3
                            <option
                            key={i}
                            value={v}
                            >
                            {`${i + 1} x R$ ${v.toFixed(2)}`}
                            </option>
                        )}
                    </>
                ))}
            </select>
        </>
    );
};

export default SelectParcela;
