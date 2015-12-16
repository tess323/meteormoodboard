
App = React.createClass({
  getInitialState() {
    return {query: '', profession:'', color:''};
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var search = React.findDOMNode(this.refs.textInput).value.trim();
    var job = React.findDOMNode(this.refs.peopleInput).value;
    var shade = React.findDOMNode(this.refs.colorInput).value;
    this.setState({query: search, profession: job, color: shade});
    console.log(shade);
    console.log(search);
    console.log(job);
 
    
 
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },

  render: function() {
    var imgSrc = "https://source.unsplash.com/1600x900/?" + this.state.query
    var imgProf = "https://source.unsplash.com/category/" + this.state.profession
    var imgColor= "https://source.unsplash.com/all/?" + this.state.color
    return (
    <div className="container" id="boardBox">
        <div className="container">
        <header>
          <h1>Moodboard</h1>
            <form className="search" onSubmit={this.handleSubmit} >  
              <input
                type="text"
                ref="textInput"
                placeholder="What inspires you?" />
                  <select class="form-control" type="text" ref="peopleInput">
                  
                      <option value="People">People</option>
                      <option value="Technology">Tech</option>
                      <option value="Nature">Nature</option>
                      <option value="Objects">Objects</option>
                      <option value="Food">Food</option>
                      <option value="Buildings">Buildings</option>

                  </select>
                      <select class="form-control" type="text" ref="colorInput">
                      
                          <option value="White">White</option>
                          <option value="Black">Black</option>
                          <option value="Red">Red</option>
                          <option value="Blue">Blue</option>
                          <option value="Green">Green</option>
                          <option value="grey">Matte</option>
                          <option value="bright">Shine</option>

                      </select>
          </form>



        </header>
        </div>
      
        
        <div class="portfolio">
          <ul id="grid">
             <li><a href="newgrid.html"><img src={imgSrc} /></a></li>
             <li><a href="newgrid.html"><img src={imgProf} /></a></li>
             <li><a href="newgrid.html"><img src={imgColor}  /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/all/neon" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/random" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/all/black" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/random" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/all/city" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/1600x900/?white" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/random" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/category/nature" /></a></li>   
          </ul>                                    
          </div>
        </div>
    );
  }
});

