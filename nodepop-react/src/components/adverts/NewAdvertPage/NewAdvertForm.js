import React from 'react';
import useForm from '../../../hooks/useForm';
import { Button, Textarea } from '../../shared';

const MAX_CHARACTERS = 280;

const NewAdvertForm = ({ onSubmit }) => {
  const [advert, handleChange, handleSubmit] = useForm({ content: '' });
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const afterPreventDefault = ev => {
    console.log(ev);
    onSubmit(advert);
  };

  const { content } = advert;
  const handle = handleSubmit(afterPreventDefault);

  const characters = React.useMemo(
    () => `${content.length} / ${MAX_CHARACTERS}`,
    [content]
  );

  return (
    <form onSubmit={handle}>
      <Textarea
        className="newAdvertPage-textarea"
        name="content"
        placeholder="Advert"
        maxLength={MAX_CHARACTERS}
        value={content}
        onChange={handleChange}
        ref={textareaRef}
      />
      <div className="newAdvertPage-footer">
        <span className="newAdvertPage-characters">{characters}</span>
        <Button
          type="submit"
          className="newAdvertPage-submit"
          variant="primary"
          disabled={!content}
        >
          Let's go!
        </Button>
      </div>
    </form>
  );
};

export default NewAdvertForm;
