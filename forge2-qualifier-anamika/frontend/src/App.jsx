import { useState } from "react";

function App() {
  const [taskTitle, setTaskTitle] = useState("");

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Build Login Page",
      description: "Create responsive login screen.",
      tag: "Bug",
      member: "Anamika",
      dueDate: "25 June 2026",
      status: "todo",
    },
  ]);

  const addCard = () => {
    if (!taskTitle.trim()) return;

    const newCard = {
      id: Date.now(),
      title: taskTitle,
      description: "New Task",
      tag: "Design",
      member: "Anamika",
      dueDate: "30 June 2026",
      status: "todo",
    };

    setCards([...cards, newCard]);
    setTaskTitle("");
  };

  const moveCard = (id, newStatus) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, status: newStatus } : card
      )
    );
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const renderCards = (status) => {
    return cards
      .filter((card) => card.status === status)
      .map((card) => (
        <div
          key={card.id}
          style={{
            background: "white",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{card.title}</h3>

          <p>{card.description}</p>

          <span
            style={{
              background: "#ef4444",
              color: "white",
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          >
            {card.tag}
          </span>

          <p style={{ marginTop: "10px" }}>
            <strong>Member:</strong> {card.member}
          </p>

          <p>
            <strong>Due:</strong> {card.dueDate}
          </p>

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
            }}
          >
            {status === "todo" && (
              <button onClick={() => moveCard(card.id, "doing")}>
                Move To Doing
              </button>
            )}

            {status === "doing" && (
              <button onClick={() => moveCard(card.id, "done")}>
                Move To Done
              </button>
            )}

            <button onClick={() => deleteCard(card.id)}>
              Delete
            </button>
          </div>
        </div>
      ));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e293b",
          marginBottom: "30px",
        }}
      >
        Tiny Kanban Board
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={addCard}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add Card
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "300px",
            background: "#dbeafe",
            padding: "15px",
            borderRadius: "12px",
            minHeight: "500px",
          }}
        >
          <h2>To Do</h2>
          {renderCards("todo")}
        </div>

        <div
          style={{
            width: "300px",
            background: "#fef3c7",
            padding: "15px",
            borderRadius: "12px",
            minHeight: "500px",
          }}
        >
          <h2>Doing</h2>
          {renderCards("doing")}
        </div>

        <div
          style={{
            width: "300px",
            background: "#dcfce7",
            padding: "15px",
            borderRadius: "12px",
            minHeight: "500px",
          }}
        >
          <h2>Done</h2>
          {renderCards("done")}
        </div>
      </div>
    </div>
  );
}

export default App;