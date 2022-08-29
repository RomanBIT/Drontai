import './App.scss';


function App() {

    const clicked = function () {
        console.log('Labas');

    }
    const doJob = function () {
        console.log('Dirbam');
        clicked();
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>STATE</h1>
                <button onClick={doJob}>ClICK!</button>
            </header>
        </div>
    );
}

//---------------005 39:30---------------//

export default App;
