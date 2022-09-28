import { React, useState } from "react";
import moment from "moment";
import QuoteInformation from "./QuoteInformation";

export default function MainPage() {
    const [symbol, setSymbol] = useState('GOOG,AAPL');
    const [row, setRow] = useState(["","","","","","","","","","","",""]);
    const [refreshInterval, setRefreshInterval] = useState(5);
    const [dateUpdated, setDateUpdated] = useState(" ")

    const handleChange = (event) => {
        setSymbol(event.target.value);
    }

    function setRows (quotes) {
        const len = quotes.length;
        var dummyRow = row
        for(var i=0;i<len;i++){
            dummyRow.unshift(quotes[i].symbol, moment().format("DD/MM/YYYY hh:mm:ss"), quotes[i].lastTradePrice);
        }
        setRow(dummyRow);
        setDateUpdated("This date is current as of " + moment().format("DD/MM/YYYY hh:mm:ss"));
    }

    async function handleUpdate ()  {
        const url = "http://candidateservices.allegient.com/randomQuote/quote?symbols=" + symbol
        await fetch(url)
                .then(res=> res.json())
                .then(result => setRows(result.quotes))
        console.log(symbol);
    }

    const handleClear = () => {
        setRow([]);
        setDateUpdated("");
    }

    const changeRefreshInterval = (event) => {
        setRefreshInterval(event.target.value);
    }

    const updateContinousUpdateFlag = () => {
        clearInterval();
    }

    const handleAutomaticUpdates = () => {
        setInterval(function() { handleUpdate() }, refreshInterval*1000);
    }

    return (
        <>
            <h1>JavaScript Exercise</h1>
            <div>Enter one or more symbols to track: <input type="text" id="symbols" value={symbol} onChange={handleChange} /></div>
            <div>
                <input type="button" id="updateNow" value="Update Now" onClick={handleUpdate} />
                <input type="button" id="clearHistory" value="Clear History" onClick={handleClear} />
            </div>
            <input type="button" id="startAuto" value="Start Automatic Updates" onClick={handleAutomaticUpdates}/>
            <input type="button" id="stopAuto" value="Stop Automatic Updates" onClick={updateContinousUpdateFlag}/>
            <select id="refreshInterval" onChange={changeRefreshInterval}>
                <option value="5">Every 5 Seconds</option>
                <option value="10">Every 10 Seconds</option>
                <option value="15">Every 15 Seconds</option>
                <option value="20">Every 20 Seconds</option>
                <option value="25">Every 25 Seconds</option>
            </select>
            <div>{`Next update in ${refreshInterval} Seconds`}</div>
            <QuoteInformation row={row} dateUpdated={dateUpdated} />
        </>
    )
}