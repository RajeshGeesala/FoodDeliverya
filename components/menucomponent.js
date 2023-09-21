import axios from "axios";
import { useEffect, useState } from "react"
import { APIDATA } from "../utilities/consts";

import { useParams } from "react-router-dom";

export const MenuComponent = () => {


    let { RestoId } = useParams();

    let [MenuData, SetMenuData] = useState([]);

    console.log(RestoId);


    useEffect(() => {
        GetMEnuByApi();
    }, []);




    const GetMEnuByApi = async () => {
        try {
            const MenuResponse = await axios.get(APIDATA + RestoId)
            console.log(MenuResponse);
            SetMenuData(MenuResponse);
            console.log("de structuring for menu")
            console.log(MenuResponse.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        }
        catch {
            console.log("api error")
        };


    }
    const { name, areaName, cuisines } = MenuData.data.data.cards[0].card.card.info;

 const { itemCards } = MenuData.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;


    return ( 
    <div>

         <h2>  {name}   </h2>
        <h3>{areaName}</h3>
        <h4> {cuisines.join(" ,")} </h4>

        <ul className="list-group">
            {itemCards.map((item) => <li className="list-group-item">{item.card.info.name} {item.card.info.price}</li>)}
        </ul> 

        <div>menu compoent</div>
    </div> )
}