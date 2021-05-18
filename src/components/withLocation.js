import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const createStorage = (plain) => {
  let keyParameter = queryString.parse(plain)
  if(keyParameter.plain){
    window.localStorage.setItem("plain", true)
  } else {
    window.localStorage.removeItem("plain")
  }
}

const withLocation = ComponentToWrap => props => (
  <Location>
    {({ location, navigate }) => {
        createStorage(location.search)
     return (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}}
  </Location>
)

export default withLocation;