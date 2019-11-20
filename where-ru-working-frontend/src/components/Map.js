import React from 'react';
import '../App.css';
import USAMap from "react-usa-map";

class Map extends React.Component {

  constructor(){
    super();
    this.mapHandler = this.mapHandler.bind(this);
  }

  mapHandler = (event) => {
     let state = event.target.dataset.name;
     let body = {
        "state": state
     }

     console.log(body);

     fetch("https://67ec7cec.ngrok.io/getstate", {
            'method': 'POST',
            'mode': 'cors',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(body)
        }).then( (res) => res.json() )
        .then((body) => {
          let interns = body.interns;

          let alertBody = "";

          for(let i = 0; i < interns.length; i++){
            alertBody += interns[i].name + "(" + interns[i].grad_year + ") - " + interns[i].role + "- " + interns[i].location.city + "- " + interns[i].company + "\n";
          }

          alert(alertBody);

        });
  };

  render() {
    return (
      <USAMap onClick={this.mapHandler} />
    );
  }
}

export default Map;
