import React, { useState, useEffect } from 'react';


/**
 * 
 * @param {object} props
 * @param {boolean} props.enableSearch
 * @param {Array} props.data
 * @param {Array} props.header
 * @returns 
 */
const DataTable = ({ data, header, enableSearch = false }) => {

    const [tbodyData, setTbodyData] = useState(null);

    const handelSearch = (e) => {
        if (enableSearch) {
            const toSearch = e.target.value;
            if (toSearch === '' || toSearch === null || toSearch === undefined) {
                setTbodyData(data);
            } else {
                let results = [];

                for (let i = 0; i < data.length; i++) {
                    let isResult = false;
                    for (let key in data[i]) {
                        if (data[i][key].toUpperCase().indexOf(toSearch.toUpperCase()) !== -1) {
                            isResult = true
                        }
                    }
                    if (isResult) {
                        results.push(data[i]);
                    }
                }
                setTbodyData(results);
            }
        }
    };

    useEffect(() => {
        setTbodyData(data);

    }, [data])

    return <div>
        {enableSearch ? <input className={"inputSearch"} type={"texte"} id={'search'} placeholder={'Rechercher'} onChange={handelSearch}></input> : null}
        <table className="display">
            <thead>
                <tr className={'header'}>
                    {header.length > 0 ? header.map((payload) => { return <th key={payload.id + Math.random().toString(16).slice(2)}>{payload.label}</th> }) : null}
                </tr>
            </thead>
            <tbody>
                {tbodyData !== null ? (
                    tbodyData.length > 0 ? tbodyData.map((payload) => {
                        return <tr key={payload[0] + Math.random().toString(16).slice(2)}>
                            {header.length > 0 ? header.map((column) => {
                                return <td key={payload[column.id] + Math.random().toString(16).slice(2)}>{payload[column.id]}</td>;
                            }) : null}
                        </tr>
                    }) : null
                ) : null}
            </tbody>
        </table>
    </div>

}

export default DataTable;