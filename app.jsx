
App = React.createClass({
  getInitialState() {
    return {query: '', profession:'', color:'', words:''};
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var search = React.findDOMNode(this.refs.textInput).value.trim();
    var job = React.findDOMNode(this.refs.peopleInput).value;
    var shade = React.findDOMNode(this.refs.colorInput).value;
    var message = React.findDOMNode(this.refs.wordInput).value;
    this.setState({query: search, profession: job, color: shade, words: message});
    console.log(shade);
    console.log(search);
    console.log(job);
    console.log(words)
 



    
 
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },



  render: function() {
    var imgSrc = "https://source.unsplash.com/191x325/?" + this.state.query
    var imgProf = "https://source.unsplash.com/category/" + this.state.profession
    var imgColor= "https://source.unsplash.com/all/?" + this.state.color
    var words = this.state.words





    return (
       
    <div className="container" id="boardBox">
        <div className="container">
     





  <div class="row">
  <div id="page1" class=".col-xs-6 .col-md-4">
    <a id="splash" class="smooth"></a>
          <h1 id="welcome">Moodboard<br />
          <small>A place to find inspiration for your next project</small></h1>
           <a href="#questions"><span className="glyphicon glyphicon-menu-down" aria-hidden="true" id="down"></span></a>
    </div>
  </div>




  <div id="page2">
    <a id="questions" class="smooth"></a>
      <h3> I am  </h3>
            <form class="search" syle="display: inline;" onSubmit={this.handleSubmit} >  
                  <select class="form-control" type="text" ref="peopleInput">
                      <option value="Nature">An Explorer</option>
                      <option value="People">An Anthropologist</option>
                      <option value="Technology">A Developer</option>
                      <option value="Objects">A Designer</option>
                      <option value="Food">A Cook</option>
                      <option value="Buildings">A Builder</option>              

                  </select>

                <h3>Working in shades of</h3>
                      <select class="form-control" type="text" ref="colorInput">
                      
                      <option value="White">White</option>
                      <option value="Black">Black</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                      <option value="grey">Matte</option>
                      <option value="bright">Shine</option>

                      </select>
              <h3>One word to describe my inspiration would be</h3>
              <input
                type="text"
                ref="textInput"
                placeholder="What inspires you?" />
            <h3>I am trying to say</h3>
               <input
                type="text"
                ref="wordInput"
                placeholder="What do you want to say?" /> <br></br>

                <button type="submit" className="btn btn-default btn-lg">
                 <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span> <a href="#moodboard"> Submit</a>
                </button>
          </form>
        </div>
    
        </div>






      
  <div id="page3">
    <a id="moodboard" class="smooth"></a>  
        <div class="portfolio">
          <ul id="grid">
             <li><a href="newgrid.html"><img src={imgSrc} /></a></li>
             <li><a href="newgrid.html"><img src={imgProf} /></a></li>
             <li><a href="newgrid.html"><img src={imgColor}  /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/all/neon" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/random" /></a></li>
             <li id="wordbox"><a href="newgrid.html"><img src="https://source.unsplash.com/all/black" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/random" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/all/city" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/1600x900/?white" /></a></li>
             <li><h1 class="animated infinite pulse">{words}</h1></li>
        
          </ul> 

        </div>
         
      </div>
      <a href="javascript:window.location.reload();"><span className="glyphicon glyphicon-refresh" aria-hidden="true" id="down"></span></a>






        </div>
    );
  }
});

