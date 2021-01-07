import React from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  TextArea,
  Message,
} from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../modules/createArticle";

function CreateArticle() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.createArticleMessage);

  return (
    <Container>
      <Header>Create Article</Header>
      <Form
        data-cy="article-form"
        onSubmit={(event) => createArticle.create(event, dispatch)}
      >
        <Form.Field
          data-cy="title-field"
          label="Article title"
          control={Input}
          name="title"
          placeholder="Title"
        />
        <Form.Field
          data-cy="lead-field"
          label="Article lead"
          control={Input}
          name="lead"
          placeholder="Lead"
        />
        <Form.Field
          data-cy="body-field"
          label="Article body"
          control={TextArea}
          name="body"
          placeholder="Body"
        />
        <Button
          data-cy="create-article-button"
          type="submit"
          color="teal"
          value="submit"
        >
          Create Article
        </Button>
        {message && (
          <Message color="green" size="big" data-cy="api-response-message">
            {message}
          </Message>
        )}
      </Form>
    </Container>
  );
}

export default CreateArticle;
