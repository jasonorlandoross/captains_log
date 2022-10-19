const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="New status report of Mjolnir ">
            <form method="POST" action="/logs">
                Title: <input type="text" name="title" placeholder='Title'></input><br/>
                Entry: <input type="text" name="entry" placeholder='Entry'></input><br/>
                Is Ship Broken: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New