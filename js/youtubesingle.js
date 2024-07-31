


$('#youtubeid').append(`
  <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/${id}"
      allowfullscreen></iframe>
  `)

// var id = new URL(location.href).searchParams.get('id')
// alert("The URL of this page is: " + id);


const keey = 'AIzaSyBOPNC8fSn7YiOcuGabnIdZdL0-pZLedBs';


function searchx(id) {
    // alert("fffffffffffffffffff");
    //   document.querySelector('#homepage').style.display = 'none';
    // select where the values will be displayed


    // get the value from the search input and use for the youtube querry

    var request = new XMLHttpRequest();


    // https://www.youtube.com/results?search_query=love&sp=EgIwAQ%253D%253D
    //    captions  = `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.captions.list?part=snippet&videoId=${id}&key=${keey}`



    urrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${keey}
&part=snippet,contentDetails,statistics,status`


    request.open('GET', urrl, true);
    request.onload = function () {   // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        console.log("data");
        console.log(data);
        // get the pagination button

        for (let page of data.items) {

            // https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?
            // part=snippet,contentDetails
            // &id=UCK8sQmJBp8GCxrOtXWBpyEA

            //frame of the post
            // const carda = document.createElement('a');
            // carda.setAttribute('href', '/product_detail.html');



            //title of the post
            const title = document.createElement('h4')
            title.textContent = page.snippet.title;
            //description of the post

            const description = document.createElement('p')
            description.textContent = page.snippet.description;

            //image of the post
            const image = document.createElement('img');
            image.src = `${page.snippet.thumbnails.high.url}`;
            imagedefault = `${page.snippet.thumbnails.default.url}`;
            imagemedium = `${page.snippet.thumbnails.medium.url}`;
            // imagestandard = `${page.snippet.thumbnails.standard.url}`;
            // imagemaxres = `${page.snippet.thumbnails.maxres.url}`;

            // card.addEventListener("click", function(){
            // 	//   window.open(`https://www.youtube.com/watch?v=${page.id.videoId}`,"_blank");
            // 	window.open(`${currentUrl}/product_details.html?greeting=hello`);
            // 	  window.open('/product_details.html?greeting=hello');
            // });

            //add the values to the html selector id root


            let catid = page.snippet.categoryId;
            let catidtext;
            if (catid == 1) {
                catidtext = "Film & Animation";
            } else if (catid == 2) {
                catidtext = "Autos & Vehicles";
            } else if (catid == 10) {
                catidtext = "Music";
            } else if (catid == 15) {
                catidtext = "Pets & Animals";
            } else if (catid == 17) {
                catidtext = "Sports";
            } else if (catid == 19) {
                catidtext = "Travel & Events";
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

            var tags = data.items[0].snippet.tags;
            var tagsResult = "";
            tags.forEach((tag) => {
                tagsResult += '<small><a href="#" title="">' + tag + '</a></small>';
            });
            let chaneltitle = page.snippet.channelTitle;
            let commentCount = page.statistics.commentCount;
            let likeCount = page.statistics.likeCount;
            let viewCount = page.statistics.viewCount;
            let favoriteCount = page.statistics.favoriteCount;

            const date = new Date(page.snippet.publishTime);

            const day = date.getDate();
            const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
            const year = date.getFullYear();

            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];


            const datestr = `${day} ${monthNames[month]}, ${year}`;



            $('#single').append(`
<div class="page-wrapper">
<div class="blog-title-area">
    <ol class="breadcrumb hidden-xs-down">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="${ref.toLowerCase()}.html">${ref}</a></li>
        <li class="breadcrumb-item active"> ${title.textContent}</li>
    </ol>

    <span class="color-yellow"><a href="fashion.html" title="">${ref}</a></span>

    <h3>${title.textContent} - By ${page.snippet.channelTitle}</h3>

    <div class="blog-meta big-meta">
        <small><a href="single.html" title="">${datestr}</a></small>
        <small><a href="blog-author.html" title="">${page.snippet.channelTitle}</a></small>
        <small><a href="#" title=""><i class="fa fa-eye"></i> 2344</a></small>
    </div><!-- end meta -->

    <div class="post-sharing">
        <ul class="list-inline">
            <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i>
                    <span class="down-mobile">Share on Facebook</span></a></li>
            <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i>
                    <span class="down-mobile">Tweet on Twitter</span></a></li>
            <li><a href="#" class="gp-button btn btn-primary"><i
                        class="fa fa-google-plus"></i></a></li>
        </ul>
    </div><!-- end post-sharing -->
</div><!-- end title -->

<div class="blog-content">
  <p>  ${description.textContent} </p>

    

<div class="blog-title-area">
    <div class="tag-cloud-single">
        <span>Tags</span>
      ${tagsResult}
    </div><!-- end meta -->

    <div class="post-sharing">
        <ul class="list-inline">
            <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i>
                    <span class="down-mobile">Share on Facebook</span></a></li>
            <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i>
                    <span class="down-mobile">Tweet on Twitter</span></a></li>
            <li><a href="#" class="gp-button btn btn-primary"><i
                        class="fa fa-google-plus"></i></a></li>
        </ul>
    </div><!-- end post-sharing -->
</div><!-- end title -->

<div class="row">
    <div class="col-lg-12">
        <div class="banner-spot clearfix">
            <div class="banner-img">
                <img src="upload/banner_01.jpg" alt="" class="img-fluid">
            </div><!-- end banner-img -->
        </div><!-- end banner -->
    </div><!-- end col -->
</div><!-- end row -->

<hr class="invis1">

<div class="custombox prevnextpost clearfix">
    <div class="row">
        <div class="col-lg-6">
            <div class="blog-list-widget">
                <div class="list-group">
                    <a href="single.html"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="w-100 justify-content-between text-right">
                            <img src="upload/blog_square_02.jpg" alt=""
                                class="img-fluid float-right">
                            <h5 class="mb-1">5 Beautiful buildings you need to before dying
                            </h5>
                            <small>Prev Post</small>
                        </div>
                    </a>
                </div>
            </div>
        </div><!-- end col -->

        <div class="col-lg-6">
            <div class="blog-list-widget">
                <div class="list-group">
                    <a href="single.html"
                        class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="w-100 justify-content-between">
                            <img src="upload/blog_square_03.jpg" alt=""
                                class="img-fluid float-left">
                            <h5 class="mb-1">Let's make an introduction to the glorious
                                world of history</h5>
                            <small>Next Post</small>
                        </div>
                    </a>
                </div>
            </div>
        </div><!-- end col -->
    </div><!-- end row -->
</div><!-- end author-box -->

<hr class="invis1">

<div class="custombox authorbox clearfix">
    <h4 class="small-title">About author</h4>
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <img src="upload/author.jpg" alt="" class="img-fluid rounded-circle">
        </div><!-- end col -->

        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <h4><a href="#">Jessica</a></h4>
            <p>Quisque sed tristique felis. Lorem <a href="#">visit my website</a> amet,
                consectetur adipiscing elit. Phasellus quis mi auctor, tincidunt nisl eget,
                finibus odio. Duis tempus elit quis risus congue feugiat. Thanks for stop
                Cloapedia!</p>

            <div class="topsocial">
                <a href="#" data-toggle="tooltip" data-placement="bottom"
                    title="Facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i
                        class="fa fa-youtube"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom"
                    title="Pinterest"><i class="fa fa-pinterest"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i
                        class="fa fa-twitter"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom"
                    title="Instagram"><i class="fa fa-instagram"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Website"><i
                        class="fa fa-link"></i></a>
            </div><!-- end social -->

        </div><!-- end col -->
    </div><!-- end row -->
</div><!-- end author-box -->

<hr class="invis1">

<div class="custombox clearfix">
    <h4 class="small-title">You may also like</h4>
    <div class="row">
        <div class="col-lg-6">
            <div class="blog-box">
                <div class="post-media">
                    <a href="single.html" title="">
                        <img src="upload/menu_06.jpg" alt="" class="img-fluid">
                        <div class="hovereffect">
                            <span class=""></span>
                        </div><!-- end hover -->
                    </a>
                </div><!-- end media -->
                <div class="blog-meta">
                    <h4><a href="single.html" title="">We are guests of ABC Design
                            Studio</a></h4>
                    <small><a href="fashion.html" title="">Trends</a></small>
                    <small><a href="fashion.html" title="">21 July,
                            2017</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
        </div><!-- end col -->

        <div class="col-lg-6">
            <div class="blog-box">
                <div class="post-media">
                    <a href="single.html" title="">
                        <img src="upload/menu_07.jpg" alt="" class="img-fluid">
                        <div class="hovereffect">
                            <span class=""></span>
                        </div><!-- end hover -->
                    </a>
                </div><!-- end media -->
                <div class="blog-meta">
                    <h4><a href="single.html" title="">Nostalgia at work with family</a>
                    </h4>
                    <small><a href="fashion.html" title="">News</a></small>
                    <small><a href="fashion.html" title="">20 July,
                            2017</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
        </div><!-- end col -->
    </div><!-- end row -->
</div><!-- end custom-box -->

<hr class="invis1">

<div class="custombox clearfix">
    <h4 class="small-title">3 Comments</h4>
    <div class="row">
        <div class="col-lg-12">
            <div class="comments-list">
                <div class="media">
                    <a class="media-left" href="#">
                        <img src="upload/author.jpg" alt="" class="rounded-circle">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading user_name">Ego Martines <small>5 days
                                ago</small></h4>
                        <p>Exercitation photo booth stumptown tote bag Banksy, elit small
                            batch freegan sed. Craft beer elit seitan exercitation, photo
                            booth et 8-bit kale chips proident chillwave deep v laborum.
                            Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                            readymade swag. Selfies iPhone Kickstarter, drinking vinegar
                            jean.</p>
                        <a href="#" class="btn btn-primary btn-sm">Reply</a>
                    </div>
                </div>
                <div class="media">
                    <a class="media-left" href="#">
                        <img src="upload/author_01.jpg" alt="" class="rounded-circle">
                    </a>
                    <div class="media-body">

                        <h4 class="media-heading user_name">Baltej Singh <small>5 days
                                ago</small></h4>

                        <p>Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche
                            lomo biodiesel Neutra selfies. Shorts fixie consequat
                            flexitarian four loko tempor duis single-origin coffee. Banksy,
                            elit small.</p>

                        <a href="#" class="btn btn-primary btn-sm">Reply</a>
                    </div>
                </div>
                <div class="media last-child">
                    <a class="media-left" href="#">
                        <img src="upload/author_02.jpg" alt="" class="rounded-circle">
                    </a>
                    <div class="media-body">

                        <h4 class="media-heading user_name">Marie Johnson <small>5 days
                                ago</small></h4>
                        <p>Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up
                            artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.
                            Shorts fixie consequat flexitarian four loko tempor duis
                            single-origin coffee. Banksy, elit small.</p>

                        <a href="#" class="btn btn-primary btn-sm">Reply</a>
                    </div>
                </div>
            </div>
        </div><!-- end col -->
    </div><!-- end row -->
</div><!-- end custom-box -->

<hr class="invis1">

<div class="custombox clearfix">
    <h4 class="small-title">Leave a Reply</h4>
    <div class="row">
        <div class="col-lg-12">
            <form class="form-wrapper">
                <input type="text" class="form-control" placeholder="Your name">
                <input type="text" class="form-control" placeholder="Email address">
                <input type="text" class="form-control" placeholder="Website">
                <textarea class="form-control" placeholder="Your comment"></textarea>
                <button type="submit" class="btn btn-primary">Submit Comment</button>
            </form>
        </div>
    </div>
</div>
</div><!-- end page-wrapper -->
`)

        }


    }
    request.send();
}
searchx(id);