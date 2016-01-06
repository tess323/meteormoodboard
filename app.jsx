
App = React.createClass({
  getInitialState() {
    return {query: '', profession:'', color:'', word:'', feel:''};
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    this.state.query = React.findDOMNode(this.refs.textInput).value.trim();
    var job = React.findDOMNode(this.refs.peopleInput).value;
    var shade = React.findDOMNode(this.refs.colorInput).value;
    var message = React.findDOMNode(this.refs.wordInput).value;
    var vibe = React.findDOMNode(this.refs.feelInput).value

    this.setState({query: this.state.query, profession: job, color: shade, feel: vibe, word: message});

    console.log(shade);
    console.log(search);
    console.log(job);
    console.log(vibe);
    console.log(word)
   
 



    
 
    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },



  render: function() {
    var imgSrc = "https://source.unsplash.com/191x325/?" + this.state.query
    var imgProf = "https://source.unsplash.com/category/" + this.state.profession
    var imgColor= "https://source.unsplash.com/all/?" + this.state.color
    var words = this.state.word
    var imgFeel = "https://source.unsplash.com/150x160/?" + this.state.feel 




    return (
       
    <div className="container" id="boardBox">
        <div className="container">
     





  <div class="hello">

  <div id="page1">
    <a id="splash" class="smooth col-xs-12 col-sm-6 col-md-8"></a>
          <h1 id="welcome">Moodboard<br />
          <small id="desc">A place to find <br /> inspiration for your <br /> next project</small></h1>
          <div class="down">
           <a href="#questions"><span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
          </div>
    </div>
  </div>




  <div id="page2">
    <a id="questions" class="smooth"></a>
     
            <form class="search" syle="display: inline" onSubmit={this.handleSubmit} id="build"> 
              I am &nbsp;
                  <select class="form-control" type="text" ref="peopleInput" className="dotted">
                      <option value="">      </option>
                      <option value="Nature">An Explorer</option>
                      <option value="People">An Anthropologist</option>
                      <option value="Technology">A Developer</option>
                      <option value="Objects">A Designer</option>
                      <option value="Food">A Cook</option>
                      <option value="Buildings">A Builder</option>              

                  </select>

                 . &nbsp; Working in shades of &nbsp;
                      <select class="form-control" type="text" ref="colorInput" className="dotted">
                      
                      <option value="">      </option>
                      <option value="White">White</option>
                      <option value="Black">Black</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                      <option value="grey">Matte</option>
                      <option value="bright">Shine</option>

                      </select>
                 . &nbsp; I want my board to feel &nbsp;
                      <select class="form-control" type="text" ref="feelInput" className="dotted">
                      
                      <option value="">      </option>
                      <option value="Rural">Rustic</option>
                      <option value="Urban">Urban</option>
                      <option value="Beach">Relaxed</option>
                      <option value="Fashion">Stylized</option>
                    

                      </select>
              . &nbsp; In a word it is inspired by: &nbsp;
              <input className="dotted"
                type="text"
                ref="textInput"
                placeholder="" /> . &nbsp;
            My mission is to &nbsp;
               <input className="dotted"
                type="text"
                ref="wordInput"
                placeholder="" /> <br></br> . &nbsp;

                <button type="submit" className="btn btn-default btn-lg">
                  Submit
                </button>
                <a href="#moodboard"> <span className="glyphicon glyphicon-menu-down" aria-hidden="true" className="down"></span></a>
          </form>
          <div className="down">
           <a href="#moodboard"><span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
          </div>
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
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/random/150X160" /></a></li>
             <li id="wordbox"><a href="newgrid.html"><img src="https://source.unsplash.com/all/black" /></a></li>
             <li><a href="newgrid.html"><img src={imgFeel} /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/all/city" /></a></li>
             <li><a href="newgrid.html"><img src="https://source.unsplash.com/150x160/?white" /></a></li>
             <li><h1 class="animated pulse" id="words">{words}</h1></li>

        
          </ul> 
        

        </div>

      </div>
       <div id="reload">
            <a href="javascript:window.location.reload();"><span className="glyphicon glyphicon-refresh" aria-hidden="true" id="down"></span></a>
            <h4>Try Again</h4>
          </div>

      <div id="page4">
        <a id="about" class="smooth"></a> 
          
          <p><img src="http://i.imgur.com/Ho8qDQl.jpg" class="img-responsive" alt="Image" id="photo" />Tess OBrien is a full stack developer living in Capitol Hill, Seattle. She is passionate about building useful sites that make life just a bit more beautiful.  Please feel free to reach out with questions.</p>
      </div>
         
    





        </div>
    );
  }
});

