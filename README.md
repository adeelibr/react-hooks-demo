# Documentation

### Starter Kit
The demo uses starter kit https://github.com/adeelibr/react-starter-kit

### Demo Includes
* Example of useState
* Example of useEffect
* Example of useContext
* Example of custom hooks
  * custom hook useWindowWidth 
  * custom hook useDocumentTitle 
  * custom hook useFormInput 
* Example of useReducer
* Examples of useSpring (react-spring) hooks
  * Progress bar example
  * Fade example

### How to run

```
$ yarn 
$ yarn start // development
$ yarn build // production build
```

### How to use

In `src/index.js`

There is an object called `const VISIBLE = {};` with a list of all examples, all you have to do is, to see a particular example. Let's say you want to see `react-spring` examples of hooks, do the following in your `App` state
```
state = {
    isVisible: [
      VISIBLE.IS_REACT_SPRING_1_VISIBLE,
      VISIBLE.IS_REACT_SPRING_2_VISIBLE,
    ],
};
```
And that's pretty much it, just add a `VISIBLE.SOME_EXMAPLE` to your `isVisible` state array, your app will hot reload with the new UI information.