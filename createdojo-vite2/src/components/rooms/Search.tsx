import React from "react";
import { BiSearchAlt } from "react-icons/bi";

interface SearchProps {
  onSearch: (searchQuery: string) => void; // Function to handle the search action
}

interface SearchState {
  searchQuery: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchQuery: "" };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchQuery);
  };

  render() {
    return (
      <form className="search-container
      flex-grow flex flex-nowrap items-center
      " onSubmit={this.handleSubmit}>
        {/* <BiSearchAlt className="mx-1 h-full search-icon"/> */}
        <input
          type="text"
          placeholder={`\uD83D\uDD0D  Search Room By Owner Or Room ID`}
          className="
          pl-3
          w-full search-input 
          bg-white/80
          placeholder:text-gray-500
          border-2 rounded-md border-gray-600 text-xl p-1"
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
        />
          <button type="submit" style={{ display: "none" }}>
            Search
          </button>
      </form>
    );
  }
}

export default Search;
