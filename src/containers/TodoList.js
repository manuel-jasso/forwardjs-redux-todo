import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

const TodoList = ({ todos, onTodoToggle, onTodoRemove }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onToggle={() => onTodoToggle(todo.id)}
        onRemove={() => onTodoRemove(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
}
