import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";
import Draggable from "react-draggable";

export default function Whiteboard() {
  const [activeAdd, setActiveAdd] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const [headline, setHeadline] = useState("");
  const [textarea, setTextArea] = useState("");
  const [editHeadline, setEditHeadline] = useState("");
  const [editTextarea, setEditTextArea] = useState("");
  const [itemList, setItemList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: nanoid(),
      headline: headline,
      textInput: textarea,
    };

    setItemList([...itemList].concat(newCard));
    setActiveAdd(false);
  };

  const onDelete = (id) => {
    setItemList([...itemList].filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    setItemList(
      itemList.map((item) =>
        item.id === id
          ? {
              headline: editHeadline,
              textInput: editTextarea,
            }
          : item
      )
    );
    setActiveEdit(false);
  };

  return (
    <>
      <StyledContainer>
        <Navigation>
          <StyledButton onClick={() => setActiveAdd(!activeAdd)}>
            Add Todo
          </StyledButton>
        </Navigation>
        {activeAdd ? (
          <StyledForm onSubmit={onSubmit}>
            <label>Headline:</label>
            <input
              type="text"
              name="headline"
              id="headline"
              onChange={(e) => setHeadline(e.target.value)}
              required
            />
            <label>ToDo:</label>
            <textarea
              type="text"
              name="todo"
              id="todo"
              onChange={(e) => setTextArea(e.target.value)}
              required
            />
            <StyledButton type="submit">Submit</StyledButton>
          </StyledForm>
        ) : null}

        {itemList.map((item) => {
          return (
            <>
              {activeEdit ? (
                <>
                  <StyledEditForm>
                    <label>Headline:</label>
                    <input
                      type="text"
                      name="editheadline"
                      id="editheadline"
                      onChange={(e) => setEditHeadline(e.target.value)}
                      required
                    />
                    <label>ToDo:</label>
                    <textarea
                      type="text"
                      name="editTodo"
                      id="editTodo"
                      onChange={(e) => setEditTextArea(e.target.value)}
                      required
                    />
                    <StyledButton onClick={() => editItem(item.id)}>
                      Submit Edit
                    </StyledButton>
                  </StyledEditForm>
                </>
              ) : (
                <Draggable>
                  <ContentContainer key={item.id}>
                    <CardNavigation>
                      <StyledCardButton
                        onClick={() => setActiveEdit(!activeEdit)}
                      >
                        Edit
                      </StyledCardButton>
                      <StyledCardButton onClick={() => onDelete(item.id)}>
                        Delete
                      </StyledCardButton>
                    </CardNavigation>
                    <TextContainer>
                      <p>Headline: {item.headline}</p>
                      <p>Text: {item.textInput}</p>
                    </TextContainer>
                  </ContentContainer>
                </Draggable>
              )}
            </>
          );
        })}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 0.2rem auto;
  background-color: var(--white);
  border-radius: 7px;
`;
const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;
const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  margin-top: 0.5rem;
  box-shadow: 0 0 2px var(--backgroundColor-dark);

  &:hover {
    box-shadow: 0 0 5px black;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  margin: 0 auto;
  color: var(--white);
  max-width: 25%;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 4px var(--backgroundColor-dark);
  background-color: var(--backgroundColor-light);
`;
const StyledEditForm = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  margin: 0 auto;
  color: var(--white);
  max-width: 25%;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 4px var(--backgroundColor-dark);
  background-color: var(--backgroundColor-light);
`;
const ContentContainer = styled.div`
  width: 250px;
  font-size: 18px;
  box-shadow: 0 0 4px var(--backgroundColor-dark);
  margin: 1rem;
`;
const StyledCardButton = styled.button`
  font-size: 16px;
  padding: 3px 10px 3px 10px;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 2px var(--backgroundColor-dark);

  &:hover {
    box-shadow: 0 0 5px black;
  }
`;

const CardNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 5px;
  gap: 10px;
  background-color: var(--backgroundColor-dark);
`;
const TextContainer = styled.div`
  padding: 10px;
`;
