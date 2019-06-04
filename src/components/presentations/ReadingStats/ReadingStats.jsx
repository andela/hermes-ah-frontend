import React from 'react';
import PropTypes from 'prop-types';
import ReadingStatsCard from './ReadingCards';
import '../Bookmarked/bookmarked.scss';

const ReadingStats = props => {
  const { dailyStats } = props;
  return (
    <div className="bookmark-articles">
      <div className="header-card">
        <div className="rider">
          <h2>Reading Stats - List of articles you have read </h2>
        </div>
      </div>
      {dailyStats.length ? (
        dailyStats.map(aritcleStats => (
          <ReadingStatsCard
            articleId={aritcleStats.article_id}
            key={aritcleStats.article_id}
            title={
              aritcleStats.Article.title.charAt(0).toUpperCase() +
              aritcleStats.Article.title.slice(1)
            }
          />
        ))
      ) : (
        <p>You have not read any article today!</p>
      )}
    </div>
  );
};
ReadingStats.defaultProps = {
  dailyStats: [],
};

ReadingStats.propTypes = {
  dailyStats: PropTypes.arrayOf(PropTypes.shape()),
};
export default ReadingStats;
