//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from "../../Context";
import { useContext, useState } from "react";


//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];


export const Header = ({ fan }) => {
  const darkTheme = useContext(ThemeContext);
  return (
      <header style={{backgroundColor: `${darkTheme ? "#151515" : "white"}`}}>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        <TextField
        id="input-with-icon-textfield"
        label="Search"
        color="secondary"
        focused
        sx={{ input: { color: 'white' } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#f4ebed" }} />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
        <div style={{ color: "white", paddingTop: "1rem" }}>
          I am fan of: {fan}
        </div>
      </div>
    </header>
    
  );
};
