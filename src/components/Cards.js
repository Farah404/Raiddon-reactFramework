import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out TOP Guilds</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/guild-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Best Speed'
              path='/services'
            />
            <CardItem
              src='images/guild-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Best Performance'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/guild-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Best Progress'
              path='/services'
            />
            <CardItem
              src='images/guild-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Best Execution'
              path='/products'
            />
            <CardItem
              src='images/guild-5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Best Healing Team'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
