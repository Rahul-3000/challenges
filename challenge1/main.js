/*
sharing links 
FB: https://www.facebook.com/sharer.php?u=[post-url]
twitter: https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
pintrest: https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

*/
const fb_btn = document.querySelector("a.FB")
const twitter_btn = document.querySelector("a.twitter")
const pinterest_btn = document.querySelector("a.pintrest")

function share_button(){
    let post_url = encodeURI(document.location.href);
    let post_title = encodeURI("Article");

    fb_btn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${post_url}`);

    twitter_btn.setAttribute(
        "href",
        `https://twitter.com/share?url=${post_url}&text=${post_title}`
    );

    pinterest_btn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?url=${post_url}&description=${post_title}`
    );

}

share_button();