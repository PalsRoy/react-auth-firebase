import React , {Component} from 'react';
import './Message.css';

class Message extends Component {
    render(){
        const { userName, message} = this.props;
     return (
       <div className="message">
          <span className="message__author"> 
               {userName}
          </span>
               {message}
       </div>
     );

    }
}

export default Message;
