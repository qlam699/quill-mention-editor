import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-mention';
import 'quill-mention/dist/quill.mention.css';
import '../styles/QuillEditor.css';

function QuillEditor({ value, onChange }) {
  const modules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      source: function (searchTerm, renderList, mentionChar) {
        let values;

        if (mentionChar === "@") {
          values = [
            { id: 1, value: "Fredrik Sundqvist" },
            { id: 2, value: "Patrik Sjölin" }
          ];
        } else {
          values = [
            { id: 1, value: "Sweden" },
            { id: 2, value: "Norway" }
          ];
        }

        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = values.filter(item =>
            item.value.toLowerCase().includes(searchTerm.toLowerCase())
          );
          renderList(matches, searchTerm);
        }
      },
    },
  }), []);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
}

export default QuillEditor;