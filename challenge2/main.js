/*
sharing links 
got from web search social links
FB: https://www.facebook.com/sharer.php?u=[post-url]
twitter: https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
pintrest: https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

*/



/*For the toggle button in phone*/
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('show')
    menu.classList.toggle('show');
}
);

const fb_btn = document.querySelector("a.FB");
const twitter_btn = document.querySelector("a.twitter");
const pinterest_btn = document.querySelector("a.pintrest");
const insta_btn = document.querySelector("a.insta");

function share_button(){
    let post_url = encodeURI(document.location.href);
    let post_title = encodeURI("Challenge 2 | Insure landing page");

    fb_btn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${post_url}`);

    twitter_btn.setAttribute(
        "href",
        `https://twitter.com/share?url=${post_url}&text=${post_title}`
    );

    pinterest_btn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?url=${post_url}&description=${post_title}`
    );
    insta_btn.setAttribute(
        "href",
        `https://instagram.com/`
    );

}

share_button();