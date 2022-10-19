const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.log
        return (
            <Default title={`${title} Edit Page`} log={this.props.log}>
          
            <form method="POST" action="/log">
                Title: <input type="type" name="title" placeholder="Title"></input><br/>
                Entry: <input type="text" name="entry" placeholder="Entry"></input><br/>
                Is Ship Broken: <input type="checkbox" name="shipIsBroken"></input><br/>
                <input type="submit" value="Edit Log"></input>               
                </form>            
                </Default>
        )
    }
}
module.exports = Edit