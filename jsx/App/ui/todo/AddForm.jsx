/** @jsx React.DOM */
goog.provide('App.ui.todo.AddForm');
goog.require('App.ui.atomic.Button');
goog.require('App.ui.atomic.Input');
App.ui.todo.AddForm = React.createClass({
  /**
  * Property types
  */
  propTypes: {
    label: React.PropTypes.string,
    add_new_todo: React.PropTypes.func
  },
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      label: "",
      add_new_todo: function(){console.log('no action defined')}
    };
  },
  /**
  * render the element
  */
  render: function() {
    return(
      <div>
        <App.ui.atomic.Input/>
        <App.ui.atomic.Button label={this.props.label} click={this.props.add_new_todo}/>
      </div>
    );
  }
});