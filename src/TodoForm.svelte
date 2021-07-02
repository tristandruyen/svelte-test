<script lang="ts">
    import {
        Row,
        Col,
        Icon,
        Modal,
        Button,
        ModalBody,
        ModalHeader,
        Form,
        FormGroup,
        Input,
        Label,
    } from "sveltestrap";

    let title = "";
    let description = "";

    let open = false;
    const toggle = () => (open = !open);

    import type { Todo } from "./types";
    import { todos } from "./stores";
    import { v4 as uuid } from "uuid";

    function createTodo(event: Event) {
        let todo: Todo = {
            title: title,
            description: description,
            id: uuid(),
        };

        open = false;
        todos.update((todos) => [...todos, todo])
        event.preventDefault();
    }

    function closeModal(event: Event) {
        open = false;
        event.preventDefault();
    }
</script>

<Button color="primary" on:click={toggle}>
    Add ToDo
    <Icon name="plus-circle" />
</Button>

<Modal isOpen={open} {toggle}>
    <ModalHeader>Add a todo</ModalHeader>

    <ModalBody>
        <Form>
            <FormGroup>
                <Label for="name">Enter todo name:</Label>
                <Input bind:value={title} required />
                <Label for="email">Enter todo describtion:</Label>
                <Input
                    bind:value={description}
                    type="text"
                    name="description"
                    id="description"
                    required
                />
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col sm="10">
                        <Button color="primary" on:click={createTodo}>
                            Create
                        </Button>
                    </Col>

                    <Col sm="2">
                        <Button color="danger" on:click={closeModal}>
                            <Icon name="x-square" />
                        </Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    </ModalBody>
</Modal>
