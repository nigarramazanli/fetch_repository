const stories=[
    {
        id:1,
        imageScr: './Jerry-Piping-bw-oyl3forlrwur6778abi56lm69f24r157w64c9y75z4 2.svg',
        imageScr2: './Quote Mark.svg',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
        name:"Jane Cooper",
        position:"CEO, JPNL",
    },
    {
        id:2,
        imageScr: './Crypto-Learn-Invest-bw-oyl3g9g1y9n29md6xkfxpgebbw87gdfbb0h0u1ci68 1.svg',
        imageScr2: './Quote Mark.svg',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
        name:"Floyd Miles",
        position:"Vice President, CLI",
    },
    {
        id:3,
        imageScr: './LeeveOn-Branding-bw-oyl3fl090kplvrcow9vmwmkbvvknw8qajniecucqo0 1.svg',
        imageScr2: './Quote Mark.svg',
        text:"LemonWares saved our time in Hosting my company page.",
        name:"Kristin Watson",
        position:"Co-Founder, LeeveOn Branding",
    }
];
   const cardsContainer = document.querySelector('.fourth-block-container');
   for(const story of stories){
    const card= document.createElement('div');
    cardsContainer.appendChild(card);
    card.outerHTML = getStoriesMarkup(story);
   }
   function getStoriesMarkup(story) {
    return `
    <div class="story_container">
     <img src="${story.imageScr}" alt="">
     <img src="${story.imageScr2}" alt="">
    <p>${story.text}</p>
    <div class="person_details">
    <p>
        ${story.name}
    </p>
    <p>
        ${story.position}
    </p>
    </div>
    </div>
    `
   }


   let maindiv = document.querySelector('.common-comments');
   fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=6')
     .then(res => res.json())
     .then(data => data.forEach(item => {
       let div =
       ` <div class="user-message">
       <p class="title">Name:${item.name}"</p>
       <p class="user-email">Email:${item.email}"</p>
       <p class="user-comment">Body:${item.body}"</p>
     </div>
     `
       maindiv.innerHTML += div;


    }));
    

   let currentSlideNumber=0;
   const firstCard=document.querySelector('.story_container:first-child');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    
    function handleCarouselButtonClick(direction) {
      currentSlideNumber += direction;
      const margin = -396 * currentSlideNumber;
      firstCard.style.marginLeft = `${margin}px`;
    
      if(currentSlideNumber === 0) {
        leftButton.setAttribute('disabled', true);
      } else {
        leftButton.removeAttribute('disabled');
      }
    
      if(currentSlideNumber === stories.length-1 ) {
        rightButton.setAttribute('disabled', true);
      } else {
        rightButton.removeAttribute('disabled');
      }
    }
