import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function handleDelete(toDelete) {
    const newQuestions = questions.filter(q => q.id !== toDelete.id)
    setQuestions(newQuestions)
  }

  function handleChange(toChange) {
    const newQuestions = questions.map(q => {
      if (q.id === toChange.id) {
        return toChange;
      } else {
        return q;
      }
    })
    setQuestions(newQuestions);
  }

  const listQuestions = 
    questions.map(q => {
      return (
        <QuestionItem key={q.id} question={q} onDeleteItem={handleDelete} onChangeItem={handleChange} />
      )
    })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {listQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
