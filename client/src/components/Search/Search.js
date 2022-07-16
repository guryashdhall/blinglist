import React from 'react';
import SearchField from 'react-search-field';
import {TextField} from '@material-ui/core'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

export default function search({ data }) {
    const [searchData, setSearchData] = React.useState(data);

    handleSearchChange = (event) => {  
        setSearchData(searchData);
    }

    return (
        // <div>
        //     <SearchField
        //         placeholder="Search..."
        //         // onChange={this.onSearchChange}
        //         style={{ width: '50%', height: '400%', marginTop: '10%'}}
        //         // onSearchClick={this.submitSearch}
        //         className="form-group"
        //         // onEnter={this.submitSearch}
        //     />
        // </div>
        <div>
            <TextField
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={searchData}
            onChange={handleSearchChange}
          />
        </div>
    )

}