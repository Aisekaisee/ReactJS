import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
          .then((res) => res.json())
          .then((json) => {
              // the API returns an object where the currency code is a key
              // e.g. { date: '...', usd: { inr: 83, eur: 0.94, ... } }
              if (json && json[currency]) {
                  setData(json[currency]);
              } else {
                  setData({});
              }
          })
          .catch((err) => {
              console.error('Failed to load currency info', err);
              setData({});
          });
    },[currency]) 

    console.log(data);
    return data;
    
}

export default useCurrencyInfo;