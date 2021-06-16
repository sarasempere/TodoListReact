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
		<div key={index} className="row">
			<li className="list-group-item col-8">
				{w}{" "}
				<button className="deleteBtn" onClick={() => deleteItem(w)}>
					X
				</button>
			</li>
		</div>
	));

	return (
		<div className="container">
			<h2 className="col-8 title">~todos~</h2>
			<div className="col-8">
				<input
					className="inputBox"
					type="text"
					placeholder="Add a new task!"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<button class="btn btn-info" onClick={validateInput}>
					Add!
				</button>
			</div>
			<ul className="list-group">{listItems}</ul>
			<p>{`${todos.length} item/s left`}</p>
		</div>
	);
};
