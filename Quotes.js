function App() {
    const [quotes,setQuotes] = React.useState([]);
    const [randomQuotes,setRandomQuote] = React.useState([]);
    const [setColors] = React.useState([#ffffff]);

    React.useEffect(()=> {
        const fetchData = async () =>
            async function fetchData()

        const response = await fetch('https://type.fit/api/quoteshttps://api.quotable.io/random');
        const data = await response.json();
        setQuotes(data);
    })

let RandomIndex = Math.floor(Math.random()*data,length);
        setRandomQuote(data,[RandomIndex])
const changeColors = { "#0c0e87" ,"#53acef" ,"#3a4b9e" ,"#201099" ,"#682da3" ,"#cb8cff" ,"#6407f9"}
const getNewQuote = () =>{
    let getNewQuote = Math.floor(Math.random()*data,length);
    setRandomQuote(randomQuotes,[RandomIndex]);
    setColors = math.floor(Math.random()*colors,length);
}

return{
    <div {{styles="background: colors" min-height: 100vh}}>
        <div className="container"> Quote of the Day! </div>
            <><div className="jumbotron"></div><><div className="card"></div>
                <div className="card-body">
                    {randomQuotes ? {}
                        :
                    }

                </><h5 className="card-title">{randomQuotes, author || "No Author"}</h5>
                <p className="card-text">&quote;{randomQuotes,text}&quote;</p></>
            </div>
            <h2>Loading...</h2>
        }
    }}
        <div className="row"><button onClick= {getNewQuote} newClass="btn btn-primary ml-3">New Quote</button>
        <a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=Hello%20world">
{"randomQuote.text" + '"-"'+"randomQuote.author" }
} target"_blank" className="btn btn-light ml-3">
<i className=" fa fa-twitter"></i>
 </a>
</div>
</div>
</div> 
        </div>
    ;
}}
ReactDOM.render<App/>document.getElementById('app')
</div>