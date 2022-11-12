import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import foo from '../utils';

type State<T> = T | ((prevValue: T) => T);

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('aaaa', useState);

  // // TODO: trzeba sprawdzić czy ta zmienna to komponent reactowy
  // // let $hehe;
  // let $string = 'Hello';
  // let $number: State<number> = 0;
  // // let $array: State<number[]> = [1, 2, 3];

  // useEffect(() => {
  //   // foo();

  //   // console.log('Initial value', $string, $number, $array, $hehe);

  //   setTimeout(() => {
  //     $string = 'Goodbye';
  //     $number = (prevValue) => prevValue + 1;
  //     // $array = (prevValue) => [...prevValue, 4];
  //     // // TODO: $array = [...$array, 4]; choć to może być tricky...
  //     // $hehe = 'lol';
  //   }, 4000);
  // }, [])

  // useEffect(() => {
  //   console.log('Updated string value', $string);
  //   console.log('Updated number value', $number);
  //   // console.log('Updated array value', $array);
  //   // console.log('Updated hehe value', $hehe);
  // }, [$string, $number]);

  return <Component {...pageProps} />
}

export default MyApp
