import React, { Component } from 'react';
import './index.css';

class RacerInfo extends Component {
  render() {
    return(
      <div className="row RacerInfo">
        <div className="col-md-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Name</th>
                <th scope="col">Nationality</th>
                <th scope="col">Sponsor</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
          {
            this.props.standings && this.props.standings.map( (driver)=> (
                      <tr>
                        <td>{driver.position}</td>
                        <td><a href={driver.Driver.url}>{driver.Driver.givenName} {driver.Driver.familyName}</a></td>
                        <td>{driver.Driver.nationality}</td>
                        <td>{driver.Constructors[0].name}</td>
                        <td>{driver.points}</td>
                      </tr>
                  ))
          }
            </table>
          </div>
        </div>

    );
  }
}

export default RacerInfo;
