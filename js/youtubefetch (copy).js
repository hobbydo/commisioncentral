

// const keey='AIzaSyBr9_gLCEmvCoA78a_u4U2ryIsjQ6xnmHU';



function lifestyle() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'Healthiest Foods You Should Eat';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


	urlsort = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${querry}&key=${keey}&maxResults=12&type=video&videoLicense=creativeCommon&chart=mostPopular&regionCode=US&order=viewCount`

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
			//description of the post

			const description = page.snippet.description;

			//image of the post
			const image = `${page.snippet.thumbnails.high.url}`;



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
			if (n == 2) {
				$('.left-side').append(`
		<div class="masonry-box post-media">
		<img src="${image}" alt="" class="img-fluid">
		<div class="shadoweffect">
			<div class="shadow-desc">
				<div class="blog-meta">
					<span class="bg-aqua"><a href="fashion.html"
							title="">Lifestyle</a></span>
					<h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title}</a></h4>ggggg
					<small><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}/" title="">${datestr}</a></small>
					<small><a href="blog-author.html" title="">Love Ego</a></small>
				</div><!-- end meta -->
			</div><!-- end shadow-desc -->
		</div><!-- end shadow -->
	</div><!-- end post-media -->
		`);
			} else if (n == 3) {
				$('.right-side').append(`
		   <div class="masonry-box post-media">
		   <img src="${image}" alt="" class="img-fluid">
		   <div class="shadoweffect">
			   <div class="shadow-desc">
				   <div class="blog-meta">
					   <span class="bg-aqua"><a href="fashion.html"
							   title="">Lifestyle</a></span>
					   <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title}</a></h4>
					   <small><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${datestr}</a></small>
					   <small><a href="blog-author.html" title="">by Jessica</a></small>
				   </div><!-- end meta -->
			   </div><!-- end shadow-desc -->
		   </div><!-- end shadow -->
	   </div><!-- end post-media -->
		   `)

			} else if (n == 4) {
				$('.blogd').append(`
	   <div class="blog-box ">
	   <div class="post-media">
		   <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
			   <img src="${image}" alt="" class="img-fluid">
			   <div class="hovereffect">
				   <span></span>
			   </div><!-- end hover -->
		   </a>
	   </div><!-- end media -->
	   <div class="blog-meta big-meta">
		   <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title}</a></h4>
		   <p> ${description} </p>
		   <small><a href="fashion.html" title="">Lifestyle</a></small>
		   <small><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${datestr}</a></small>
		   <small><a href="blog-author.html" title="">Love Ego</a></small>
	   </div><!-- end meta -->
   </div><!-- end blog-box -->

   <hr class="invis">
	   `)
			} else if (n == 5) {
				$('.blogd').append(`
		<div class="blog-box ">
		<div class="post-media">
			<a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta big-meta">
			<h4><a href="single-video.html?ref=Lifestyle&=${page.id.videoId}" title="">${title}</a></h4>
			<p>${description} </p>
			<small><a href="fashion.html" title="">Lifestyle</a></small>
			<small><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">Love Ego</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->
 
	<hr class="invis">
		`)
			} else if (n == 6) {
				$('.blogd').append(`
		<div class="blog-box ">
		<div class="post-media">
			<a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta big-meta">
			<h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${description} </p>
			<small><a href="fashion.html" title="">Lifestyle</a></small>
			<small><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">Love Ego</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->
 
	<hr class="invis">
		`)
			} else if (n == 7) {
		
			} else if (catid == 20) {
				catidtext = "Gaming";
			} else if (catid == 22) {
				catidtext = "People & Blogs";
			} else if (catid == 23) {
				catidtext = "Comedy";
			} else if (catid == 24) {
				catidtext = "Entertainment";
			} else if (catid == 25) {
				catidtext = "News & Politics";
			} else if (catid == 26) {
				catidtext = "Howto & Style";
			} else if (catid == 27) {
				catidtext = "Education";
			} else if (catid == 28) {
				catidtext = "Science & Technology";
			} else if (catid == 29) {
				catidtext = "Nonprofits & Activism";
			};


			let chaneltitle = page.snippet.channelTitle;

		}

	}
	request.send();
}
function travel() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'INCREDIBLE Travel Destinations of 2022 ';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


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
			if (n == 2) {
				$('.post-media1').append(`
	<img src="${image}" alt="" class="img-fluid" style="height:160px">
	<div class="shadoweffect">
		<div class="shadow-desc">
			<div class="blog-meta">
				<span class="bg-green"><a href="fashion.html"
						title="">Travel</a></span>
				<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${titled}</a></h4>
				<small><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${datestr}</a></small>
				<small><a href="blog-author.html" title="">by Ego</a></small>
			</div><!-- end meta -->
		</div><!-- end shadow-desc -->
	</div><!-- end shadow -->
		`);
			} else if (n == 3) {
				$('.post-media2').append(`
		   <img src="${image}" alt="" class="img-fluid">
		   <div class="shadoweffect">
			   <div class="shadow-desc">
				   <div class="blog-meta">
					   <span class="bg-green"><a href="fashion.html"
							   title="">Travel</a></span>
					   <h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${titleed}</a>
					   </h4>
				   </div><!-- end meta -->
			   </div><!-- end shadow-desc -->
		   </div><!-- end shadow -->
		   `)

			} else if (n == 4) {
				$('.post-media3').append(`
	   <img src="${image}" alt="" class="img-fluid">
	   <div class="shadoweffect">
		   <div class="shadow-desc">
			   <div class="blog-meta">
				   <span class="bg-green"><a href="fashion.html"
						   title="">Travel</a></span>
				   <h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${titleed}</a>
				   </h4>
			   </div><!-- end meta -->
		   </div><!-- end shadow-desc -->
	   </div><!-- end shadow -->
	   `)
			} else if (n == 5) {
				$('#travel').append(`		

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">
		`)
			} else if (n == 6) {
				$('#travel').append(`

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">

	
		`)
			} else if (n == 7) {
				$('#travel').append(`

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">	
		`)
			} else if (n == 8) {
				$('#travelheader').append(`   

		   <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		   <div class="blog-box">
			   <div class="post-media">
				   <a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					   <img src="${image}" alt=""
						   class="img-fluid">
					   <div class="hovereffect">
					   </div><!-- end hover -->
					   <span class="menucat">Tourism</span>
				   </a>
			   </div><!-- end media -->
			   <div class="blog-meta">
				   <h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			   </div><!-- end meta -->
		   </div><!-- end blog-box -->
	   </div>
		   `)
			} else if (n == 9) {
				$('#travelheader').append(`   

		<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="blog-box">
			<div class="post-media">
				<a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					<img src="${image}" alt=""
						class="img-fluid">
					<div class="hovereffect">
					</div><!-- end hover -->
					<span class="menucat">Tourism</span>
				</a>
			</div><!-- end media -->
			<div class="blog-meta">
				<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			</div><!-- end meta -->
		</div><!-- end blog-box -->
	</div>
		`)
			} else if (n == 10) {
				$('#travelheader').append(`   

		<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="blog-box">
			<div class="post-media">
				<a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					<img src="${image}" alt=""
						class="img-fluid">
					<div class="hovereffect">
					</div><!-- end hover -->
					<span class="menucat">Tourism</span>
				</a>
			</div><!-- end media -->
			<div class="blog-meta">
				<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			</div><!-- end meta -->
		</div><!-- end blog-box -->
	</div>
		`)
			} else if (n == 11) {
				$('#travelheader').append(`  
		<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="blog-box">
			<div class="post-media">
				<a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">
					<img src="${image}" alt=""
						class="img-fluid">
					<div class="hovereffect">
					</div><!-- end hover -->
					<span class="menucat">Tourism</span>
				</a>
			</div><!-- end media -->
			<div class="blog-meta">
				<h4><a href="single-video.html?ref=Travel&id=${page.id.videoId}" title="">${title}</a></h4>
			</div><!-- end meta -->
		</div><!-- end blog-box -->
	</div>
		`)
			} else if (n == 12) {
			} else if (n == 13) {
			} else if (catid == 27) {
				catidtext = "Education";
			} else if (catid == 28) {
				catidtext = "Science & Technology";
			} else if (catid == 29) {
				catidtext = "Nonprofits & Activism";
			};


			let chaneltitle = page.snippet.channelTitle;




		}

	}
	request.send();
}
function food() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'Tasty pasta sauces and recipes';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


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
			if (n == 2) {
				$('#food').append(`		

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">
		`)
			} else if (n == 4) {
				$('#food').append(`		

				<div class="blog-box row">
				<div class="col-md-4">
					<div class="post-media">
						<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
							<img src="${image}" alt="" class="img-fluid">
							<div class="hovereffect"></div>
						</a>
					</div><!-- end media -->
				</div><!-- end col -->
		
				<div class="blog-meta big-meta col-md-8">
					<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
					<p>${datestr}</p>
					<small><a href="fashion.html" title="">Food</a></small>
					<small><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${datestr}</a></small>
					<small><a href="blog-author.html" title="">by Matilda</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		
			<hr class="invis">
				`)
			} else if (n == 5) {
				$('#food').append(`		

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">
		`)
			} else if (n == 6) {
				$('#food').append(`

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">

	
		`)
			} else if (n == 7) {
				$('#food').append(`

		<div class="blog-box row">
		<div class="col-md-4">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt="" class="img-fluid">
					<div class="hovereffect"></div>
				</a>
			</div><!-- end media -->
		</div><!-- end col -->

		<div class="blog-meta big-meta col-md-8">
			<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			<p>${datestr}</p>
			<small><a href="fashion.html" title="">Food</a></small>
			<small><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${datestr}</a></small>
			<small><a href="blog-author.html" title="">by Matilda</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->

	<hr class="invis">	
		`)
			} else if (n == 8) {
				$('#recipesheader').append(`
		   <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		   <div class="blog-box">
			   <div class="post-media">
				   <a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					   <img src="${image}" alt=""
						   class="img-fluid">
					   <div class="hovereffect">
					   </div><!-- end hover -->
					   <span class="menucat">Pastas</span>
				   </a>
			   </div><!-- end media -->
			   <div class="blog-meta">
				   <h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			   </div><!-- end meta -->
		   </div><!-- end blog-box -->
	   </div>`)
			} else if (n == 9) {
				$('#recipesheader').append(`
		<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="blog-box">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt=""
						class="img-fluid">
					<div class="hovereffect">
					</div><!-- end hover -->
					<span class="menucat">Pastas</span>
				</a>
			</div><!-- end media -->
			<div class="blog-meta">
				<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			</div><!-- end meta -->
		</div><!-- end blog-box -->
	</div>`)
			} else if (n == 10) {
				$('#recipesheader').append(`
		<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="blog-box">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt=""
						class="img-fluid">
					<div class="hovereffect">
					</div><!-- end hover -->
					<span class="menucat">Pastas</span>
				</a>
			</div><!-- end media -->
			<div class="blog-meta">
				<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			</div><!-- end meta -->
		</div><!-- end blog-box -->
	</div>`)
			} else if (n == 11) {
				$('#recipesheader').append(`
		<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<div class="blog-box">
			<div class="post-media">
				<a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">
					<img src="${image}" alt=""
						class="img-fluid">
					<div class="hovereffect">
					</div><!-- end hover -->
					<span class="menucat">Pastas</span>
				</a>
			</div><!-- end media -->
			<div class="blog-meta">
				<h4><a href="single-video.html?ref=Food&id=${page.id.videoId}" title="">${title}</a></h4>
			</div><!-- end meta -->
		</div><!-- end blog-box -->
	</div>`)
			} else if (n == 12) {
			} else if (n == 13) {
			} else if (catid == 27) {
				catidtext = "Education";
			} else if (catid == 28) {
				catidtext = "Science & Technology";
			} else if (catid == 29) {
				catidtext = "Nonprofits & Activism";
			};


			let chaneltitle = page.snippet.channelTitle;




		}

	}
	request.send();
}

function health() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'Health';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


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
			if (n == 2) {
				$('#health').append(`
		<div class="blog-box">
                            <div class="post-media">
                                <a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
                                    <img src="${image}" alt="" class="img-fluid">
                                    <div class="hovereffect">
                                        <span></span>
                                    </div><!-- end hover -->
                                </a>
                            </div><!-- end media -->
                            <div class="blog-meta">
                                <h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
                                <small><a href="fashion.html" title="">Health</a></small>
                                <small><a href="fashion.html" title="">${datestr}</a></small>
                            </div><!-- end meta -->
                        </div><!-- end blog-box -->
                        <hr class="invis">		
		`);
			} else if (n == 3) {
				$('#health').append(`
		<div class="blog-box">
                            <div class="post-media">
                                <a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
                                    <img src="${image}" alt="" class="img-fluid">
                                    <div class="hovereffect">
                                        <span></span>
                                    </div><!-- end hover -->
                                </a>
                            </div><!-- end media -->
                            <div class="blog-meta">
                                <h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
                                <small><a href="fashion.html" title="">Health</a></small>
                                <small><a href="fashion.html" title="">${datestr}</a></small>
                            </div><!-- end meta -->
                        </div><!-- end blog-box -->
                        <hr class="invis">		
		`);

			} else if (n == 4) {
			} else if (n == 5) {

			} else if (n == 6) {

			} else if (n == 7) {

			} else if (n == 8) {

			} else if (n == 9) {

			} else if (n == 10) {

			} else if (n == 11) {

			} else if (n == 12) {

			} else if (catid == 26) {
				catidtext = "Howto & Style";
			} else if (catid == 27) {
				catidtext = "Education";
			} else if (catid == 28) {
				catidtext = "Science & Technology";
			} else if (catid == 29) {
				catidtext = "Nonprofits & Activism";
			};


			let chaneltitle = page.snippet.channelTitle;




		}

	}
	request.send();
}
function fashion() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'Fashion';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


	urlsort = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${querry}&key=${keey}&maxResults=16&type=video&videoLicense=creativeCommon&chart=mostPopular`

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
			if (n == 2) {
				$('#fashion1').append(`

		<div class="blog-box">
		<div class="post-media">
			<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta">
			<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
			<small><a href="fashion.html" title="">Fashion</a></small>
			<small><a href="fashion.html" title="">${datestr}</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->
	
		`);
			} else if (n == 3) {
				$('#fashion2').append(`
		<div class="blog-box">
		<div class="post-media">
			<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta">
			<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
			<small><a href="fashion.html" title="">Fashion</a></small>
			<small><a href="fashion.html" title="">${datestr}</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->	
		`);

			} else if (n == 4) {
				$('#fashion3').append(`
		<div class="blog-box">
		<div class="post-media">
			<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta">
			<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
			<small><a href="fashion.html" title="">Fashion</a></small>
			<small><a href="fashion.html" title="">${datestr}</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->	
		`);
			} else if (n == 5) {
				$('#fashion4').append(`
		<div class="blog-box">
		<div class="post-media">
			<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta">
			<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
			<small><a href="fashion.html" title="">Fashion</a></small>
			<small><a href="fashion.html" title="">${datestr}</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->	
		`);

			} else if (n == 6) {
				$('#fashion5').append(`
		<div class="blog-box">
		<div class="post-media">
			<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta">
			<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
			<small><a href="fashion.html" title="">Fashion</a></small>
			<small><a href="fashion.html" title="">${datestr}</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->	
		`);

			} else if (n == 7) {
				$('#fashion6').append(`
		<div class="blog-box">
		<div class="post-media">
			<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
				<img src="${image}" alt="" class="img-fluid">
				<div class="hovereffect">
					<span></span>
				</div><!-- end hover -->
			</a>
		</div><!-- end media -->
		<div class="blog-meta">
			<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
			<small><a href="fashion.html" title="">Fashion</a></small>
			<small><a href="fashion.html" title="">${datestr}</a></small>
		</div><!-- end meta -->
	</div><!-- end blog-box -->	
		`);

			} else if (n == 8) {
				$('#fashionheader').append(
					`		   
			   <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			   <div class="blog-box">
				   <div class="post-media">
					   <a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						   <img src="${image}" alt=""
							   class="img-fluid">
						   <div class="hovereffect">
						   </div><!-- end hover -->
						   <span class="menucat">Trends</span>
					   </a>
				   </div><!-- end media -->
				   <div class="blog-meta">
					   <h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
				   </div><!-- end meta -->
			   </div><!-- end blog-box -->
		   </div>
			   `)

			} else if (n == 9) {
				$('#fashionheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Trends</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		</div>
			`)

			} else if (n == 10) {
				$('#fashionheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Trends</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		</div>
			`)

			} else if (n == 11) {
				$('#fashionheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Trends</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		</div>
			`)

			} else if (n == 12) {
				$('#fashion7').append(`
				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Fashion</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->	
				`);
			} else if (n == 13) {
				$('#fashion8').append(`
				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Fashion</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->	
				`);
			} else if (n == 14) {
				$('#fashion9').append(`
				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Fashion</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->	
				`);
			} else if (n == 15) {
				$('#fashion10').append(`
				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Health&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Fashion</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->	
				`);
			} else if (n == 16) {

			};


			let chaneltitle = page.snippet.channelTitle;




		}

	}
	request.send();
}

function beauty() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'Secret to beautiful and elegant body';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


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
			if (n == 2) {
			} else if (n == 3) {

			} else if (n == 4) {
			} else if (n == 5) {

			} else if (n == 6) {
			} else if (n == 7) {

			} else if (n == 8) {
				$('#beautyheader').append(
					`		   
			   <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			   <div class="blog-box">
				   <div class="post-media">
					   <a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						   <img src="${image}" alt=""
							   class="img-fluid">
						   <div class="hovereffect">
						   </div><!-- end hover -->
						   <span class="menucat">Trends</span>
					   </a>
				   </div><!-- end media -->
				   <div class="blog-meta">
					   <h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				   </div><!-- end meta -->
			   </div><!-- end blog-box -->
		   </div>
			   `)

			} else if (n == 9) {
				$('#beautyheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Trends</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		</div>
			`)

			} else if (n == 10) {
				$('#beautyheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Trends</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		</div>
			`)

			} else if (n == 11) {
				$('#beautyheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Trends</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		</div>
			`)

			} else if (n == 12) {

			} else if (catid == 26) {
				catidtext = "Howto & Style";
			} else if (catid == 27) {
				catidtext = "Education";
			} else if (catid == 28) {
				catidtext = "Science & Technology";
			} else if (catid == 29) {
				catidtext = "Nonprofits & Activism";
			};


			let chaneltitle = page.snippet.channelTitle;




		}

	}
	request.send();
}

function architecture() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'Stylish cabinet designs and furnitures';

	// https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D


	//     urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
	// &part=snippet,contentDetails,statistics,status`


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
			if (n == 2) {
				$('#vlog').append(`

				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Vlogs&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span class="videohover"></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Architecture&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Videos</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		
			<hr class="invis">
		
				`);
			} else if (n == 3) {
				$('#vlog').append(`

				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Architecture&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span class="videohover"></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Vlogs&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Videos</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		
			<hr class="invis">
		
				`);

			} else if (n == 4) {
				$('#vlog').append(`

				<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Architecture&id=${page.id.videoId}" title="">
						<img src="${image}" alt="" class="img-fluid">
						<div class="hovereffect">
							<span class="videohover"></span>
						</div><!-- end hover -->
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Vlogs&id=${page.id.videoId}" title="">${title}</a></h4>
					<small><a href="fashion.html" title="">Videos</a></small>
					<small><a href="fashion.html" title="">${datestr}</a></small>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
		
			<hr class="invis">
		
				`);
			} else if (n == 5) {
				

			} else if (n == 6) {
			} else if (n == 7) {

			} else if (n == 8) {
				$('#architectureheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Furnishings</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
			</div>
			
			`)

			} else if (n == 9) {
				$('#architectureheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Furnishings</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
			</div>
			
			`)

			} else if (n == 10) {
				$('#architectureheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Furnishings</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
			</div>
			
			`)

			} else if (n == 11) {
				$('#architectureheader').append(
					`		   
			<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
			<div class="blog-box">
				<div class="post-media">
					<a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">
						<img src="${image}" alt=""
							class="img-fluid">
						<div class="hovereffect">
						</div><!-- end hover -->
						<span class="menucat">Furnishings</span>
					</a>
				</div><!-- end media -->
				<div class="blog-meta">
					<h4><a href="single-video.html?ref=Beauty&id=${page.id.videoId}" title="">${title}</a></h4>
				</div><!-- end meta -->
			</div><!-- end blog-box -->
			</div>
			
			`)

			} else if (n == 12) {

			} else if (catid == 26) {
				catidtext = "Howto & Style";
			} else if (catid == 27) {
				catidtext = "Education";
			} else if (catid == 28) {
				catidtext = "Science & Technology";
			} else if (catid == 29) {
				catidtext = "Nonprofits & Activism";
			};


			let chaneltitle = page.snippet.channelTitle;




		}

	}
	request.send();
}

architecture();
beauty();
lifestyle();
travel();
fashion();
food();
health();
