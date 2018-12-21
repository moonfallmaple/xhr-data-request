const form = document.querySelector('#search-form');
const searchField = document.querySelector('#search-keyword');
let searchedForText;
const responseContainer = document.querySelector('#response-container');
                
        form.addEventListener('submit', function (e) {
                e.preventDefault();
                responseContainer.innerHTML = '';
                searchedForText = searchField.value;
                makeRequest()
        })
                
        function makeRequest() {
                xhr = new XMLHttpRequest();
                xhr.open("GET", `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, true);
                xhr.setRequestHeader('Authorization', 'Client-ID 812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a');
                xhr.send();
                        
                xhr.onload = function() {
                let response = JSON.parse(this.responseText);
        //This part code is to get the top 6 pictures for keyword-result 
                        for(let i=0;i<6;i++){
                                htmlContent=`<figure>
                                <a href="${response.results[i].urls.regular}">
                                        <img src="${response.results[i].urls.regular}" alt="${searchedForText}">
                                </a>
                                <figcaption>${searchedForText} by ${response.results[i].user.name}</figcaption>
                                </figure>`;
                                responseContainer.insertAdjacentHTML("afterbegin",htmlContent);
                                
        //This part code is to get fisrt picture for keyword-result               
                // const firstImage=response.results[0];//get the first picture
                // htmlContent=`<figure>
                //         <a href="${firstImage.urls.regular}">
                //                 <img src="${firstImage.urls.regular}" alt="${searchedForText}">
                //         </a>
                //         <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                //         </figure>`;
                // responseContainer.insertAdjacentHTML("afterbegin",htmlContent);
                        }           
                }
                
                
        };

 

