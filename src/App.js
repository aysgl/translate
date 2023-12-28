import { useEffect, useMemo, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getLanguages, getTranslate } from './redux/actions/translateAction';

function App() {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.language);
  const trans = useSelector((store) => store.translate);

  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState({
    value: "tr",
    label: "Turkish",
  });
  const [targetLang, setTargetLang] = useState({
    value: "en",
    label: "English",
  });

  useEffect(() => {
    dispatch(getLanguages());
    dispatch(getTranslate({ text, sourceLang, targetLang }))
  }, [dispatch, text, sourceLang, targetLang]);

  const data = useMemo(() => lang.languages.map((i) => ({
    value: i.code,
    label: i.name,
  })), [lang.languages]);

  const handleClick = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setText(trans.anwser)
  };

  return (
    <div className='container d-flex align-items-center justify-content-center vh-100 flex-column'>
      <div className='mb-3 w-100 d-inline-flex align-items-center'>
        <h1 className='display-3'>Translate</h1>
        <button className="btn btn-link" onClick={handleClick}>
          <i className="bi bi-arrow-left-right h3 text-dark"></i>
        </button>
      </div>
      <div className="w-100 d-inline-flex">
        <div className="w-100 me-1">
          <Select
            value={sourceLang}
            options={data}
            onChange={setSourceLang}
            className='mb-2'
          />
          <textarea
            className="form-control"
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows="6"
          ></textarea>
        </div>

        <div className="w-100 ms-1">
          <Select
            value={targetLang}
            options={data}
            onChange={setTargetLang}
            className='mb-2'
          />
          <textarea
            disabled
            className="form-control"
            value={trans.anwser}
            rows="6"
          ></textarea>
        </div>

      </div>
    </div>
  );
}

export default App;
