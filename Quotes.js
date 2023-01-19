import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    // const [quotes,setQuotes] = React.useState.setQuotes([]);
    const [quotes, setQuotes] = useState([]);
    const [randomQuotes,setRandomQuote] = React.useState.setRandomQuote([]);
    const [setColors] = React.useState([#ffffff]);

   React.useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuotes(data);
    }
    fetchData();
}, []); 

let RandomIndex = Math.floor(Math.random()*data,length);
        setRandomQuote(data,[RandomIndex])

const changeColors = ["#ffffff","#0c0e87","#53acef" ,"#3a4b9e" ,"#201099" ,"#682da3" ,"#cb8cff" ,"#6407f9"]

const newQuote = () =>{
    let newQuote = Math.floor(Math.random()*data,length);
    setRandomQuote(randomQuotes,[RandomIndex]);
    setColors = math.floor(Math.random()*colors,length);
};

const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
    setColors(changeColors[Math.floor(Math.random() * changeColors.length)]);
};

return (
    <div style={{ background: colors[0], minHeight: '100vh' }}>
        <div className="container"> Quote of the Day! </div>
        <div className="jumbotron">
            <div className="card">
                <div className="card-body">
                    {randomQuote ? (
                        <>
                            <h5 className="card-title">{randomQuote.author || "No Author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>
                    ) : (
                        <h2>Loading...</h2>
                    )}
                </div>
            </div>
        </div>
        <div className="row">
            <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
            <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text={randomQuote.text + '-' + randomQuote.author }" target="_blank" className="btn btn-light ml-3">
                <i className="fa fa-twitter"></i>
            </a>
        </div>
    </div>
);


// return (
//     <div style={{ background: colors[0], minHeight: '100vh' }}>
//         <div className="container"> Quote of the Day! </div>
//         <div className="jumbotron">
//             <div className="card">
//                 <div className="card-body">
//                     {randomQuote ? (
//                         <>
//                             <h5 className="card-title">{randomQuote.author || "No Author"}</h5>
//                             <p className="card-text">&quot;{randomQuote.text}&quot;</p>
//                         </>
//                     ) : (
//                         <h2>Loading...</h2>
//                     )}
//                 </div>
//             </div>
//         </div>
//         <div className="row">
//             <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
//             <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text={randomQuote.text + '-' + randomQuote.author }" target="_blank" className="btn btn-light ml-3">
//                 <i className="fa fa-twitter"></i>
//             </a>
//         </div>
//     </div>
// );
// }

//         <div className="row"><button onClick= {getNewQuote} newClass="btn btn-primary ml-3">New Quote
//         </button>
//         <a class="twitter-share-button"
//   href="https://twitter.com/intent/tweet?text=Hello%20world">
// {"randomQuote.text" + '"-"'+"randomQuote.author" } <target="blank" className="btn btn-light ml-3"/>
// <i className=" fa fa-twitter"></i>
//  </a>
// </div>
// </div>
//     };
// ReactDOM.render(<App/>, document.getElementById('app'));
// </div>