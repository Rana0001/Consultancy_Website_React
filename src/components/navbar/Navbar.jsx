import { Box, Typography } from '@mui/material';
import SearchBar from '../searchBar/SearchBar';
import img from '../../assets/images/weather.png';

export default function Navbar({ setUrl, city, setOlat, setOlon }) {
  return (
    <Box>
      <Box
        className="topBar"
        sx={{
          backgroundColor: '#005986',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={img} alt="logo" style={{ marginRight: '10vw' }} />
        <Typography
          className="topBarText"
          variant="h5"
          paddingRight="20vw"
          paddingLeft="10vw"
          sx={{ color: 'white' }}
        >
          WeatherAPI
        </Typography>
        <SearchBar setOlat={setOlat} setOlon={setOlon} />
      </Box>

      <Box sx={{ backgroundColor: '#24759f' }}>
        <Typography sx={{ padding: '8px 0 8px 10px', color: 'white' }}>
          {`${city}`}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: '#0e4763',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <button
          className="navButton"
          type="submit"
          onClick={() => {
            setUrl('forecast/minutely');
          }}
        >
          Nowcast
        </button>
        <button
          className="navButton"
          type="submit"
          onClick={() => {
            setUrl('forecast/3hourly');
          }}
        >
          5 Day Forecast
        </button>
        <button
          className="navButton"
          type="submit"
          onClick={() => {
            setUrl('forecast/daily');
          }}
        >
          16 Day Forecast
        </button>
      </Box>
    </Box>
  );
}
