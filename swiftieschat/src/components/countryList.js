import React from 'react';
import {useQuery,gql} from '@apollo/client';

const GET_COUNTRIES = gql`
{
    countries{
        name
        capital
        languages{
            name
        }
    }
}
`
const CountryList = () => {
    const {loading, data, error} = useQuery(GET_COUNTRIES);
    if(loading) return <p> Loadin.. </p>
    if(error) return <p> error: {error.message}</p>
    return (
        <div>
            <h2>Countries List</h2>
            <ul>
                {
                    data.countries.map((country)=> (
                        <li key={country.name}>
                            <strong>{country.name} - Capital: {country.capital}</strong><br/>
                            Languages: {country.languages.map((l)=>l.name).join(',')}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CountryList;