const SelectCarro = (props) => {
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
                            <option
                            key={i}
                            value={v.valor}
                            >
                            {`${v.modelo} - ${v.ano} - R$ ${v.valor}`}
                            </option>
                    </>
                ))}
            </select>
        </>
    );
};

export default SelectCarro;
