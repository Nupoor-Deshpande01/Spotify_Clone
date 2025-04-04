class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement(Menu, null), /*#__PURE__*/
        React.createElement(MainContent, null)));
  
  
    }}
  
  
  const Menu = () => {
    return /*#__PURE__*/(
      React.createElement("div", { id: "menu-bar", class: "menu-bar" }, /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("img", { src: "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg", alt: "Spotify Logo" }))), /*#__PURE__*/
      React.createElement("nav", { class: "navbar" }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { class: "active", href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z", fill: "currentColor" })), "Home")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z", fill: "currentColor", "fill-rule": "evenodd" })), "Search")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 512 512", width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/React.createElement("path", { d: "M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z", fill: "currentColor" })), "Your Library")))), /*#__PURE__*/
  
  
  
      React.createElement("nav", { class: "user-collection" }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-plus-square fa-lg", "aria-hidden": "true" }), "Create Playlist")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-heart fa-lg", "aria-hidden": "true" }), "Liked Songs")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-podcast fa-lg", "aria-hidden": "true" }), "Your Episodes")))), /*#__PURE__*/
  
  
  
      React.createElement("span", { class: "install-app" }, /*#__PURE__*/React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-arrow-circle-down fa-lg", "aria-hidden": "true" }), "Install App"))));
  
  
  };
  
  const MainContent = () => {
    return /*#__PURE__*/(
      React.createElement("div", { class: "main-content" }, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(Body, null)));
  
  
  };
  
  const Header = () => {
    const [profileVisibility, setProfileVisibility] = React.useState('hidden');
    const handleClick = () => {
      if (profileVisibility == 'hidden') {
        setProfileVisibility('visible');
      } else
      {
        setProfileVisibility('hidden');
      }
    };
  
    const [menuBarVisibility, setMenuBarVisibility] = React.useState('visible');
    const handleMenuBar = () => {
      if (menuBarVisibility == 'hidden') {
        setMenuBarVisibility('visible');
        document.getElementById('bar1').style.transform = 'none';
        document.getElementById('bar1').style.transition = 'transform .4s ease';
        document.getElementById('bar2').style.opacity = 1;
        document.getElementById('bar2').style.transition = 'opacity .5s ease';
        document.getElementById('bar3').style.transform = 'none';
        document.getElementById('bar3').style.transition = 'transform .4s ease';
        document.getElementById('menu-bar').style.transition = 'visibility .2s ease-in-out';
      } else
      {
        setMenuBarVisibility('hidden');
        document.getElementById('bar1').style.transform = 'rotate(-45deg) translate(-9px, 6px)';
        document.getElementById('bar1').style.transition = 'transform .4s ease';
        document.getElementById('bar2').style.opacity = 0;
        document.getElementById('bar2').style.transition = 'opacity .5s ease';
        document.getElementById('bar3').style.transform = 'rotate(45deg)translate(-5px, -3px)';
        document.getElementById('bar3').style.transition = 'transform .4s ease';
        document.getElementById('menu-bar').style.transition = 'visibility .2s ease-n-out';
  
      }
      document.getElementById('menu-bar').style.visibility = menuBarVisibility;
    };
    return /*#__PURE__*/(
      React.createElement("header", null, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { onClick: handleMenuBar, class: "hamburger" }, /*#__PURE__*/
      React.createElement("div", { id: "bar1", class: "bar1" }), /*#__PURE__*/
      React.createElement("div", { id: "bar2", class: "bar2" }), /*#__PURE__*/
      React.createElement("div", { id: "bar3", class: "bar3" })), /*#__PURE__*/
  
      React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
      React.createElement("button", { onClick: handleClick }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-user-circle fa-lg", "aria-hidden": "true" }), "music_mate", /*#__PURE__*/
  
      React.createElement("i", { className: `fa fa-caret-${profileVisibility == 'hidden' ? 'down' : 'up'}`, "aria-hidden": "true" })), /*#__PURE__*/
  
      React.createElement("ul", { style: { visibility: `${profileVisibility}` } }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#", target: "_blank" }, "Account", /*#__PURE__*/React.createElement("i", { class: "fa fa-external-link", "aria-hidden": "true" }))), /*#__PURE__*/
  
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Profile")), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Log Out")))))));
  
  
  
  
  
  };
  
  const Body = () => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? "Morning" : hours < 17 ? "Afternoon" : "Evening";
  
    return /*#__PURE__*/(
      React.createElement("main", null, /*#__PURE__*/
      React.createElement("div", { class: "greeting" }, /*#__PURE__*/
      React.createElement("h2", null, "Good ", greeting)), /*#__PURE__*/
  
  
      React.createElement("div", { class: "recent-activity" }, /*#__PURE__*/
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8412b9ab142f1775de4c536583", alt: "Pop Mix playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "Pop Mix")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f793da3c206dd7bb54928d1cc", alt: "The Legend of The Wooden Shoe" })), /*#__PURE__*/
  
      React.createElement("p", null, "The Legend of The Wooden Shoe")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2CNgSk-default.jpg", alt: "This Is Daft Punk cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "This Is Daft Punk")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.pinimg.com/1200x/97/37/dc/9737dc07b2603446b568d38c8ef2fefe.jpg", alt: "This is Lana Del Ray cover photo"})),
      React.createElement("p", null, "This is Lana Del Ray")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb26dbdbdacda5c30dc95e0c2c/3/en/default", alt: "Daily Mix 3 playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "Daily Mix 3")), /*#__PURE__*/
  
      React.createElement("div", { class: "activity-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f000000021373358fa4ff03aac54f188e", alt: "All Out 10s playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", null, "All Out 10s"))), /*#__PURE__*/
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Your Shows"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab6765630000ba8a1858c596402dc1f232d8fd28", alt: "Sare jahan se achha cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Saare Jahan Se Accha"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Harsha Bhogle")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab6765630000ba8abb1a6035aba5f0bf498671fe", alt: "The Crawlspace" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Crawlspace"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Mr.Ballen Podcast")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1fcf5b0c37fe67ebbcdceb930b", alt: "Headline: Breaking Football News playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Headline: Breaking Football News"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/fedc8e1c8b93cc9b8e49e8e101ec9d9b8795d1fe", alt: "Raj Prakash Paul playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Raj Prakash Paul"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Raj Prakash Paul")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f6d655e4364ad1ed1dad7a83d", alt: "The Here We Go Podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Here We Go Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Here We Go")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Made For music_mate"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebb99cacf8acd5378206767261/en", alt: "Daily Mix 1 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 1"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Lana Del Ray, Taylor Swift JENNIE and more")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5ebc36dd9eb55fb0db4911f25dd/en", alt: "Daily Mix 2 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 2"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Bruno Mars, Lady Gaga and more")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5ebe672b5f553298dcdccb0e676/en", alt: "Daily Mix 3 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 3"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Taylor Swift, Olivia Rodrigo")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/4/ab6761610000e5eb4293385d324db8558179afd9/en", alt: "Daily Mix 4 cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Daily Mix 4"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "DRAKE, Travis Scott and more")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en.jpg", alt: "On repeat cover" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "On Repeat"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Songs that you love currently")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Charts"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg", alt: "Top 50 India playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Top 50 India")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f00000002b545db24c5864981ff896f07", alt: "Hot Hits India playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Hot Hits India")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg", alt: "Top 50 Global playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Top 50 Global")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d43ff51921d2c74fed1fba3e", alt: "Top Albums - Global playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Top Albums - Global")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg", alt: "Viral 50 - India playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "Viral 50 - India")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Best Of Artists"), /*#__PURE__*/
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67706f0000000285c716247c24f66ef40f011e", alt: "This is Arijit Singh playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Arijit Singh")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2CNgSk-default.jpg", alt: "This is Daft Punk playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Daft Punk")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://linkstorage.linkfire.com/medialinks/images/fe4ed666-bcce-4fbb-ae4a-c532a8e2f779/artwork-440x440.jpg", alt: "This is Billie Eilish playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Billie Eilish")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i1.sndcdn.com/artworks-001025261035-9212d0-t500x500.jpg", alt: "This is The Weekend playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is The Weekend")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2YqUuI-default.jpg", alt: "This is Imagine Dragons playlist cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "This Is Imagine Dragons")))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { class: "category final-category" }, /*#__PURE__*/
      React.createElement("div", { class: "title" }, /*#__PURE__*/
      React.createElement("div", { class: "popular-shows" }, /*#__PURE__*/
      React.createElement("p", null, "POPULAR WITH LISTENERS OF"), /*#__PURE__*/
      React.createElement("h3", null, "Headline: Breaking Tennis News")), /*#__PURE__*/
  
      React.createElement("a", { href: "#" }, "SEE ALL")), /*#__PURE__*/
  
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f392812e6101b88df5c5fea0c", alt: "The Tennis podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Tennis Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. David Law, Catherine Whittaker")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/ab67656300005f1f904f9382323d4d4f68ccdcc5", alt: "The Athletic Tennis Podcast podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Athletic Tennis Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo400/7290870/7290870-1594839850599-18a8c05f4fcc2.jpg", alt: "The Tennis IQ podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Tennis IQ Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://lite-images-i.scdn.co/image/ab67656300005f1fb0b14f8a5b3d128e0dd76b68", alt: "The Next Big Thing podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Next Big Thing"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. The Athletic")), /*#__PURE__*/
  
      React.createElement("div", { class: "category-info" }, /*#__PURE__*/
      React.createElement("div", { class: "img-div" }, /*#__PURE__*/
      React.createElement("img", { src: "https://i.scdn.co/image/bdd990bddb85baa44c320b2ffba328549e184643", alt: "The Scouted Tennis Podcast podcast cover photo" })), /*#__PURE__*/
  
      React.createElement("p", { class: "category-name" }, "The Scouted Tennis Podcast"), /*#__PURE__*/
      React.createElement("p", { class: "author" }, "Show. Scouted Tennis"))))));
  
  
  
  
  
  };
  
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));