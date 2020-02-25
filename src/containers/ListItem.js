import React, { useState } from 'react';
import { MatchBox } from '../components';
import Buttons from './Buttons';

function ListItem(props) {

  const [activeList, setActiveList] = useState([]);
  
  const sendList = (list) => {
    props.listSetting({
      eid: props.id,
      list
    });
  }

  const activeChange = (item) => { 
    
    if(typeof item === "object") {
      const nextList = activeList.filter(list => list.mid !== item.mid);
      const changedMarket = [...nextList, item].sort((a, b) => +a.id[a.id.length-1] - (+b.id[b.id.length-1]))

      sendList(changedMarket);
      setActiveList(changedMarket);
    } else {
      const nextList = activeList.filter(list => list.id !== item);
      
      sendList(nextList);
      setActiveList(nextList);
    }
  }

  const markets = props.markets.map(
    market => (
      <MatchBox name={market.name}>
        <Buttons mid={market.id} mname={market.name} selections={market.selections} activeChange={activeChange} />
      </MatchBox>
    )
  )

  return (
    <>
      { markets }
    </>
  )
};

export default ListItem;