import React, { useState } from "react";

export const Todo = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState(["prueba"]);

	const validateInput = () => {
		setTodos([...todos, inputValue]);
		setInputValue("");
	};

	const deleteItem = item => {
		console.log(item, "item a borrar");
		let deleteList = [];
		todos.map(function(x) {
			if (x != item) {
				deleteList.push(x);
			}
		});

		setTodos(deleteList);
		console.log(todos, "lista todos después de borrar");
	};
	const listItems = todos.map((w, index) => (
		<div key={index}>
			<li className="list-group-item">
				{w} <button onClick={() => deleteItem(w)}>X</button>
			</li>
		</div>
	));

	return (
		<div>
			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button onClick={validateInput}></button>

			<ul className="list-group">{listItems}</ul>
		</div>
	);
};
