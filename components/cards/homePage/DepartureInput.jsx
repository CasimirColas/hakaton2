import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AddressAutofill = dynamic(() => import('@mapbox/search-js-react').then((mod) => mod.AddressAutofill), {
  ssr: false,
});
import { InputAdornment, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import dynamic from 'next/dynamic';

function DepartureInput({ departureAddress, handleDeparture, geoLocLoading, handleGeoLoc }) {
  const departureRef = useRef();

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

  useEffect(() => {
    if (!geoLocLoading && departureAddress)
      departureRef.current.value =
        departureAddress.address + ' ' + departureAddress.city + ', ' + departureAddress.country;
  }, [geoLocLoading, departureAddress]);

  return (
    <AddressAutofill
      accessToken={accessToken}
      onRetrieve={(e) => handleDeparture(e)}
      options={{
        language: 'fr',
        country: 'FR',
      }}
    >
      <TextField
        label="Localization"
        variant="standard"
        inputRef={departureRef}
        // data-cy="departure-input"
        inputProps={{ 'data-cy': 'departure-input' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ paddingBottom: '.4rem' }}>
              {!geoLocLoading ? (
                <LocationOnIcon sx={{ cursor: 'pointer' }} onClick={handleGeoLoc} data-cy="geoloc-btn" />
              ) : (
                <AutorenewIcon
                  sx={{
                    animation: 'spin 2s linear infinite',
                    '@keyframes spin': {
                      '0%': {
                        transform: 'rotate(-360deg)',
                      },
                      '100%': {
                        transform: 'rotate(0deg)',
                      },
                    },
                  }}
                  data-cy="geoloc-loading"
                />
              )}
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </AddressAutofill>
  );
}

DepartureInput.propTypes = {
  departureAddress: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    coord: PropTypes.arrayOf(PropTypes.number),
  }),
  handleDeparture: PropTypes.func.isRequired,
  geoLocLoading: PropTypes.bool.isRequired,
  handleGeoLoc: PropTypes.func.isRequired,
};

export default DepartureInput;
