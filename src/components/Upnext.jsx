import { Typography, Box, styled } from "@mui/material";
import React from "react";

const Poster = styled("img")({
  width: 88,
});

const Wrapper = styled(Box)`
  color: #ffffff;
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;
const Component = styled(Box)`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
    text-algin: center;
  }

  @media only screen and (max-width: 1200px) {
    display:none;
  }
`;

const Upnext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {movies.splice(0, 4).map((movie) => (
        <Wrapper>
          <Poster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

export default Upnext;
