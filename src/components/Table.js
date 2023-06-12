

const Table = ({data}) => {
    // console.log(data);
    // const ff = data.main.temp - 273
    return (
        <div>
            {
                JSON.stringify(data) !=='{}' ? 
                <table>
                <tr >
                    <td>temp</td>
                    <td>{(data.main.temp -273).toFixed(2)}</td>
                </tr>    
                <tr key="">
                    <td>description</td>
                    <td>{data.weather[0].description}</td>
                </tr>
                <tr key="">
                    <td>city</td>
                    <td>{data.name}</td>
                </tr>
                <tr key="">
                    <td>country</td>
                    <td>{data.sys.country}</td>
                </tr>
                </table> : ''

            }
        </div>
    );
}

export default Table;
