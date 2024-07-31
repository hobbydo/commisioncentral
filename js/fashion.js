const keey = 'AIzaSyBOPNC8fSn7YiOcuGabnIdZdL0-pZLedBs';

function fashion() {
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('search_on_the_site').value;

	// let querry = document.getElementById('search_on_the_site').value;
	// // let query = document.getElementById('query').data;
	// if (querry == null){ querry = 'unbeleivable moments in olympic history'; } 
	// let querry = 'unbeleivable moments in olympic history';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`
	let querry = 'unbeleivable moments in olympic history';

	urlsort = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${querry}&key=${keey}&maxResults=12&type=video&videoLicense=creativeCommon&chart=mostPopular`

	var n = 1;
	request.open('GET', urlsort, true);
	request.onload = function () {   // Begin accessing JSON data here
		var data = JSON.parse(this.response);
		console.log("data");
		console.log(data);
		// get the pagination button

		for (let page of data.items) {
			n++

			// https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?
			// part=snippet,contentDetails
			// &id=UCK8sQmJBp8GCxrOtXWBpyEA

			//frame of the post
			// const carda = document.createElement('a');
			// carda.setAttribute('href', '/product_detail.html');



			//title of the post
			const title = page.snippet.title;
			page.snippet.titled = page.snippet.title.substring(0, 30);
			titled = `${page.snippet.titled}...`;

			page.snippet.titleed = page.snippet.title.substring(0, 50);
			titleed = `${page.snippet.titleed}...`;



			//description of the post

			const description = page.snippet.description;

			//image of the post
			const image = `${page.snippet.thumbnails.high.url}`;
			const imagemedium = `${page.snippet.thumbnails.medium.url}`;
			const imagesmall = `${page.snippet.thumbnails.default.url}`;



			// card.addEventListener("click", function(){
			// 	//   window.open(`https://www.youtube.com/watch?v=${page.id.videoId}`,"_blank");
			// 	window.open(`${currentUrl}/product_details.html?greeting=hello`);
			// 	  window.open('/product_details.html?greeting=hello');
			// });

			//add the values to the html selector id root
			const date = new Date(page.snippet.publishTime);

			const day = date.getDate();
			const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
			const year = date.getFullYear();

			const monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
			];


			const datestr = `${day} ${monthNames[month]}, ${year}`;
			let catid = page.snippet.categoryId;
			let catidtext;
			$('#fashionroot').append(`
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <div class="pitem item-w1 item-h1">
            <div class="blog-box">
                <div class="post-media">
                    <a href="single-video.html?ref=Fashion&id=${page.id.videoId}" title="">
                        <img src="${image}" alt="" class="img-fluid">
                        <div class="hovereffect">
                            <span></span>
                        </div><!-- end hover -->
                    </a>
                </div><!-- end media -->
                <div class="blog-meta">
                    <span class="bg-pink"><a href="fashion.html" title="">Fashion</a></span>
                    <h4><a href="single-video.html?ref=Fashion&id=${page.id.videoId}" title="">${title}</a></h4>
                    <small><a href="blog-author.html" title="">By: Ego</a></small>
                    <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
        </div><!-- end col -->
        
        </div>`);
			$('#fashionroot').append(`
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <div class="pitem item-w1 item-h1">
            <div class="blog-box">
                <div class="post-media">
                    <a href="single-video.html?ref=Fashion&id=${page.id.videoId}" title="">
                        <img src="${image}" alt="" class="img-fluid">
                        <div class="hovereffect">
                            <span></span>
                        </div><!-- end hover -->
                    </a>
                </div><!-- end media -->
                <div class="blog-meta">
                    <span class="bg-pink"><a href="fashion.html" title="">Fashion</a></span>
                    <h4><a href="single-video.html?ref=Fashion&id=${page.id.videoId}" title="">${title}</a></h4>
                    <small><a href="blog-author.html" title="">By: Ego</a></small>
                    <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
        </div><!-- end col -->
        
        </div>`);
			let chaneltitle = page.snippet.channelTitle;
		}

	}
	request.send();
	
}

// if (document.getElementById('search_on_the_site').value == null) {
// 	let querry = 'unbeleivable moments in olympic history';
// 	fashion(querry); } else {
// 	document.getElementById("button_on_the_site").addEventListener("click", function () {
// 		let querry = document.getElementById('search_on_the_site').value;
// 		fashion(querry);
// 		document.querySelector("#search_on_the_site").value = " ";
// 	});
// }
fashion()