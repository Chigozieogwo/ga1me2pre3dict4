import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './searchbox.css'

const SearchBoxVip = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/vip/search/${keyword}`)
    } else {
      history.push('/admin/viplist')
    }
  }

  return (
    <div className="container2">
      <form onSubmit={submitHandler} inline>
        <input
          placeholder="Search By Name"
          type="text"
          className="search-txt-input"
          onChange={(e) => setKeyword(e.target.value)}
          maxlength="100"></input>
        <button type="submit" class="search-button">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBoxVip
