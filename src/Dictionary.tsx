import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { NotFound } from './components/NotFound/NotFound';
import Result from './components/Result/Result';
import { Search } from './components/Search/Search';
import './Dictionary.css';
import { DictionaryObject } from './types/dictionary';

function Dictionary() {
  const [input, setInput] = useState<string>('');
  const [invalid, setInvalid] = useState<boolean>(false);
  const [result, setResult] = useState<DictionaryObject | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (input.length > 0 && invalid === true) {
      setInvalid(false);
    }
  }, [input]);

  return (
    <div className="dictionary">
      <Header />
      <main>
        <form onSubmit={(e) => {
          e.preventDefault();

          if (input === '') {
            setInvalid(true);
          } else {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`, {
              method: 'GET',
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(response => {
                if (response.ok) {
                  setError(false);

                  return response.json();
                }
                setError(true);
              })
              .then(data => {
                setResult(data[0]);
              });
          }
        }}>
          <Search invalid={invalid} onInput={setInput} />
        </form>
        <div className='dictionary-results'>
          {result !== null && !error
            ? <Result data={result} />
            : null}
          {error && <NotFound />}
        </div>
      </main>
    </div>
  );
}

export default Dictionary;
