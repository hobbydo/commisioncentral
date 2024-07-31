const keey = 'AIzaSyBOPNC8fSn7YiOcuGabnIdZdL0-pZLedBs';

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
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 3) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);

            } else if (n == 4) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 5) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 6) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 7) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 8) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 9) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 10) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 11) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 12) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
            } else if (n == 13) {
                $('#travel1').append(`
                <div class="col-md-6">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">
                            <img src="${image}" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="single-video.html?ref=Lifestyle&id=${page.id.videoId}" title="">${title} </a></h4>
                        <p>${description}</p>
                        <small><a href="fashion.html" title="">Travel</a></small>
                        <small><a href="page-sitemap.html" title="">${datestr}</a></small>
                        <small><a href="blog-author.html" title="">by Ego</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
            </div><!-- end col -->

		`);
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

travel();