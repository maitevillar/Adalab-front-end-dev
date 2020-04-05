import React, { useState } from 'react';

const Older = props => {

  const sumAnother = function() {
    props.getOlder();
  }

  const sumAnotherGift = function() {
    props.getMoreGifts();
  }

  return (
    <div>
        <div className="ex-1">
        <p>Hoy tengo {props.olderNumber} años de edad</p>
        <button onClick={sumAnother}>
        Hazme más viejo
        </button>
        </div>
        <div className="ex-2">
        <p> Tengo {props.giftNumber} regalo </p>
        <button onClick={sumAnotherGift}>
        Dame regalos
        </button>
        </div>
    </div>
  );
}

export default Older;