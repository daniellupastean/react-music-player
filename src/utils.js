import { v4 as uuidv4 } from "uuid";

function ncsMusic() {
  return [
    {
      name: "Firefly pt. II",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/1a33e6db-9e23-44ed-bf19-1a4788f7a563/artwork-440x440.jpg",
      artist: "Jim Yosef",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/886/firefly-pt-ii-1609452032-XJzweRIPsK.mp3",
      color: ["#AC6A8E", "#566D53"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Memory",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/0bb9a60b-a6b0-4820-bb4c-0bde3f34f0ab/artwork-440x440.jpg",
      artist: "RUD, Elektronomia",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/939/memory-1619686835-1chldotSss.mp3",
      color: ["#C3B3BD", "#F87E01"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Heaven",
      cover: "https://i1.sndcdn.com/artworks-000464053185-4tukca-t500x500.jpg",
      artist: "Elektronomia",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/573/heaven-1586957132-f9R7o2J2Uv.mp3",
      color: ["#428BCF", "#211E2F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Courage",
      cover:
        "https://linkstorage.linkfire.com/medialinks/images/bb3e9c8d-e502-417a-81d2-ae491099645c/artwork-440x440.jpg",
      artist: "Jim Yosef, Anna Yvette",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/382/courage-1586951439-gBUCDHDCgj.mp3",
      color: ["#998C72", "#07323F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dance With Me",
      cover:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/862/1000x0/dance-with-me-1606474870-PSv083F21a.jpg",
      artist: "Alexis Donn, Unknown Brain",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/862/dance-with-me-1606474872-T7hdXgxeLR.mp3",
      color: ["", ""],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Eclipse",
      cover:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/130/1000x0/eclipse-1586946806-vMRYOAk6kz.jpg",
      artist: "Jim Yosef",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/130/eclipse-1586946808-t73ipJSSMv.mp3",
      color: ["", ""],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Prism",
      cover:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/618/1000x0/prism-1586958135-30NZD9QWzw.jpg",
      artist: "Summer Was Fun, Laura Brehm",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/618/prism-1586958138-Z15yLssLLA.mp3",
      color: ["", ""],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Vertigo (Spitfya Remix)",
      cover:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/542/1000x0/vertigo-spitfya-remix-1586956049-JL6P6ykoTc.jpg",
      artist: "Rob Gasser, Laura Brehm, Spitfya",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/542/vertigo-spitfya-remix-1586956056-PjQuHBlia5.mp3",
      color: ["", ""],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Summersong 2018",
      cover:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/501/1000x0/summersong-2018-1586954973-1LoVrsQP5K.jpg",
      artist: "Elektronomia",
      audio:
        "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/501/summersong-2018-1586954985-tCJJsY4Sq5.mp3",
      color: ["", ""],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default ncsMusic;
