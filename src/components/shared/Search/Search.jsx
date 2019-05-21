import React, { Component } from 'react';
import { range } from 'lodash';
import { Search, Grid } from 'semantic-ui-react';
import { searchArticle } from '../../../actions/search.action';
import './search.scss';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: '',
      getResults: {
        articles: {},
        authors: {},
        tags: {},
      },
    };
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  updateCategoriesWithSearchResult = result => {
    return range(0, 3).reduce((acc, cur) => {
      const name = ['articles', 'authors', 'tags'];
      const results = [...result];
      acc[name[cur]] = {
        name: name[cur],
        results: results[cur],
      };
      return acc;
    }, {});
  };

  handleSearchChange = async (e, { value: currentVal }) => {
    this.setState({ isLoading: true, value: currentVal });
    const { authorFilter, articleFilter, keywordFilter } = await searchArticle(
      currentVal
    );
    const newAuthors = [];
    const newArticles = [];
    const newTags = [];
    keywordFilter.forEach(tags => {
      newTags.push({
        title: tags.article.title,
        description: tags.article.body.substring(0, 55),
        image: tags.article.author.image_url,
        price: tags.keyword,
      });
    });
    authorFilter.forEach(author => {
      newAuthors.push({
        title: author.first_name + author.last_name,
        description: author.bio,
        image: author.image_url,
      });
    });
    articleFilter.forEach(article => {
      newArticles.push({
        title: article.title,
        description: article.body.substring(0, 55),
        image: article.author.image_url,
      });
    });
    this.setState({
      getResults: { articles: newArticles, authors: newAuthors, tags: newTags },
    });
    const { getResults } = this.state;

    return setTimeout(() => {
      const { articles, authors, tags } = getResults;

      const source = this.updateCategoriesWithSearchResult([
        articles,
        authors,
        tags,
      ]);

      return this.setState({
        isLoading: false,
        results: source,
      });
    }, 500);
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <div className="search-filter">
        <Grid.Column width={8}>
          <Search
            category
            placeholder="search"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>
      </div>
    );
  }
}

export default SearchComponent;
