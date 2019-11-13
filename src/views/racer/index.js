import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerInfo from '../../components/racerInfo';




class Racer extends Component {
  constructor() {
    super();

    this.state = {
      data : [],
    }
  }

  getRacers = async(e) => {
    e.preventDefault();

    let season = e.target.elements.season.value;
    let round = e.target.elements.round.value;

    if (round === '' || round === null) {
      round = 1;
    }


    const URL = `http://ergast.com/api/f1/${season}/${round}/driverStandings.json`

    fetch(URL)
      .then(res => res.json())
      .then(data =>
        this.setState({
          standings :
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        }))
      .catch(err => {
        console.log(err);
        alert(err);
      })


  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <RacerForm getRacers={this.getRacers}/>
          <RacerInfo standings={this.state.standings}/>
        

        </div>
      </div>
    );
  }
}
export default Racer;
