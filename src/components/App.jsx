import React from 'react';

import Greeter from './components/Greeter';


const App = () => {

    const [userName, setUserName] = useState('');
    const [loaded, setLoaded] = useState(false);

    const handleToggle = () => {
        setLoaded(!loaded);
    };


    if (loaded === false) {
        return 'Website loading...';
    }
    <button onClick={handleToggle}>Toggle</button>

    return (
        <div>
            <Greeter phrase="Hello " name="Harrison" />
            <Greeter phrase="Hi " name="Olivia" />
            <Greeter phrase="Good Day" name="Marley" />

            <input value={userName} onChange={e => setUserName(e.target.value)} />
            <p>You are logging in as: {userName}</p>
        </div>
    );

};


export default App;