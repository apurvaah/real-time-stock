import React from "react";

export default function QuoteInformation(props) {
    return (
        <>
            {props.row[0] === "" ? <></> : <h2>Quote Information</h2>}
            <div>{props.dateUpdated}</div>
            {props.row[0] === "" ? <></> : <table border="1" cellSpacing="0" cellPadding="5">
                <tbody>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Price Date</th>
                    </tr>
                    {props.row[0] === "" ? <></> : <tr>
                        <td>{props.row[0]}</td>
                        <td>{props.row[2]}</td>
                        <td>{props.row[1]}</td>
                    </tr>}
                    {props.row[3] === "" ? <></> : <tr>
                        <td>{props.row[3]}</td>
                        <td>{props.row[5]}</td>
                        <td>{props.row[4]}</td>
                    </tr>}
                    {props.row[6] === "" ? <></> : <tr>
                        <td>{props.row[6]}</td>
                        <td>{props.row[8]}</td>
                        <td>{props.row[7]}</td>
                    </tr>}
                    {props.row[9] === "" ? <></> : <tr>
                        <td>{props.row[9]}</td>
                        <td>{props.row[11]}</td>
                        <td>{props.row[10]}</td>
                    </tr>}
                    {props.row[12] === "" ? <></> : <tr>
                        <td>{props.row[12]}</td>
                        <td>{props.row[14]}</td>
                        <td>{props.row[13]}</td>
                    </tr>}
                </tbody>
            </table>}
        </>
    )
}