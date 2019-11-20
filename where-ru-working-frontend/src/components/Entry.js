import React from 'react';
import '../App.css';

class Entry extends React.Component {

    wow(event){

        event.preventDefault();

        let name = event.target.name.value;
        let grad_year = event.target.grad_year.value;
        let company = event.target.company.value;
        let role = event.target.role.value;
        let email = event.target.email.value;
        let state = event.target.state.value;
        let city = event.target.city.value;

        let body = {
            "name": name,
            "grad_year": grad_year,
            "company": company,
            "role": role,
            "contact_info": {"email": email},
            "location": {"state": state, "city": city}
        }

        fetch("https://67ec7cec.ngrok.io/addintern", {
            'method': 'POST',
            'mode': 'cors',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(body)
        }).then( (res) => console.log(res) );
    }

  render() {
    return (
      
                    <form onSubmit={this.wow}>
                        <input type="text" name="name" placeholder="Name"></input>
                        <br/>
                        <input type="text" name="grad_year" placeholder="Class"></input>
                        <br/>
                        <input type="text" name="company" placeholder="company"></input>
                        <br/>
                        <input type="text" name="role" placeholder="Role"></input>
                        <br />
                        <input type="text" name="email" placeholder="Email"></input>
                        <br />
                        <input type="text" name="state" placeholder="State"></input>
                        <br />
                        <input type="text" name="city" placeholder="City"></input>
                        <br />
                        <input type="Submit" value="Submit"></input>

                    </form>
    );
  }
}

export default Entry;
