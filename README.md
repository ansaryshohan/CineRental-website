# Movie Rent live site [cineRent website](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 

## here the Rating component and the image url getter function is done properly.




### the rating component code:

```react
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
