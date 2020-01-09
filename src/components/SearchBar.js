import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.term);
          }}
        >
          <div className="field">
            <label>Image Search (Press Enter to Submit)</label>
            <input
              type={'text'}
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
