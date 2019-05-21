import React, { Component } from 'react';
import { filter, escapeRegExp, debounce, range, reduce } from 'lodash';
import { Search, Grid } from 'semantic-ui-react';
import { searchArticle } from '../../../actions/search.action';
import './search.scss';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
  getResults: {
    articles: {},
    authors: {},
    tags: {},
  },
};

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = async (e, { value: currentVal }) => {
    this.setState({ isLoading: true, value: currentVal });
    const { authorFilter, articleFilter, keywordFilter } = await searchArticle(
      currentVal
    );
    const newAuthors = [];
    const newArticles = [];
    const newTags = [];
    keywordFilter.slice(0, 3).forEach(tags => {
      newTags.push({
        title: tags.article.title,
        description: tags.article.body.substring(0, 55),
        image: tags.article.author.image_url,
        price: tags.keyword,
      });
    });
    authorFilter.slice(0, 3).forEach(author => {
      newAuthors.push({
        title: author.first_name + author.last_name,
        description: author.bio,
        image: author.image_url,
      });
    });
    articleFilter.slice(0, 3).forEach(article => {
      newArticles.push({
        title: article.title,
        description: article.body.substring(0, 55),
        image: article.author.image_url,
      });
    });
    this.setState({
      getResults: { articles: newArticles, authors: newAuthors, tags: newTags },
    });
    setTimeout(() => {
      const { value, getResults } = this.state;
      if (value.length < 1) return this.setState(initialState);

      const re = new RegExp(escapeRegExp(value), 'i');
      const isMatch = result => re.test(result.title);

      const { articles, authors, tags } = getResults;
      const source = range(0, 3).reduce((result, index) => {
        const name = ['articles', 'authors', 'tags'];
        const results = [articles, authors, tags];
        // eslint-disable-next-line no-param-reassign
        result[name[index]] = {
          name: name[index],
          results: results[index],
        };
        return result;
      }, {});
      const filteredResults = reduce(
        source,
        (memo, data, name) => {
          const results = filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {}
      );

      return this.setState({
        isLoading: false,
        results: filteredResults,
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <div className="search-filter">
        <Grid.Column width={8}>
          <Search
            category
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            // {...this.props}
          />
        </Grid.Column>
      </div>
    );
  }
}

export default SearchComponent;
