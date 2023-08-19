import React, { useState } from 'react';
import './SearchSection.css';
import UserCard from '../UserCard/UserCard';
import { FriendData } from '../../dynamicdata/FriendData';
import { FaSearch } from "react-icons/fa";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredFriends = FriendData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='SearchSectionWrapper'>
      <div className='SeacrhTopbar'>
        <h2>Search Friend</h2>
        <div className='Usearchbar'>
          <input
            placeholder='Search Friend'
            className='UsearchInput'
            value={searchQuery}
            onChange={handleSearchChange}
          />

<FaSearch className='searchIcon'></FaSearch>
        </div>
      </div>

      <div className='FriendCards'>
        {filteredFriends.length === 0 ? (
          <p>No user found.</p>
        ) : (
          filteredFriends.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              id={user.id}
              email={user.email}
              ProfilePic={user.ProfilePic}
              ProfileCover={user.ProfileCover}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchSection;
