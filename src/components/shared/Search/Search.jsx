import { filter, escapeRegExp, times, debounce } from 'lodash';
import faker from 'faker';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import './search.scss';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
};

const source = times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}));

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value: currentVal }) => {
    this.setState({ isLoading: true, value: currentVal });
    setTimeout(() => {
      const { value } = this.state;
      if (value.length < 1) return this.setState(initialState);

      const re = new RegExp(escapeRegExp(value), 'i');
      const isMatch = result => re.test(result.title);

      return this.setState({
        isLoading: false,
        results: filter(source, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchComponent;
