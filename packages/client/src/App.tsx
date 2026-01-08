import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <>
            <p className="text-red-900">Hello: {message}</p>
            <Button>Test</Button>
        </>
    );
}

export default App;
