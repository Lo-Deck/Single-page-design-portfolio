const btnLeft = document.getElementById('button-left');
const btnRight = document.getElementById('button-right');
const arraySlide = document.getElementsByClassName('slide-image');


let arrayPath = [
    "./images/image-slide-1.jpg",
    "./images/image-slide-2.jpg",
    "./images/image-slide-3.jpg",
    "./images/image-slide-4.jpg",
    "./images/image-slide-5.jpg"
];

let arrayCopy = [];


btnLeft.addEventListener('click', () => 
    {

        let i = 0, j = 4;

        while( i < arraySlide.length )
        {

           arrayCopy.push(arrayPath[j]);

           j++;

           if(j === 5)
           {
                j = 0;
           }
           
           i++;

        }

        arrayPath = [...arrayCopy];

        arrayCopy = [];
       
        Array.from(arraySlide).forEach( (item, index) => 
            {

                item.src = arrayPath[index];

            }
        );  

    }
);


btnRight.addEventListener('click', () => 
    {

        let i = 0, j = 1;

        while( i < arraySlide.length )
        {

           arrayCopy.push(arrayPath[j]);

           j++;

           if(j === 5)
           {
                j = 0;
           }
           
           i++;

        }

        arrayPath = [...arrayCopy];

        arrayCopy = [];

        Array.from(arraySlide).forEach( (item, index) => 
            {

                item.src = arrayPath[index];

            }
        );   

    }
);


