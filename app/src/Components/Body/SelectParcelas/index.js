const SelectParcela = (props) => {
    return (
        <>
            <label>{props.txtLabel}</label> 
            <select
                className="form-select w-100"
                aria-label="Default select example"
                defaultValue={null}
                onChange={(e) => props.funcao(e.target.value)} 
            >
                <option >{props.txtOption}</option> 
                {props.array.map((v,i) => (
                    <>
                        {i + 1 >= props.parcelasMinimas && ( 
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
