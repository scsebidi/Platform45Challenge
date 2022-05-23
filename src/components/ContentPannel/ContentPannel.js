import React from 'react';
import PropTypes from 'prop-types';
import './ContentPannel.css';

const ContentPannel = () => (
  <div id="content"  data-testid="ContentPannel">
    <h1 id="contentTitle" className="centerX">My world today</h1>
    <h2 id="contentBody" className="centerX">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. View all days eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat</h2>
  </div>
);

ContentPannel.propTypes = {};

ContentPannel.defaultProps = {};

export default ContentPannel;
