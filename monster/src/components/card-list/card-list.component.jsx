import React , {Component} from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component';

export const CardList = props =>(
    <div className='card-list'>
        {
        props.monsters.map(monster =>(
        <div key={monster.id} className="card-container">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
        </div>))
        }            
    </div>
);