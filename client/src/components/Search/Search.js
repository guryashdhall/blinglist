import React, { useState } from 'react';
import { TextField } from '@material-ui/core'
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import { BACKEND_URL } from "../../config/config";

export default function Search(props) {
  const [searchData, setSearchData] = useState("");

  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
    console.log(searchData)
  }

  const handleSearchSubmit = async (e) => {
    console.log("Searching...", searchData);
    const user = JSON.parse(localStorage.getItem("user"))
    localStorage.setItem("searchData", searchData);
    if (searchData.length > 0) {

      const keyword = localStorage.getItem("searchData");
      console.log("searching:" + keyword)
      const res = await axios.get(`${BACKEND_URL}search/products?id=${user._id}&keyword=${keyword}`)
      console.log(res.data.data[0])
      console.log(res.data)
      if (res.data.success) {
        localStorage.setItem('products', JSON.stringify(res.data.data))
        props.setProducts(res.data.data)
      }
    } else {
      const res = await axios.get(`${BACKEND_URL}products/getproducts?id=${user._id}`)
      console.log(res.data.data)
      if (res.data.success) {
        localStorage.setItem("products", JSON.stringify(res.data.data))
        props.setProducts(res.data.data)
      }
    }

  }

  return (
    <div>
      <TextField
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon onClick={e => handleSearchSubmit(e)} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={searchData}
        onChange={e => handleSearchChange(e)}
      />
    </div>
  )

}