import React from 'react';
import Select from "react-select";
import classNames from 'classnames';
import { getLatestTags } from '../../api/tags';

import './SelectedTag.css';

function SelectedTag({ className, label, autofocus, ...props }) {
  const [tags, setTags] = React.useState([]);
  const optionsTags = [];
  
  React.useEffect(() => {
    getLatestTags().then(setTags);
  }, []);

  tags.map(tag => {
    const valueTag = {
      label: tag,
      value: tag,
    };
    
    return optionsTags.push(valueTag)
  })

  return (
    <div
      className={classNames(
        'selectedTag',
        { 'selectedTag--focused': false },
        className
      )}
    >
      <label className="selectedTag-label">
        <span>{label}</span>
        <Select
          className="selectedTag-input"
          options={optionsTags}
          isMulti
          {...props}
        />
      </label>
    </div>
  );
}

export default SelectedTag;
