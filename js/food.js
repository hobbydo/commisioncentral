// const keey = 'AIzaSyBOPNC8fSn7YiOcuGabnIdZdL0-pZLedBs';
const keey = 'AIzaSyBr9_gLCEmvCoA78a_u4U2ryIsjQ6xnmHU';

function food() {
	// alert("fffffffffffffffffff");
	//   document.querySelector('#homepage').style.display = 'none';
	// select where the values will be displayed


	// get the value from the search input and use for the youtube querry

	var request = new XMLHttpRequest();
	// document.getElementById('query').data = document.getElementById('query').value;
	// let query = document.getElementById('query').data;
	let querry = 'words of wisdom';

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
                $('#food1').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)

			} else if (n == 4) {
                $('#food1').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
			} else if (n == 5) {
                $('#food1').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
			
			} else if (n == 6) {
                $('#food2').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
			
			} else if (n == 7) {
                $('#food2').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
			
			} else if (n == 8) {
                $('#food2').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
			
			} else if (n == 9) {
                $('#food2').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
			
			} else if (n == 10) {
                $('#food2').append(`
                <div class="blog-box row">
                <div class="col-md-4">
                    <div class="post-media">
                        <a href="single-video.html" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect"></div>
                        </a>
                    </div><!-- end media -->
                </div><!-- end col -->

                <div class="blog-meta big-meta col-md-8">
                    <h4><a href="single.html" title="">${title}</a></h4>
                    <p>${description}</p>
                    <small><a href="food.html" title="">Food</a></small>
                    <small><a href="single.html" title="">${datestr}</a></small>
                    <small><a href="blog-author.html" title="">by Clara</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            <hr class="invis">
                `)
				
			} else if (n == 11) {
			
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

food();


// smart link