# Movie Rent live site [cineRent website](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 

## here the Rating component and the image url getter function is done properly.

* this is a demo site for cinema rental
* we ne rent any cinema from the site
* DarkMode is implemented with the help of tailwind .
* there we used the rating component which will give stars for any number of 1-5.
* the imageName coming from data. how can we show it properly
* the modals are practices properly.
* contextApi is used properly from react.

___


### the rating component code:

* we have to pass a prop name starCount with the given star number.
* the component will get the number after point and make it two digit number.
* it will calculate the celi value of the number. 
* the it will make a array of [1,2,3,4,5] and do map function on it
* then the logic of giving full star/half star/empty star is implemented.
* react icons package needs to be installed. and the components for icons needs to be imported. 

```js
const Rating = ({ starCount }) => {
  const numberAfterPoint = Number(starCount.toFixed(2).split(".")[1]);
  const ceilNumber = Math.ceil(Number(starCount.toFixed(2)));

  if (starCount) {
    const arrayOfNumber = Array.from(Array(5), (d, i) => i + 1); //[1,2,3,4,5]

    const arrayOfStars = arrayOfNumber.map((numberFromArray, i) => {
      if (numberFromArray /* 4 */ <= Number(starCount) /* 3.8 */) {
        return <FaStar key={i} color="#00D991" size={15} />; // filled star
      } else if (
        numberFromArray === ceilNumber /* 4 */ &&
        numberAfterPoint > 50
      ) {
        return <FaStarHalfAlt key={i} color="#00D991" size={15} />; //half star
      } else {
        return <FaRegStar key={i} color="#00D991" size={15} />; //empty star
      }
    });

    return <div className="flex gap-1">{arrayOfStars}</div>;
  }
};

```
___

### the Image url getter utility function is also implemented here. how to use

* we need to have the image name in the database
* the same image name file needs to be in the assets folder of the src file.
* when we need the image we need to call the utility function with the image name from the data.

```js

const getMovieCoverImageURL = (movieName) => {
  return new URL(`../assets/movie-covers/${movieName}`, import.meta.url).href;
};

export { getMovieCoverImageURL };

```
