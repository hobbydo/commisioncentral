
const querry = 'fashion parade';
    // const key='AIzaSyBr9_gLCEmvCoA78a_u4U2ryIsjQ6xnmHU';
    const key='AIzaSyBdsPTkWP8k26BfGbpvUJqt1_Ekxq81BBk';
    function search(query) {


     let n = 1;
    // get the value from the search input and use for the youtube querry
    
        var request = new XMLHttpRequest();
        if (query == ''){
        document.getElementById('query').data = document.getElementById('query').value;
        let query = document.getElementById('query').data;
        } else {
          query = querry;
        }
      
          currentpage=1;
          url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&videoLicense=creativeCommon&chart=mostPopular`
          urld = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&videoLicense=creativeCommon`;
        
    
        request.open('GET', url, true);
        request.onload = function () {   // Begin accessing JSON data here
          var data=JSON.parse(this.response);
        
          console.log("data");
          console.log(data);
    // get the pagination button
          const prevtoken=data.prevPageToken;
          const nexttoken=data.nextPageToken;
          
          for(let page of data.items)
          {
              n++
    //frame of the post
        
            // cardurl.setAttribute('href', `/flysearch/${page.id.videoId}`);
    

            const image =`${page.snippet.thumbnails.high.url}`;
            // cardurl.appendChild(image);
    
            page.snippet.titled=page.snippet.title.substring(0,20);
            const title = `${page.snippet.titled}...`;
            //  title.textContent = page.snippet.title;
    
            const posttitle = page.snippet.title;
    
          
            const description = document.createElement('p');
    

    
            page.snippet.description = page.snippet.description.substring(0, 21); // Limit to 300 chars
            description.textContent = `${page.snippet.description}...`;
    
            description.textContent = page.snippet.description;
            $('#fashionroot').append(`
            <div class="pitem item-w1 item-h1">
            <div class="blog-box">
                <div class="post-media">
                    <a href="single.html" title="">
                        <img src="upload/author_03.jpg" alt="" class="img-fluid">
                        <div class="hovereffect">
                            <span></span>
                        </div><!-- end hover -->
                    </a>
                </div><!-- end media -->
                <div class="blog-meta">
                    <span class="bg-pink"><a href="fashion.html" title="">Fashion</a></span>
                    <h4><a href="single.html" title="">Pink and Brown Great Harmony</a></h4>
                    <small><a href="blog-author.html" title="">By: Ego</a></small>
                    <small><a href="fashion.html" title="">11 July, 2017</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
        </div><!-- end col -->`);

            if (n <= 13){
      
            }
    //add the values to the html selector id root
           // Each card will contain an h1 and a p and thumbmnail   
          }    
         
        
    
    //select where the pagination will show
          const pagination= document.createElement('div')
          //pagin.setAttribute('class', 'container')
        
    
    // pagination previous button
          const prevbtn = document.createElement("button");
          prevbtn.innerHTML = "PREVIOUS";
          prevbtn.setAttribute('id','prev')
          prevbtn.setAttribute('class','prevbtn');
          pagination.appendChild(prevbtn);
    
    // add event listener to the pagination button 
          prevbtn.addEventListener("click", function(){
            currentpage--;
              var newurl=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&pageToken=${data.prevPageToken}`
              search(newurl);
          });
          if(!data.prevPageToken){
            document.getElementById("prev").disabled = true;
          }
    
    // pagination next button
    
          const btn = document.createElement("button");
          btn.innerHTML = "NEXT";
          btn.setAttribute('id','next');  // Insert text
          btn.setAttribute('class','nextbtn');
    
          pagination.appendChild(btn);
    
    // add event listener to the pagination button 
          btn.addEventListener("click", function(){
            currentpage++;
              var newurl=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&pageToken=${data.nextPageToken}`
              search(newurl);
          });
    
    // crete the element where the pagination will show			
          const paginateButtons = document.createElement('div');
          paginateButtons.setAttribute('class', 'paginatebuttons');
    
          
          //paginateButtons.setAttribute('class', 'paginate');
          // app.appendChild(paginateButtons);
          for(var i=1;i<=12;i++){
            var value=i;
            if(currentpage>12){
              value=currentpage-5+i;
            }
    // pagination button
            const button = document.createElement('button');
            button.innerHTML = value.toString();
            button.setAttribute('id',value);
            button.setAttribute('class','btn');
            button.addEventListener("click", clicked(this));
            paginateButtons.appendChild(button);
          }
          // var butt=document.getElementById(currentpage);
          // butt.setAttribute('class','active');
        }
        request.send();
    }
    
    // pagination current page
    var currentpage=1;
    function clicked(){
      return clickevent => {
        console.log(clickevent.srcElement.id);
        getquery(clickevent.srcElement.id);
      }
    }
    
    // pagination next page
    function getquery(newpage){
    if(currentpage==newpage){
    return ;
    }
    else if(currentpage<newpage){
      var req = new XMLHttpRequest();
      var pagesecond=Number(newpage)-1;
      // var nexttoken=document.getElementById('query').nexttoken;
      // var query=document.getElementById('query').data;
    
      for(var page=currentpage;page<pagesecond;page++){
      var pageurl=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults12&type=video&pageToken=${nexttoken}`;
      req.open('GET', pageurl, false)
      req.onload = function () {
        var data=JSON.parse(this.response);
        // nexttoken=data.nextPageToken;
      }
      req.send();
    }
    currentpage=newpage;
    pageurl=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&pageToken=${nexttoken}`
    search(pageurl);
    }
    
    // pagination previous page
    else{
      var req = new XMLHttpRequest();
      var pagesecond=Number(newpage)+1;
      // var prevtoken=document.getElementById('query').prevtoken;
      // var query=document.getElementById('query').data;
    
      for(var i=currentpage;i>pagesecond;i--){
      var pageurl=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&pageToken=${prevtoken}`;
      req.open('GET', pageurl, false)
      req.onload = function () {
        var data=JSON.parse(this.response);
        // prevtoken=data.prevPageToken;
      }
      req.send();
    }
    currentpage=newpage;
    pageurl=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}&maxResults=12&type=video&pageToken=${prevtoken}`
    search(pageurl);
    }
    }

    search() ;