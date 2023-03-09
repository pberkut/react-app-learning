import { useState, useEffect, useRef } from 'react';

export const SkipEffectOnFirstRender = () => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log('Первый рендер, будет проигнорирован');
      console.log(isFirstRender);
      isFirstRender.current = false;
      return;
    }

    // console.log(isFirstRender);
    console.log(`Выполняется useEffect - ${Date.now()} `);
  });

  // Пример как пропустить рендер для fetch при старте страницы
  //   useEffect(() => {
  //     if (query === '') {
  //       return;
  //     }

  //     fetch();
  //   });

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <p>
        <code className="code">useEffect</code> этого компонента не выполняется
        на первом рендере
      </p>
    </div>
  );
};
