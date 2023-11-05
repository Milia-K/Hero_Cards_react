import { useState } from "react";
import React from 'react'


export default function HeroCard({ hero }) {

    const [quantity, setQuantity] = useState(); 

    const ResetData = () => {
        setQuantity('')
        localStorage.removeItem(hero.name,);
    };

    const SaveData = () => {
        localStorage.setItem(hero.name, quantity);
    };

    const InputChange = (event) => {
        let newQuantity = Number(event.target.value);
        if (newQuantity> 10) {
            newQuantity = 10;
        }
        if (newQuantity< 0) {
            newQuantity= 1;
        }
        setQuantity(newQuantity)
    };

    return (
    <div className='card'>
        {hero.name} <br />
        Вселенная: {hero.universe} <br />
        Альтер эго: {hero.alterego} <br />
        Суперсилы: {hero.superpowers} <br />
        <img className='image' src ={hero.url} alt={hero.name} /> <br />

        <div>Рейтинг</div>
        <span><button onClick={ResetData} className='btn_delete'>&#10008;</button></span>
        <span><input className='input' type="number" id="quantity" min="1" max="10" placeholder='&#9734;' value={quantity} onChange={InputChange} /></span>
        <button onClick={SaveData} className='btn'>&#10004;</button>
    </div>
    )
}
