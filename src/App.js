import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import State from "./components/State";

export default class App extends Component
{
  state = {
    korisnici: "Pero, Ivo, Ana"
  }

  render()
  {
    const {korisnici} = this.state;

    return (
      <div>
        <State korisnici={korisnici}/>
      </div>
    )
  }
}
