import React from 'react';
import '../style/Block.css';

function Block(props) {
  return (
<div className="block">
    <div class="nft">
    <div class='main'>
      <img class='tokenImage' src={props.imageSrc} alt="NFT" />
      <h2>{props.title}</h2>
      <p class='description'>{props.text}</p>
      <hr />
    </div>
  </div>
</div>
  );
}

export default Block;
