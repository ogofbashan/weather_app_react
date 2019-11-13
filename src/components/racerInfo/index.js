import React, { Component } from 'react';
import './index.css';

class RacerInfo extends Component {
  render() {
    console.log(this.props.data);
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
            this.props.data.MRData && this.props.data.MRData.RaceTable.Races[0].Results.map( (Short)=> (



                      <tr>
                        <td>{Short.position}</td>
                        <td><a href={Short.Driver.url}>{Short.Driver.givenName} {Short.Driver.familyName}</a></td>
                        <td>{Short.Driver.nationality}</td>
                        <td>{Short.Constructor.name}</td>
                        <td>{Short.points}</td>
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
