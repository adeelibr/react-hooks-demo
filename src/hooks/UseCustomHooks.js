import React, { Fragment, useState, useEffect } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function onHandleChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange: onHandleChange };
}

export function CustomHook() {
  const title = useFormInput('Heading');
  const designation = useFormInput('Software Engineer');
  const width = useWindowWidth();
  useDocumentTitle(title.value);
  return (
    <Fragment>
      <section className="row">
        <span>Title</span>
        <input {...title} />
      </section>
      <section className="row">
        <span>Designation</span>
        <input {...designation} />
      </section>
      <section className="row">
        <span>Width</span>
        <input type="text" value={width} disabled />
      </section>
    </Fragment>
  );
}
