const events = [
  {
    id: 1,
    title: "6202 Returns to Sports Lounge Off Broadway",
    date: "Sat, Apr 27, 2024",
    time: "8:30pm - 12:30am",
    location: "Sports Lounge off Broadway",
    address: "44 W Centennial Blvd, Highlands Ranch, CO 80129, USA",
    description: "6202 performs a Saturday Night Special at Sports Lounge!",
    logo: "https://images.getbento.com/accounts/fb53991197d2d7039b97c870007667e1/media/images/92007SLOB-White-trans-1-01.png",
    link: "https://www.sportsloungebar.com/",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.897676761705!2d-104.99083362345961!3d39.56191470722139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c82337973cfdf%3A0xe9af81e73250c12!2sSports%20Lounge%20Off%20Broadway!5e0!3m2!1sen!2sus!4v1713273523181!5m2!1sen!2sus",
  },
  {
    id: 2,
    title: "6202 Takes the Stage at Sheabeen Irish Pub",
    date: "Fri, May 3, 2024",
    time: "8:00pm - 12:00am",
    location: "Sheabeen Irish Pub",
    address: "2300 S Chambers Rd # A, Aurora, CO 80014, USA",
    description: "6202 returns to Aurora for a Friday night show at Sheabeen.",
    logo: "https://www.sheabeenirishpub.com/images/logo2.jpg",
    link: "https://www.sheabeenirishpub.com/",
    mapEmbed: "",
  },
  {
    id: 3,
    title: "6202 Returns to Hoffbrau Bar & Grill",
    date: "Thu, May 16, 2024",
    time: "9:00pm - 12:00am",
    location: "Hoffbrau Bar & Grill",
    address: "9110 Wadsworth Pkwy, Westminster, CO 80021, USA",
    description: "6202 returns to grace the stage at Hoffbrau",
    logo: "https://www.hoffbrau.com/sites/all/themes/bestmobile/logo.png",
    link: "https://www.hoffbrau.com/",
    mapEmbed: "",
  },
  {
    id: 4,
    title: "6202 Returns to Rock Bottom Brewery",
    date: "Sat, Jun 08, 2024",
    time: "6:00pm - 9:00pm",
    location: "Rock Bottom Brewery",
    address: "1505 Park Central Dr, Highlands Ranch, CO 80126, USA",
    description: "6202 plays at Rock Bottom Brewery's Summer Music Series",
    logo: "https://rockbottom.com/wp-content/uploads/2021/09/logo-red.png",
    link: "https://rockbottom.com/",
    mapEmbed: "",
  },
  {
    id: 5,
    title: "Greenfield's Welcome 6202 for a Friday Night Show",
    date: "Fri, Jun 21, 2024",
    time: "8:00pm - 12:00am",
    location: "Greenfield's",
    address: "3355 S Yarrow St E101, Lakewood, CO 80227, USA",
    description: "6202 makes a return visit to Greenfield's in Lakewood",
    logo: "https://img1.wsimg.com/isteam/ip/0ca600d5-a580-40b5-ad95-b7c4b4f7b18f/4442d3a6-6c6a-47fb-a48b-fe73880694f4.png/:/rs=w:159,h:106,cg:true,m/cr=w:159,h:106/qt=q:100/ll",
    link: "https://greenfieldsbar.com/",
    mapEmbed: "",
  },
  {
    id: 6,
    title: "6202 Returns to Wrigley's for a Saturday Night Special",
    date: "Sat, Jun 29, 2024",
    time: "4:00pm - 8:00pm",
    location: "Wrigley's Chicago Bar & Grill",
    address: "18200 W Colfax Ave, Golden, CO 80401, USA",
    description: "6202 takes to the outdoor stage at Wrigley's Chicago Bar & Grill in Golden",
    logo: "https://www.wrigleyschicagobar.net/wp-content/themes/wrigleys/images/wrigleys-chicago-bar-grill-logo.png",
    link: "https://www.wrigleyschicagobar.net/",
    mapEmbed: "",
  },
  {
    id: 7,
    title: "6202 Invades the Platte River Grill",
    date: "Fri, Jul 05, 2024",
    time: "6:00pm - 10:00pm",
    location: "The Platte",
    address: "5995 S Santa Fe Dr, Littleton, CO 80120, USA",
    description:
      "6202 punctuates the work week with a Friday Night show on the outdoor stage at The Platte",
    logo: "https://static.wixstatic.com/media/6f0583_fe575d3ea44a4511aa0ede5333f9ddd5~mv2.png/v1/fill/w_133,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Platte-River-Grill-logo_black.png",
    link: "https://www.theplatteriverbarandgrill.com/",
    mapEmbed: "",
  },
  {
    id: 8,
    title: "6202 Debuts at Bucket List Tavern",
    date: "Fri, Jul 19, 2024",
    time: "",
    location: "Bucket List Tavern",
    address: "3982 Limelight Ave Ste A, Castle Rock, CO 80109, USA",
    description:
      "6202 makes their first visit and plays the patio at Bucket List Tavern in Castle Rock.",
    logo: "https://images.squarespace-cdn.com/content/v1/632239fbc9ab8874b248588d/15d47f55-e4ba-4c68-98d8-f275d79b2dcf/Bucketlist+Logo+72ppi+for+Black+Background.png?format=1500w",
    link: "https://www.bucketlisttavern.com/",
    mapEmbed: "",
  },
  {
    id: 9,
    title: "6202 Hits Rock Bottom Again!",
    date: "Sat, Jul 27, 2024",
    time: "6:00pm - 9:00pm",
    location: "Rock Bottom Brewery",
    address: "1505 Park Central Dr, Highlands Ranch, CO 80126, USA",
    description: "6202 plays a second show for Rock Bottom Brewery's Summer Music Series.",
    logo: "https://rockbottom.com/wp-content/uploads/2021/09/logo-red.png",
    link: "https://rockbottom.com/",
    mapEmbed: "",
  },
  {
    id: 10,
    title: "6202 Returns to Sheabeen Irish Pub",
    date: "Fri, Aug 16, 2024",
    time: "9:00pm - 12:00am",
    location: "Sheabeen Irish Pub",
    address: "2300 S Chambers Rd # A, Aurora, CO 80014, USA",
    description: "6202 makes a return visit to Sheabeen Irish Pub for a Friday night show.",
    logo: "https://www.sheabeenirishpub.com/images/logo2.jpg",
    link: "https://www.sheabeenirishpub.com/",
    mapEmbed: "",
  },
  {
    id: 11,
    title: "6202 Rocks the Palmer Lake Pub!",
    date: "Sat, Aug 31, 2024",
    time: "4:00pm - 7:00pm",
    location: "Palmer Lake Pub",
    address: "876 CO-105, Palmer Lake, CO 80133, USA",
    description:
      "6202 plays a parking lot party at Palmer Lake Pub in beautiful Monument. Come on out for a great late afternoon of Rock music and enjoy the amazing food, drinks and service at Palmer Lake Pub. Chantel and her talented staff will take care of the food and drinks, while 6202 brings the heat!!",
    logo: "https://static.wixstatic.com/media/e903ec_907eba549830449a9eb9603790844e96~mv2.jpg/v1/crop/x_2,y_0,w_957,h_838/fill/w_317,h_274,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PLP_Logo_White.jpg",
    link: "https://www.palmerlakepub.net/",
    mapEmbed: "",
  },
  {
    id: 12,
    title: "6202 Invades Greenfield's!",
    date: "Sat, Sep 07, 2024",
    time: "8:00pm - 12:00am",
    location: "Greenfield's",
    address: "3355 S Yarrow St E101, Lakewood, CO 80227, USA",
    description: "6202 takes the stage for a Saturday night show at Greenfield's.",
    logo: "https://img1.wsimg.com/isteam/ip/0ca600d5-a580-40b5-ad95-b7c4b4f7b18f/4442d3a6-6c6a-47fb-a48b-fe73880694f4.png/:/rs=w:159,h:106,cg:true,m/cr=w:159,h:106/qt=q:100/ll",
    link: "https://greenfieldsbar.com/",
    mapEmbed: "",
  },
  {
    id: 13,
    title: "6202 Plays the Outdoor Stage at the Platte River Grill",
    date: "Fri, Sep 13, 2024",
    time: "6:00pm - 10:00pm",
    location: "The Platte",
    address: "5995 S Santa Fe Dr, Littleton, CO 80120, USA",
    description: "6202 makes a return visit to The Platte for another Friday night show.",
    logo: "https://static.wixstatic.com/media/6f0583_fe575d3ea44a4511aa0ede5333f9ddd5~mv2.png/v1/fill/w_133,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Platte-River-Grill-logo_black.png",
    link: "https://www.theplatteriverbarandgrill.com/",
    mapEmbed: "",
  },
  {
    id: 14,
    title: "6202 Returns to Wrigley's for a Saturday Night Special",
    date: "Sat, Sep 21, 2024",
    time: "4:00pm - 8:00pm",
    location: "Wrigley's Chicago Bar & Grill",
    address: "18200 W Colfax Ave, Golden, CO 80401, USA",
    description: "6202 is back at Wrigley's for a Fall show on the outdoor stage",
    logo: "https://www.wrigleyschicagobar.net/wp-content/themes/wrigleys/images/wrigleys-chicago-bar-grill-logo.png",
    link: "https://www.wrigleyschicagobar.net/",
    mapEmbed: "",
  },
  {
    id: 15,
    title: "6202 Makes a Return to the Stage at Takoda Tavern",
    date: "Fri, Oct 25, 2024",
    time: "7:30pm - 11:30pm",
    location: "Takoda Tavern",
    address: "12365 Pine Bluffs Way, Parker, CO 80134, USA",
    description:
      "6202 takes to the stage for a Friday night show. Don't miss everything Takoda has to offer; outstanding food, a huge variety of drink options, and of course, great music with 6202.",
    logo: "http://nebula.wsimg.com/61ee8aaed0b74e6676d11f86c8ae73eb?AccessKeyId=F95A2FBD5F21156E5012&disposition=0&alloworigin=1",
    link: "http://www.takodatavern.com/",
    mapEmbed: "",
  },
  {
    id: 16,
    title: "6202 Rocks the House at Takoda Tavern",
    date: "Fri, Dec 06, 2024",
    time: "7:30pm - 11:30pm",
    location: "Takoda Tavern",
    address: "12365 Pine Bluffs Way, Parker, CO 80134, USA",
    description:
      "6202 makes its last 2024 visit to Takoda Tavern with a Friday night in December to remember!",
    logo: "http://nebula.wsimg.com/61ee8aaed0b74e6676d11f86c8ae73eb?AccessKeyId=F95A2FBD5F21156E5012&disposition=0&alloworigin=1",
    link: "http://www.takodatavern.com/",
    mapEmbed: "",
  },
  {
    id: 17,
    title: "6202 Plays Their Last 2024 Show at Greenfield's",
    date: "Fri, Dec 20, 2024",
    time: "8:00pm - 12:00am",
    location: "Greenfield's",
    address: "3355 S Yarrow St E101, Lakewood, CO 80227, USA",
    description: "6202 closes out 2024 with a Friday night show at Greenfield's",
    logo: "https://img1.wsimg.com/isteam/ip/0ca600d5-a580-40b5-ad95-b7c4b4f7b18f/4442d3a6-6c6a-47fb-a48b-fe73880694f4.png/:/rs=w:159,h:106,cg:true,m/cr=w:159,h:106/qt=q:100/ll",
    link: "https://greenfieldsbar.com/",
    mapEmbed: "",
  },
];

export default events;