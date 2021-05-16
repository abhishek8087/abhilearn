import {Badge, Button, ProgressBar} from 'react-bootstrap';
import {useState} from 'react'

export function Home() {

    const [count, setCount] = useState(0); 

  return (
    <div>
      <header className="App-header">
        <Badge pill variant="primary">
          {" "}
          {count}{" "}
        </Badge>
        <div>
          <span>
            <Button
              onClick={() => setCount(count + 1)}
              className="btn btn-primary"
            >
              +
            </Button>
          </span>
          <span>
            <Button
              onClick={() => setCount(count - 1)}
              className="btn btn-warning"
            >
              -
            </Button>
          </span>
        </div>
      </header>

      <ProgressBar now={count} label={`${count}%`} />
    </div>
  );
}
