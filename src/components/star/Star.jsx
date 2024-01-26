import React, { useEffect, useState } from 'react';
import styles from './Star.module.scss';

export default function Star({ id, star }) {
  const AVR_RATE = (star * 100) / 5;
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (AVR_RATE * 70) / 100;
    let idx = 0;
    while (starVerScore > 14) {
      tempStarRatesArr[idx] = 14;
      idx += 1;
      starVerScore -= 14;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };

  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);

  return (
    <div>
      {STAR_IDX_ARR.map((item, idx) => {
        return (
          <span key={`${id}_${item}_${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.star}
              viewBox="0 0 14 13"
              fill="#cacaca"
            >
              <clipPath id={`${id}_${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="39" />
              </clipPath>
              <path
                id={`${id}_${item}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
              <use
                clipPath={`url(#${id}_${item}StarClip)`}
                href={`#${id}_${item}Star`}
                fill="#f5c102"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
