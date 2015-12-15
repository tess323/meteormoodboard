
App = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var search = React.findDOMNode(this.refs.textInput).value.trim();
    console.log(search);
 
    
 
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },

  render: function() {
    return (
    <div className="container">
        <div className="container">
        <header>
          <h1>Moodboard</h1>
            <form className="search" onSubmit={this.handleSubmit} >  
            <input
              type="text"
              ref="textInput"
              placeholder="What is your mood?" />
          </form>
        </header>
        </div>
        <div class="portfolio">
          <ul id="grid">
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature/1" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>   
          </ul>                                    
          </div>
        </div>
    );
  }
});